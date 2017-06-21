/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';
import CommandContainer from './../command/CommandContainer';
import DetachCommand from './../command/core/DetachCommand';
import CommandBuilderArgs from './../command/CommandBuilderArgs';

class DetachSymlinksExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {
        let commandArgs : CommandBuilderArgs = new CommandBuilderArgs();
        commandArgs.Flow = sender;

        CommandContainer.execute(new DetachCommand().Name, commandArgs);
    }
}

export default DetachSymlinksExecutor;