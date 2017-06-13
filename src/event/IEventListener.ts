"use strict";
import EventArgs from './EventArgs';

interface IEventListener
{
    call(sender : any, args : EventArgs);
}

export default IEventListener;