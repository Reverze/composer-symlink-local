/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import RunEventArgs from './../event/core/args/RunEventArgs';
import FlowController from './../app/FlowController';
import CommandContainer from './../command/CommandContainer';
import RunCommand from './../command/core/RunCommand';
import CommandBuilderArgs from './../command/CommandBuilderArgs';

class RunExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : RunEventArgs) : void
    {
        let commandArgs : CommandBuilderArgs = new CommandBuilderArgs();
        commandArgs.Flow = sender;
        commandArgs.Parameters = args.Parameters;

        CommandContainer.execute(new RunCommand().Name, commandArgs);
    }
}

export default RunExecutor;