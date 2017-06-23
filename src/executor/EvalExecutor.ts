/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EvalEventArgs from './../event/core/args/EvalEventArgs';
import FlowController from './../app/FlowController';
import CommandContainer from './../command/CommandContainer';
import EvalCommand from './../command/core/EvalCommand';
import CommandBuilderArgs from './../command/CommandBuilderArgs';

class EvalExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EvalEventArgs)
    {
        let commandArgs : CommandBuilderArgs = new CommandBuilderArgs();
        commandArgs.Flow = sender;
        commandArgs.Parameters = args.Parameters;

        CommandContainer.execute(new EvalCommand().Name, commandArgs);
    }
}

export default EvalExecutor;