"use strict";
import CommandSequenceModel from './../../model/CommandSequenceModel';
import { expect } from 'chai';

describe("CommandSequenceModel Test", function() {
    /**
     * Given value is null or undefined
     */
    it("should throw an error when executor's name is not specified", function(){
        let sequence : CommandSequenceModel = new CommandSequenceModel();

        expect(() => {
            sequence.ExecutorName = null;
        }).to.throw(Error);

        expect(() => {
            sequence.ExecutorName = undefined;
        }).to.throw(Error);
    });

    /**
     * Given value is a empty string
     */
    it("should throw an error when executor's name was specified but is empty", function() {
        let sequence : CommandSequenceModel = new CommandSequenceModel();

        expect(() => {
            sequence.ExecutorName = "";
        }).to.throw(Error);
    });
});
