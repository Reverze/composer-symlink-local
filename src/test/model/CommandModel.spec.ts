"use strict";
import CommandModel from './../../model/CommandModel';
import { expect } from 'chai';

describe("CommandModel Test", function() {
    it("should throw an error when command's name was not specifed", function() {
        let command : CommandModel = new CommandModel();

        expect(() => {
            command.Name = null;
        }).to.throw(Error);

        expect(() => {
            command.Name = undefined;
        }).to.throw(Error);
    });

    it("should throw an error when command's name was specified but is empty", function() {
        let command : CommandModel = new CommandModel();

        expect(() => {
            command.Name = "";
        }).to.throw(Error);
    });
});