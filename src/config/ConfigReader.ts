/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import * as fs from 'fs';
import * as path from 'path';
import * as validator from 'validator';
import * as sprintf from 'sprintf';

class ConfigReader
{
    /**
     * Working directory path
     * @type {string}
     */
    private workingDirectory : string = null;

    /**
     * Source's file name
     * @type {any}
     */
    private sourceFileName : string = null;

    public constructor(workingDirectory : string, sourceName : string)
    {
        this.workingDirectory = workingDirectory;
        this.sourceFileName = sourceName;
    }

    /**
     * Reads config file into object
     * @returns {any}
     */
    public read()
    {
        let configFilePath : string = path.resolve(this.workingDirectory, this.sourceFileName);

        this.checkConfigFile(configFilePath);

        let fileContent = fs.readFileSync(configFilePath, 'utf8');

        return JSON.parse(fileContent);
    }

    /**
     * Checks if config file exists etc.
     * No values are returned.
     * @param configFilePath
     */
    protected checkConfigFile(configFilePath : string)
    {
        if (configFilePath === null || configFilePath === undefined){
            throw new Error("Config file path is not defined!");
        }

        if (!(typeof(configFilePath) === 'string')){
            throw new Error("Config file path is not a string");
        }

        if (validator.isEmpty(configFilePath)){
            throw new Error("Config file path is empty!");
        }

        if (!fs.existsSync(configFilePath)){
            throw new Error(sprintf("Config file is not exists on path '%s'", configFilePath));
        }
    }
}

export default ConfigReader;