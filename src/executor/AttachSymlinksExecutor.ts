/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import AttachSymlinksEventArgs from './../event/core/args/AttachSymlinksEventArgs';
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

    public work(sender : FlowController, args : AttachSymlinksEventArgs)
    {
        let commandArgs : CommandBuilderArgs = new CommandBuilderArgs();
        commandArgs.Flow = sender;
        commandArgs.Parameters = args.Spaces;


        CommandContainer.execute(new AttachCommand().Name, commandArgs);
    }
}

export default AttachSymlinksExecutor;
