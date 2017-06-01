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
}

export default InputModel;