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

    public static createBuilderArgs(input : string) : CommandBuilderArgs
    {
        let args : CommandBuilderArgs = new CommandBuilderArgs();

        if (typeof input === 'string'){
            args.Parameters = input.trim().split(';');
        }
        else{
            args.Parameters = [];
        }

        return args;
    }

    public parseArgs(input : string) : CommandBuilderArgs
    {
        return EvalCommand.createBuilderArgs(input);
    }

    public work(args ?: CommandBuilderArgs)
    {
        /**
         * Temporary!!!
         * @TODO exception handling etc..
         */
        for(let command of args.Parameters){
            args.Flow.Output.info("Executing:  '" + command + "'");
            let result : any = child_process.execSync(command, {
                cwd: args.Flow.WorkingDirectory
            });
            console.log(result.toString('utf8'));
        }
    }
}

export default EvalCommand;
