"use strict";
import IEventListener from './IEventListener';
import EventArgs from './EventArgs';

class Event
{
    /**
     * Event's listeners
     * @type {EventListener[]}
     */
    protected listeners : Array<IEventListener> = new Array<IEventListener>();

    public constructor()
    {

    }

    /**
     * Adds listener
     * @param listener
     */
    public addListener(listener : IEventListener) : void
    {
        this.listeners.push(listener);
    }

    /**
     * Adds listeners
     * @param listeners
     */
    public addListeners(listeners : IEventListener[]) : void
    {
        this.listeners = this.listeners.concat(listeners);
    }

    /**
     * Invokes all listeners
     */
    public invoke(sender : any, args : EventArgs) : void
    {
        this.listeners.forEach(listener => {
            listener.call(sender, args);
        });
    }

    get Listeners() : Array<IEventListener>
    {
        return this.listeners;
    }

}

export default Event;