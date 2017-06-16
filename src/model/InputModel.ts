"use strict";
import IInputModel from './IInputModel';

class InputModel implements IInputModel
{
    /**
     * Source's name
     * @type {string}
     */
    private sourceName : string = null;

    /**
     * Determines if flag 'init'' was activated
     * @type {boolean}
     */
    private init : boolean = false;

    /**
     * Custom working directory path
     * @type {string}
     */
    private pwd : string = null;

    public constructor()
    {

    }

    /**
     * Sets file's name
     * @param sourceName
     */
    public setSourceName(sourceName : string) : void
    {
        this.sourceName = sourceName;
    }

    /**
     * Sets 'init' state
     * @param initState
     */
    public setInitState(initState : boolean) : void
    {
        this.init = initState;
    }

    /**
     * Sets custom working directory's path
     * @param customWorkingDirectoryPath
     */
    public setPwd(customWorkingDirectoryPath : string) : void
    {
        this.pwd = customWorkingDirectoryPath;
    }

    /**
     * Gets file's name
     * @returns {string}
     */
    public getSourceName() : string
    {
        return this.sourceName;
    }

    /**
     * Gets 'init' state
     * @returns {boolean}
     */
    public getInitState() : boolean
    {
        return this.init;
    }

    /**
     * Gets custom working directory's path
     * @returns {string}
     */
    public getPwd() : string|null
    {
        return this.pwd;
    }
}

export default InputModel;