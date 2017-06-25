"use strict";
import * as path from 'path';
import * as fs from 'fs';
import * as validator from 'validator';
import InputParser from './input/InputParser';
import IInputModel from './model/IInputModel';
import EventServer from './event/EventServer';
import EventListener from './event/EventListener';
import EventArgs from './event/EventArgs';
import FlowController from './app/FlowController';
import CommandContainer from './command/CommandContainer';


/**
 * @events.core
 */
import Event from './event/Event';
import FlagEvent from './event/core/FlagEvent';
import OptionEvent from './event/core/OptionEvent';

import InitFlagEvent from './event/core/InitFlagEvent';
import TestFlagEvent from './event/core/TestFlagEvent';
import PwdOptionEvent from './event/core/PwdOptionEvent';
import SourceOptionEvent from './event/core/SourceOptionEvent';
import ReadSourceEvent from './event/core/ReadSourceEvent';
import AttachSymlinksFlagEvent from './event/core/AttachSymlinksFlagEvent';
import DetachSymlinksFlagEvent from './event/core/DetachSymlinksFlagEvent';
import EvalOptionEvent from './event/core/EvalOptionEvent';

/**
 * @executors.core
 */
import InitConfigExecutor from './executor/InitConfigExecutor';
import TestConfigExecutor from './executor/TestConfigExecutor';
import CustomPwdExecutor from './executor/CustomPwdExecutor';
import CustomSourceExecutor from './executor/CustomSourceExecutor';
import ReadSourceExecutor from './executor/ReadSourceExecutor';
import AttachSymlinksExecutor from './executor/AttachSymlinksExecutor';
import DetachSymlinksExecutor from './executor/DetachSymlinksExecutor';
import EvalExecutor from './executor/EvalExecutor';

/**
 * @events_args.core
 */
import CustomPwdEventArgs from './event/core/args/CustomPwdEventArgs';
import CustomSourceEventArgs from './event/core/args/CustomSourceEventArgs';
import AttachSymlinksEventArgs from './event/core/args/AttachSymlinksEventArgs';
import DetachSymlinksEventArgs from './event/core/args/DetachSymlinksEventArgs';
import EvalEventArgs from './event/core/args/EvalEventArgs';

/**
 * @commands.core
 */
import AttachCommand from "./command/core/AttachCommand";
import DetachCommand from "./command/core/DetachCommand";
import EvalCommand from "./command/core/EvalCommand";

export default class Application
{
    /**
     * Current application working directory
     * @type {string}
     */
    private static currentWorkingDirectory : string = __dirname;

    /**
     * CLI input model
     * @type {IInputModel}
     */
    private inputModel : IInputModel = null;

    /**
     * Application flow control manager
     * @type {any}
     */
    private flow : FlowController = null;

    public constructor(workingDirectoryPath : string)
    {
        this.validateWorkingDirectoryPath(workingDirectoryPath);

        Application.currentWorkingDirectory = workingDirectoryPath;

        this.flow = new FlowController();
    }

    /**
     * Gets current working directory path
     * @returns {string}
     * @constructor
     */
    static get WorkingDirectory() : string
    {
        return Application.currentWorkingDirectory;
    }

    /**
     * Validates working directory path
     * @param workingDirectoryPath
     */
    public validateWorkingDirectoryPath(workingDirectoryPath : string) : void
    {
        if (workingDirectoryPath === null || workingDirectoryPath === undefined)
        {
            throw new Error("Working directory path is not defined!");
        }

        if (validator.isEmpty(workingDirectoryPath)){
            throw new Error("Working directory path was given but is empty!");
        }

        if (!fs.existsSync(workingDirectoryPath)){
            throw new Error("Working directory path is not valid. Directory not exists in your filesystem");
        }
    }

    public registerCommands()
    {
        CommandContainer.define(new AttachCommand);
        CommandContainer.define(new DetachCommand);
        CommandContainer.define(new EvalCommand);
    }

