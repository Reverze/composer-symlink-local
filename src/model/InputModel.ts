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

    private attach : boolean = false;

    private detach : boolean = false;

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
     * Sets 'attach' state
     * @param attachState
     */
    public setAttachState(attachState : boolean) : void
    {
        this.attach = attachState;
    }

    /**
     * Sets 'detach' state
     * @param detachState
     */
    public setDetachState(detachState : boolean) : void
    {
        this.detach = detachState;
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
     * Gets 'attach' state
     * @returns {any}
     */
    public getAttachState() : boolean
    {
        return this.attach;
    }

    /**
     * Gets 'detach' state
     * @returns {boolean}
     */
    public getDetachState() : boolean
    {
        return this.detach;
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