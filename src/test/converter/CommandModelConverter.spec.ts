"use strict";
import CommandModelConverter from './../../converter/CommandModelConverter';
import CommandModel from './../../model/CommandModel';
import CommandSequenceModel from './../../model/CommandSequenceModel';
import { expect } from 'chai';
import ModelCollection from "../../model/collection/ModelCollection";

describe("CommandModelConverter Test", () => {
    it("should convert without any errors", () => {
        let rawObject = {
            update: {
                $detach: "$space.framework",
                $eval: "composer update",
                $attach: "$space.framework"
            },
            install: {
                $detach: "$space",
                $eval: "composer install",
                $attach: "$space"
            }
        };

        let commandCollection : ModelCollection<CommandModel> =
            CommandModelConverter.convertToModelCollection(rawObject);

        expect(commandCollection.Count).to.equal(2);

        let counter = 0;
        for(let command of commandCollection.each()){
            expect(command.Name).to.equal(Object.keys(rawObject)[counter]);
            counter++;

        }

    });
});