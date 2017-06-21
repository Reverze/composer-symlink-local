/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';
import CommandContainer from './../command/CommandContainer';
import AttachCommand from './../command/core/AttachCommand';
import CommandBuilderArgs from './../command/CommandBuilderArgs';

class AttachSymlinksExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {
        let commandArgs : CommandBuilderArgs = new CommandBuilderArgs();
        commandArgs.Flow = sender;

        CommandContainer.execute(new AttachCommand().Name, commandArgs);
    }
}

export default AttachSymlinksExecutor;
