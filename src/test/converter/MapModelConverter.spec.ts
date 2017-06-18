"use strict";
import MapModelConverter from './../../converter/MapModelConverter';
import MapModel from './../../model/MapModel';
import MapNodeModel from './../../model/MapNodeModel';
import { expect } from 'chai';

describe("MapModelConverter Test", () => {
    it("should convert raw object into model without errors", () => {
        let rawNodes = [
            {
                source: "/home/my/Project",
                linkName: "my-dependency"
            },
            {
                source: "/home/my/Project2",
                linkName: "my-dependency2"
            }
        ];

        let map : MapModel = MapModelConverter.convertToMap(rawNodes, "/virtual");


        expect(map.Nodes.Count).to.equal(2);
    });
});
