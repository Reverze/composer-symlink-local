/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './../Command';
import CommandBuilderArgs from './../CommandBuilderArgs';
import * as process from 'process';

/**
 * This command evaluates processes
 */
class EvalCommand extends Command
{
    public constructor()
    {
        super("eval");
    }

    public work(args ?: CommandBuilderArgs)
    {

    }
}

export default EvalCommand;
