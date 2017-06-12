"use strict";
import MapModel from './../../model/MapModel';
import MapNodeModel from './../../model/MapNodeModel';
import ModelCollection from './../../model/collection/ModelCollection';
import { expect } from 'chai';

class FakeModel
{

}

describe("MapModel Test", () => {

    it("should add node to map", () => {
        let map : MapModel = new MapModel();
        map.addNode(new MapNodeModel());

        let nodes : ModelCollection<MapNodeModel> = map.Nodes;

        expect(nodes.Count).to.equal(1);
    });

});