"use strict";
import IIInputModel from './../model/IInputModel';
import * as fs from 'fs';
import * as validator from 'validator';

class ConfigReader
{
    /**
     * Working directory
     * @type {string}
     */
    private workingDirectory : string = null;

    public constructor(workingDirectory : string)
    {
        this.workingDirectory = workingDirectory;
    }

    public load(input : IIInputModel)
    {
        let configFilePath = input.getFilePath();

        if (configFilePath === null || configFilePath === undefined){
            throw new Error("Config's file path is not defined!");
        }

        if (validator.isEmpty(configFilePath)){
            throw new Error("Config's file path is empty!");
        }

        if (!fs.existsSync(configFilePath)){
            throw new Error("Config's file is not exists");
        }

        let fileContent = fs.readFileSync(configFilePath, 'utf8');

        console.log(fileContent);


    }
}

export default ConfigReader;