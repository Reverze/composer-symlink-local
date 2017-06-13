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
     * Sets working directory's path
     * @param value
     * @constructor
     */
    set WorkingDirectory(value : string)
    {
        this.workingDirectoryPath = value;
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