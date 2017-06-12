"use strict";
import * as validator from 'validator';
import MapNodeModel from './MapNodeModel';
import ModelCollection from './collection/ModelCollection';

class MapModel
{
    /**
     * Map's nodes
     * @type {MapNodeModel[]}
     */
    private nodes : ModelCollection<MapNodeModel> = null;

    public constructor()
    {
        this.nodes = new ModelCollection<MapNodeModel>();
    }

    /**
     * Adds node to map
     * @param mapNode
     */
    public addNode(mapNode : MapNodeModel)
    {

        if (!(mapNode instanceof MapNodeModel)){
            throw new Error("Node is not instanceof 'MapNodeModel'");
        }

        this.nodes.push(mapNode);
    }

    /**
     * Gets map's nodes
     * @returns {ModelCollection<MapNodeModel>}
     * @constructor
     */
    get Nodes() : ModelCollection<MapNodeModel>
    {
        return this.nodes;
    }
}

export default MapModel;