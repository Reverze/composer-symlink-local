"use strict";
import CommandSequence from './../../command/CommandSequence';
import { expect } from 'chai';

describe("CommandSequence Test", () => {
    it("should throw an error on invalid sequence's name", () => {
        let sequence : CommandSequence = new CommandSequence();

        expect(() => {
            sequence.Name = null;
        }).to.throw(Error);

        expect(() => {
            sequence.Name = undefined;
        }).to.throw(Error);
    });

});