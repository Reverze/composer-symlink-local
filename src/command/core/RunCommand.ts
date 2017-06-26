/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './../Command';
import CommandBuilderArgs from './../CommandBuilderArgs';
import CommandBuilder from './../CommandBuilder';
import ICommandSequence from './../ICommandSequence';
import CommandModel from './../../model/CommandModel';
import ModelCollection from './../../model/collection/ModelCollection';

class RunCommand extends Command
{
    public constructor()
    {
        super("run");
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
        return RunCommand.createBuilderArgs(input);
    }

    public work(args ?: CommandBuilderArgs) : void
    {
        /**
         * All defined user-custom commands
         * @type {ModelCollection<CommandModel>}
         */
        let commands : ModelCollection<CommandModel> = args.Flow.Config.Commands;

        /**
         * Name of commands to run.
         * If array is empty it means to run all commands
         * @type {any}
         */
        let selectedToRun : Array<string> = args.Parameters;

        let toOmit : boolean = selectedToRun.length > 0;

        for (let command of commands){
            if (toOmit){
                if (selectedToRun.indexOf(command.Name) < 0){
                    continue;
                }
            }

            let sequence : ICommandSequence = CommandBuilder.buildFromModel(command, args);

            sequence.executeAll();

        }
    }
}

export default RunCommand;