"use strict";
import CommandContainer from './../../command/CommandContainer';
import Command from './../../command/Command';
import AttachCommand from './../../command/core/AttachCommand';
import { expect } from 'chai';

describe("CommandContainer Test", () => {

    beforeEach(() => {
        CommandContainer.clear();
    });

    it("should define a command (executor)", () => {
        CommandContainer.define(new AttachCommand);

        expect(CommandContainer.isDefined(new AttachCommand)).to.be.true;
        expect(CommandContainer.isDefined('attach')).to.be.true;
        expect(CommandContainer.isDefined('detach')).to.be.false;
    });
});