/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import CommandSequenceModel from './../model/CommandSequenceModel';
import CommandModel from './../model/CommandModel';
import ICommandSequence from './ICommandSequence';
import CommandSequence from './CommandSequence';
import CommandBuilderArgs from './CommandBuilderArgs';
import Command from './Command';
import CommandContainer from './CommandContainer';
import CommandMetaData from './CommandMetaData';

abstract class CommandBuilder
{
    /**
     * Build sequence from command model
     * @param commandModel
     * @param args
     * @returns {CommandSequence}
     */
    public static buildFromModel(commandModel : CommandModel, args : CommandBuilderArgs) : ICommandSequence
    {
        let sequence : CommandSequence = new CommandSequence();

        sequence.Name = commandModel.Name;

        for(let sequenceEntry of commandModel.Sequences){
            let executorName = sequenceEntry.ExecutorName.replace("$", "");

            if (!CommandContainer.isDefined(executorName)){
                throw new Error("Executor (command) '" + sequenceEntry.ExecutorName + "' is not supported!");
            }

            let command : Command = CommandContainer.getCommand(executorName);

            let c_args : CommandBuilderArgs = command.parseArgs(sequenceEntry.ExecutorParameters);
            c_args.Flow = args.Flow;

            let metaData : CommandMetaData = new CommandMetaData(command, c_args);

            sequence.addCommand(metaData);
        }

        return sequence;
    }
}

export default CommandBuilder;