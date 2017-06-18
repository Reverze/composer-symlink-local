/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import ModelCollection from './../model/collection/ModelCollection';
import SpaceModel from './../model/SpaceModel';
import MapModel from './../model/MapModel';
import MapModelConverter from './MapModelConverter';
import ContainerModel from './../model/ContainerModel';
import Application from './../app';
import * as path from 'path';

class SpaceModelConverter
{
    public constructor()
    {

    }

    /**
     * Converts to model collection
     * @param spaces
     * @returns {ModelCollection<SpaceModel>}
     */
    public static convertToModelCollection(spaces : Array<any>, container ?: ContainerModel) : ModelCollection<SpaceModel>
    {
        let spaceCollection : ModelCollection<SpaceModel> = new ModelCollection<SpaceModel>();

        for(let rawSpace of spaces){
            let space : SpaceModel = new SpaceModel();

            SpaceModelConverter.validateRawSpaceObject(rawSpace);
            space.Name = rawSpace.name;
            space.DirectoryPath = path.resolve(container ? container.WorkingDirectory : Application.WorkingDirectory, rawSpace.rootDir);

            let map : MapModel = MapModelConverter.convertToMap(rawSpace.map, space.DirectoryPath, container);

            space.Map = map;
            spaceCollection.push(space);
        }

        return spaceCollection;
    }

    /**
     * Validates raw space object
     * @param rawSpace
     */
    private static validateRawSpaceObject(rawSpace : any) : void
    {
        if (!rawSpace.name){
            throw new Error("Space's name is not defined!");
        }

        if (!rawSpace.rootDir){
            throw new Error("Space's root directory path is not defined!");
        }

        if (!rawSpace.map){
            throw new Error("Space's map is not defined!");
        }

        if (!Array.isArray(rawSpace.map)){
            throw new Error("Space's map is not an array!");
        }
    }
}

export default SpaceModelConverter;