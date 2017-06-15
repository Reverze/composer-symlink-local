/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import MapModel from './../model/MapModel';
import MapNodeModel from './../model/MapNodeModel';
import Application from './../app';
import * as path from 'path';

class MapModelConverter
{
    /**
     * Converts raw space's map into model
     * @param rawNodes
     * @returns {MapModel}
     */
    public static convertToMap(rawNodes : Array<any>) : MapModel
    {
        let map : MapModel = new MapModel();

        for (let rawNode of rawNodes){
            let node : MapNodeModel = new MapNodeModel();
            MapModelConverter.validateRawNode(rawNode);

            node.LinkName = rawNode.linkName;
            node.SourceDirectoryPath = path.resolve(Application.WorkingDirectory, rawNode.source);
            map.addNode(node);
        }

        return map;
    }

    /**
     * Validates raw node
     * @param rawNode
     */
    private static validateRawNode(rawNode : any) : void
    {
        if (!rawNode.linkName){
            throw new Error("Node in space's map missing 'linkName");
        }

        if (!rawNode.source){
            throw new Error("Node in space's map missing 'source");
        }

    }

}

export default MapModelConverter;
