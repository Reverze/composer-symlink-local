"use strict";
import IInputModel from './IInputModel';

class InputModel implements IInputModel
{
    /**
     * File's name
     * @type {string}
     */
    private fileName : string = null;

    /**
     * File's path
     * @type {string}
     */
    private filePath : string = null;

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
     * @param fileName
     */
    public setFileName(fileName : string) : void
    {
        this.fileName = fileName;
    }

    /**
     * Sets file's path
     * @param filePath
     */
    public setFilePath(filePath : string) : void
    {
        this.filePath = filePath;
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
    public getFileName() : string
    {
        return this.fileName;
    }

    /**
     * Gets file's path
     * @returns {string}
     */
    public getFilePath() : string
    {
        return this.filePath;
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