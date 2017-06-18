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

    /**
     * Determines if flag 'test' was activated
     * @type {boolean}
     */
    private test : boolean = false;

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
     * Sets 'test' state
     * @param testState
     */
    public setTestState(testState : boolean) : void
    {
        this.test = testState;
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
     * Gets 'test' state
     * @returns {boolean}
     */
    public getTestState() : boolean
    {
        return this.test;
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