    /**
     * Register events
     */
    public registerEvents()
    {
        EventServer.define<FlagEvent>(InitFlagEvent);
        EventServer.define<FlagEvent>(TestFlagEvent);
        EventServer.define<OptionEvent>(PwdOptionEvent);
        EventServer.define<OptionEvent>(SourceOptionEvent);
        EventServer.define<Event>(ReadSourceEvent);
        EventServer.define<FlagEvent>(AttachSymlinksFlagEvent);
        EventServer.define<FlagEvent>(DetachSymlinksFlagEvent);
        EventServer.define<OptionEvent>(EvalOptionEvent);
    }

    public registerCoreEventWatchers()
    {
        /**
         * Should be executed on '--pwd [path]'
         */
        EventServer.watch<OptionEvent>(PwdOptionEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new CustomPwdExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--source [fileName]'
         */
        EventServer.watch<OptionEvent>(SourceOptionEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new CustomSourceExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--init'
         */
        EventServer.watch<FlagEvent>(InitFlagEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new InitConfigExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--test'
         */
        EventServer.watch<FlagEvent>(TestFlagEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new TestConfigExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed to read config file
         */
        EventServer.watch<Event>(ReadSourceEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new ReadSourceExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--attach'
         */
        EventServer.watch<FlagEvent>(AttachSymlinksFlagEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new AttachSymlinksExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--detach'
         */
        EventServer.watch<FlagEvent>(DetachSymlinksFlagEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new DetachSymlinksExecutor().Worker;
            return eventListener;
        })());

        EventServer.watch<OptionEvent>(EvalOptionEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = (sender, args) => { new EvalExecutor().work(sender, args) };
            return eventListener;
        })());

    }


    public execute(args : Array<string>) : void
    {
        this.registerEvents();
        this.registerCoreEventWatchers();
        this.registerCommands();

        let parser : InputParser = new InputParser(args);
        let inputModel : IInputModel = parser.getModel();

        /**
         * When user wants to define custom source file (config file) name
         */
        if (inputModel.getSourceName() !== null){
            let args : CustomSourceEventArgs = new CustomSourceEventArgs(inputModel.getSourceName());
            EventServer.trigger<OptionEvent>(SourceOptionEvent, this.flow, args);
        }

        /**
         * When user wants to define custom working directory
         */
        if (inputModel.getPwd() !== null){
            let args : CustomPwdEventArgs = new CustomPwdEventArgs(inputModel.getPwd());
            EventServer.trigger<OptionEvent>(PwdOptionEvent, this.flow, args);
        }

        /**
         * If user passed '--init', example config file should be created
         */
        if (inputModel.getInitState() === true){
            EventServer.trigger<FlagEvent>(InitFlagEvent, this.flow, new EventArgs());
        }

        /**
         * If everything ok, reads config file
         */
        EventServer.trigger<Event>(ReadSourceEvent, this.flow, new EventArgs());

        /**
         * If user passsed '--test'
         */
        if (inputModel.getTestState() === true){
            EventServer.trigger<FlagEvent>(TestFlagEvent, this.flow, new EventArgs());
        }

        if (inputModel.getAttachState() !== false){
            let args : AttachSymlinksEventArgs = new AttachSymlinksEventArgs();
            args.Spaces = inputModel.getAttachState() === 'true' ? [] :
                (inputModel.getAttachState() as string).trim().split(',');

            EventServer.trigger<FlagEvent>(AttachSymlinksFlagEvent, this.flow, args);
        }

        if (inputModel.getDetachState() === true){
            let args : DetachSymlinksEventArgs = new DetachSymlinksEventArgs();
            args.Spaces = inputModel.getDetachState() === 'true' ? [] :
                (inputModel.getDetachState() as string).trim().split(',');

            EventServer.trigger<FlagEvent>(DetachSymlinksFlagEvent, this.flow, args);
        }


    }


}

