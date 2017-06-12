"use strict";
import SpaceModelConverter from './../../converter/SpaceModelConverter';
import ModelCollection from './../../model/collection/ModelCollection';
import SpaceModel from './../../model/SpaceModel';
import { expect } from 'chai';

describe("SpaceModelConverter Test", () => {
    beforeEach(function() {

    });

    it("should convert raw array into collection", () => {
        let rawSpaces = [
            {
                name: "my-framework-dependencies",
                rootDir: "./vendor/rev",
                map: [
                    {
                        source: "/home/me/ProjectOne",
                        linkName: "my-project-one"
                    },
                    {
                        source: "/home/me/ProjectTwo",
                        linkName: "my-project-two"
                    }

                ]
            }

        ];

        let collection : ModelCollection<SpaceModel> = SpaceModelConverter.convertToModelCollection(rawSpaces);

        expect(collection.Count).to.equal(1);
    });
});