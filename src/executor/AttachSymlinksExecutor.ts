/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';

class AttachSymlinksExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {

    }
}

export default AttachSymlinksExecutor;
