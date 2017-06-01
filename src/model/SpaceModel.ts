"use strict";
import * as validator from 'validator';
import MapModel from './MapModel';

class SpaceModel
{
    /**
     * Space's name
     * @type {string}
     */
    private name : string = null;

    /**
     * Space's relative/absolute directory path
     * @type {string}
     */
    private directoryPath : string = null;

    /**
     * Space's map
     * @type {MapModel}
     */
    private map : MapModel = null;

    public constructor()
    {

    }

    /**
     * Sets space's name
     * @param name
     * @constructor
     */
    set Name(name : string)
    {
        if (name === null || name === undefined){
            throw new Error("Space's name is not defined!");
        }

        if (validator.isEmpty(name)){
            throw new Error("Space's name cannot be empty!");
        }

        this.name = name.toLowerCase();
    }

    /**
     * Sets space's directory path (relative/absolute)
     * @param dirPath
     * @constructor
     */
    set DirectoryPath(dirPath : string)
    {
        if (dirPath === null || dirPath === undefined){
            throw new Error("Space's directory path is not defined!");
        }

        if (validator.isEmpty(dirPath)){
            throw new Error("Space's directory path cannot be empty!");
        }

        this.directoryPath = dirPath;
    }

    /**
     * Sets space's map
     * @param map
     * @constructor
     */
    set Map(map : MapModel)
    {
        if (!(map instanceof MapModel)){
            throw new Error("Invalid map model instance!");
        }

        this.map = map;
    }

    /**
     * Gets space's name
     * @returns {string}
     * @constructor
     */
    get Name() : string
    {
        return this.name;
    }

    /**
     * Gets space's directory path
     * @returns {string}
     * @constructor
     */
    get DirectoryPath() : string
    {
        return this.directoryPath;
    }

    /**
     * Gets space's map
     * @returns {MapModel}
     * @constructor
     */
    get Map() : MapModel
    {
        return this.map;
    }
}

export default SpaceModel;