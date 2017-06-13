"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';

class InitConfigExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {
        sender.exit();
    }
}

export default InitConfigExecutor;