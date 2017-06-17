/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import ModelCollection from './../model/collection/ModelCollection';
import CommandModel from './../model/CommandModel';
import SpaceModel from './../model/SpaceModel';
import ConfigModel from './../model/ConfigModel';
import CommandModelConverter from './CommandModelConverter';
import SpaceModelConverter from './SpaceModelConverter';

class ConfigModelConverter
{
    public static convert(rawObject : any) : ConfigModel
    {
        /**
         * Initializes a new model of config
         * @type {ConfigModel}
         */
        let config : ConfigModel = new ConfigModel();

        /**
         * Validates raw object
         */
        this.validateRawObject(rawObject);

        /**
         * Converts commands into collection
         * @type {ModelCollection<CommandModel>}
         */
        let commands : ModelCollection<CommandModel> = CommandModelConverter.convertToModelCollection(rawObject.commands);

        /**
         * Converts spaces into collection
         * @type {ModelCollection<SpaceModel>}
         */
        let spaces : ModelCollection<SpaceModel> = SpaceModelConverter.convertToModelCollection(rawObject.spaces);

        config.Commands.merge(commands);
        config.Spaces.merge(spaces);


        return config;
    }

    /**
     * Validates raw object (object from parsed JSON string)
     * @param rawObject
     */
    private static validateRawObject(rawObject : any)
    {
        if (rawObject.commands === null || rawObject.commands === undefined){
            throw new Error("Missed property 'commands' at config file!");
        }

        if (rawObject.spaces === null || rawObject.spaces === undefined){
            throw new Error("Missed property 'spaces' at config file!");
        }

        if (!(typeof (rawObject.commands) === 'object')){
            throw new Error("Value under property 'commands' is not an object");
        }

        if (!Array.isArray(rawObject.spaces)){
            throw new Error("Value under property 'spaces' is not an array");
        }
    }

}

export default ConfigModelConverter;