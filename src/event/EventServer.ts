/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Event from './Event';
import IEventListener from './IEventListener';
import EventArgs from './EventArgs';
import EventListener from "./EventListener";

class EventServer
{
    private static eventContainer : Array<Event> = Array<Event>();

    /**
     * Detaches all events
     */
    public static detachAll()
    {
        this.eventContainer = new Array<Event>();
    }

    /**
     * Defines a new event
     * @param c
     */
    public static define<T extends Event>(c : new() => T)
    {
        for(let event of this.eventContainer){
            if (event.constructor.name === new c().constructor.name){
                throw new Error(c.name + " is already defined");
            }
        }

        this.eventContainer.push(new c());
    }

    /**
     * Adds listener to event's listeners
     * @param c
     * @param listener
     */
    public static watch<T extends Event>(c : new() => T, listener : IEventListener|Function)
    {
        if (typeof(listener) === "function"){
            listener = new EventListener().Receiver = listener;
        }

        for(let event of this.eventContainer){
            if (event.constructor.name === new c().constructor.name){
                event.addListener(listener);
            }
        }
    }

    /**
     * Triggers event
     * @param c
     * @param sender
     * @param args
     */
    public static trigger<T extends Event>(c : new() => T, sender : any, args : EventArgs)
    {
        for(let event of this.eventContainer){
            if (event.constructor.name === new c().constructor.name){
                event.invoke(sender, args);
            }
        }
    }

    /**
     * Gets event container
     * @returns {Array<Event>}
     * @constructor
     */
    static get EventContainer()
    {
        return this.eventContainer;
    }

}

export default EventServer;
