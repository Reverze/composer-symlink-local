"use strict";
import * as validator from 'validator';
import MapNodeModel from './MapNodeModel';

class MapModel
{
    /**
     * Map's nodes
     * @type {MapNodeModel[]}
     */
    private nodes : Array<MapNodeModel> = Array();

    /**
     * Adds node to map
     * @param mapNode
     */
    public addNode(mapNode : MapNodeModel)
    {
        if (!(mapNode instanceof MapNodeModel)){
            throw new Error("Mapnode is not instanceof 'MapNodeModel'");
        }

        this.nodes.push(mapNode);
    }

    /**
     * Gets map's nodes
     * @returns {Array<MapNodeModel>}
     * @constructor
     */
    get Nodes() : Array<MapNodeModel>
    {
        return this.nodes;
    }
}

export default MapModel;