"use strict";
import IEventListener from './IEventListener';
import EventArgs from './EventArgs';

class EventListener implements IEventListener
{
    /**
     * Event's receiver
     * @type {any}
     */
    private receiver : Function = null;

    public constructor()
    {

    }

    public call(sender : any, args : EventArgs)
    {
        this.receiver(sender, args);
    }

    /**
     * Sets receiver
     * @param value
     * @constructor
     */
    set Receiver(value : Function)
    {
        this.receiver = value;
    }

    /**
     * Get receiver
     * @returns {Function}
     * @constructor
     */
    get Receiver() : Function
    {
        return this.receiver;
    }

}

export default EventListener;