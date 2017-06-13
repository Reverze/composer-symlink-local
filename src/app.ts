"use strict";
import * as path from 'path';
import * as fs from 'fs';
import * as validator from 'validator';
import InputParser from './input/InputParser';
import IInputModel from './model/IInputModel';
import ConfigReader from './config/ConfigReader';
import EventServer from './event/EventServer';
import EventListener from './event/EventListener';
import EventArgs from './event/EventArgs';
import FlowController from './app/FlowController';

/**
 * @events.core
 */
import FlagEvent from './event/core/FlagEvent';
import OptionEvent from './event/core/OptionEvent';

import InitFlagEvent from './event/core/InitFlagEvent';
import PwdOptionEvent from './event/core/PwdOptionEvent';

/**
 * @executors.core
 */
import InitConfigExecutor from './executor/InitConfigExecutor';
import CustomPwdExecutor from './executor/CustomPwdExecutor';

/**
 * @events_args.core
 */
import CustomPwdEventArgs from './event/core/args/CustomPwdEventArgs';

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

    /**
     * Register events
     */
    public registerEvents()
    {
        EventServer.define<FlagEvent>(InitFlagEvent);
        EventServer.define<OptionEvent>(PwdOptionEvent);
    }

    public registerCoreEventWatchers()
    {
        /**
         * Should be executed on '--init'
         */
        EventServer.watch<FlagEvent>(InitFlagEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new InitConfigExecutor().Worker;
            return eventListener;
        })());

        /**
         * Should be executed on '--pwd [path]'
         */
        EventServer.watch<OptionEvent>(PwdOptionEvent, (() => {
            let eventListener : EventListener = new EventListener();
            eventListener.Receiver = new CustomPwdExecutor().Worker;
            return eventListener;
        })());
    }


    public execute(args : Array<string>) : void
    {
        this.registerEvents();
        this.registerCoreEventWatchers();

        let parser : InputParser = new InputParser(args);
        let inputModel : IInputModel = parser.getModel();

        inputModel.setFilePath(path.resolve(Application.currentWorkingDirectory,
            inputModel.getFileName()));

        /**
         * When user wants to define custom working directory
         */
        if (inputModel.getPwd() !== null){
            let args : CustomPwdEventArgs = new CustomPwdEventArgs(inputModel.getPwd());
            EventServer.trigger<OptionEvent>(PwdOptionEvent, this.flow, args);
        }

        if (inputModel.getInitState() === true){
            EventServer.trigger<FlagEvent>(InitFlagEvent, this.flow, new EventArgs());
        }

        /*
        let configReader : ConfigReader = new ConfigReader(Application.currentWorkingDirectory);
        configReader.load(inputModel);*/


    }


}

