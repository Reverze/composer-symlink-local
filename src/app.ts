"use strict";
import * as path from 'path';
import * as fs from 'fs';
import * as validator from 'validator';
import InputParser from './input/InputParser';
import IInputModel from './model/IInputModel';
import ConfigReader from './config/ConfigReader';

export default class Application
{
    /**
     * Current application working directory
     * @type {string}
     */
    private currentWorkingDirectory : string = null;

    /**
     * CLI input model
     * @type {IInputModel}
     */
    private inputModel : IInputModel = null;

    public constructor(workingDirectoryPath : string)
    {
        this.validateWorkingDirectoryPath(workingDirectoryPath);
        this.currentWorkingDirectory = workingDirectoryPath;
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

    public execute(args : Array<string>) : void
    {
        let parser : InputParser = new InputParser(args);
        let inputModel : IInputModel = parser.getModel();

        inputModel.setFilePath(path.join(this.currentWorkingDirectory,
            inputModel.getFileName()));

        let configReader : ConfigReader = new ConfigReader(this.currentWorkingDirectory);
        configReader.load(inputModel);


    }


}

