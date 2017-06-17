/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Application from './../app';

class ContainerModel
{
    /**
     * Working directory
     * @type {any}
     */
    private workingDirectory : string = null;

    /**
     * Variables defined by user
     * @type {any}
     */
    private customVars : any = null;

    public constructor()
    {
        this.workingDirectory = Application.WorkingDirectory;
    }

    /**
     * Working directory
     * @returns {string}
     * @constructor
     */
    get WorkingDirectory() : string
    {
        return this.workingDirectory;
    }

    /**
     * Sets working directory
     * @param value
     * @constructor
     */
    set WorkingDirectory(value : string)
    {
        this.workingDirectory = value;
    }

    /**
     * Gets variables defined by user
     * @returns {any}
     * @constructor
     */
    get Vars() : any
    {
        return this.customVars;
    }

    /**
     * Sets variables defined by user
     * @param value
     * @constructor
     */
    set Vars(value : any)
    {
        this.customVars = value;
    }
}

export default ContainerModel;