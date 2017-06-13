"use strict";
import EventArgs from './../event/EventArgs';

abstract class Executor
{
    public constructor()
    {

    }

    public work(sender : any, args : EventArgs)
    {

    }

    get Worker()
    {
        return this.work;
    }
}

export default Executor;