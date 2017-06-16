"use strict";
import * as process from 'process';
import IStandardOutput from './../output/IStandardOutput';
import StandardOutput from './../output/StandardOutput';

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

    public constructor()
    {
        this.standardOutput = new StandardOutput();
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
     * Stops application executing
     */
    public exit()
    {
        process.exit();
    }
}

export default FlowController;