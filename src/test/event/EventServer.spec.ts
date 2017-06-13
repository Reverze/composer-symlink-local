"use strict";
import EventServer from './../../event/EventServer';
import Event from './../../event/Event';
import FlagEvent from './../../event/core/FlagEvent';
import InitFlagEvent from './../../event/core/InitFlagEvent';
import EventListener from './../../event/EventListener';
import { expect } from 'chai';

describe("EventServer Test", () => {

    beforeEach(() => {
        /**
         * Detaches all events before each spec
         */
        EventServer.detachAll();
    });

    it("should define event", () => {
        EventServer.define<FlagEvent>(InitFlagEvent);

        let eventContainer : Array<Event> = EventServer.EventContainer;
        expect(eventContainer.length).to.equal(1);
    });

    it("should throw an error if event is already defined", () => {
        EventServer.define<FlagEvent>(InitFlagEvent);

        try{
            EventServer.define<FlagEvent>(InitFlagEvent);
            expect(true).to.be.false;
        }
        catch(err){
            expect(true).to.be.true;
        }
    });

    it("should not throw an error", () => {
        EventServer.define<FlagEvent>(InitFlagEvent);

        class FakeFlagEvent extends FlagEvent {};

        try{
            EventServer.define<FlagEvent>(FakeFlagEvent);
            expect(true).to.be.true;
        }
        catch(err){
            expect(false).to.be.true;
        }

    });

    it("should register a listener via EventListener", () => {
        EventServer.define<FlagEvent>(InitFlagEvent);
        EventServer.watch<FlagEvent>(InitFlagEvent, new EventListener());

        let container : Array<Event> = EventServer.EventContainer;

        expect(container[0].Listeners.length).to.equal(1);
    });

    it("should register a listener via function", () => {
        EventServer.define<FlagEvent>(InitFlagEvent);
        EventServer.watch<FlagEvent>(InitFlagEvent, () => {

        });
        let container : Array<Event> = EventServer.EventContainer;

        expect(container[0].Listeners.length).to.equal(1);
    });

});