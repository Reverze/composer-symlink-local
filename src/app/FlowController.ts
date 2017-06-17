/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import * as process from 'process';
import IStandardOutput from './../output/IStandardOutput';
import StandardOutput from './../output/StandardOutput';
import ContainerModel from './../model/ContainerModel';
import ConfigModel from './../model/ConfigModel';

class FlowController
{
    /**
     * Working directory
     * @type {string}
     */
    private workingDirectoryPath : string = null;

    /**
     * Source's file name
     * @type {string}
     */
    private sourceFileName : string = 'composer.local.json';
    /**
     * Standard output
     * @type {IStandardOutput}
     */
    private standardOutput : IStandardOutput = null;

    /**
     * Config model
     * @type {ConfigModel}
     */
    private config : ConfigModel = null;

    public constructor()
    {
        this.standardOutput = new StandardOutput();
        this.config = new ConfigModel();
    }

    /**
     * Gets standard output handler
     * @returns {IStandardOutput}
     * @constructor
     */
    get Output() : IStandardOutput
    {
        return this.standardOutput;
    }

    /**
     * Gets working directory's path
     * @returns {string}
     * @constructor
     */
    get WorkingDirectory() : string
    {
        return this.workingDirectoryPath;
    }

    /**
     * Gets source file's name
     * @returns {string}
     * @constructor
     */
    get SourceFileName() : string
    {
        return this.sourceFileName;
    }

    /**
     * Gets container
     * @returns {ContainerModel}
     * @constructor
     */
    get Container() : ContainerModel
    {
        let container : ContainerModel = new ContainerModel();
        container.WorkingDirectory = this.workingDirectoryPath;

        return container;
    }

    /**
     * Gets config
     * @returns {ConfigModel}
     * @constructor
     */
    get Config() : ConfigModel
    {
        return this.config;
    }

    /**
     * Sets working directory's path
     * @param value
     * @constructor
     */
    set WorkingDirectory(value : string)
    {
        this.workingDirectoryPath = value;
    }

    /**
     * Sets source's file name
     * @param value
     * @constructor
     */
    set SourceFileName(value : string)
    {
        if (value === null || value === undefined){
            throw new Error("Source's name cannot be null!");
        }

        this.sourceFileName = value;
    }

    /**
     * Sets config
     * @param value
     * @constructor
     */
    set Config(value : ConfigModel)
    {
        this.config = value;
    }

    /**
     * Stops application executing
     */
    public exit()
    {
        process.exit();
    }
}

export default FlowController;