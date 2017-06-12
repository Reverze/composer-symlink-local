/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import * as validator from 'validator';

class MapNodeModel
{
    /**
     * Source's directory path
     * @type {string}
     */
    private sourceDirPath : string = null;

    /**
     * Link's name
     * @type {string}
     */
    private linkName : string = null;


    /**
     * Sets source's directory path
     * @param dirPath
     * @constructor
     */
    set SourceDirectoryPath(dirPath : string)
    {
        if (dirPath === null || dirPath === undefined){
            throw new Error("Source's directory path is not defined!");
        }

        if (validator.isEmpty(dirPath)){
            throw new Error("Source's directory path is empty!");
        }

        this.sourceDirPath = dirPath;
    }

    /**
     * Sets link's name
     * @param name
     * @constructor
     */
    set LinkName(name : string)
    {
        if (name === null || name === undefined){
            throw new Error("Link's name is not defined!");
        }

        if (validator.isEmpty(name)){
            throw new Error("Link's name cannot be empty!");
        }

        this.linkName = name;
    }

    /**
     * Gets source's directory path
     * @returns {string}
     * @constructor
     */
    get SourceDirectoryPath() : string
    {
        return this.sourceDirPath;
    }

    /**
     * Gets link's name
     * @returns {string}
     * @constructor
     */
    get LinkName() : string
    {
        return this.linkName;
    }
}

export default MapNodeModel;