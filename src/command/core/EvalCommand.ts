/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './../Command';
import CommandBuilderArgs from './../CommandBuilderArgs';
import * as child_process from 'child_process';

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
        /**
         * Temporary!!!
         * @TODO exception handling etc..
         */
        for(let command of args.Parameters){
            args.Flow.Output.info("Executing:  '" + command + "'");
            let result : any = child_process.execSync(command);
            console.log(result.toString('utf8'));
        }
    }
}

export default EvalCommand;
