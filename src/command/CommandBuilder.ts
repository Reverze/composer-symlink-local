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
        sequence.Args = args;

        for(let sequenceEntry of commandModel.Sequences){
            if (!CommandContainer.isDefined(sequenceEntry.ExecutorName)){
                throw new Error("Executor (command) '" + sequenceEntry.ExecutorName + "' is not supported!");
            }

            let command : Command = CommandContainer.getCommand(sequenceEntry.ExecutorName);

            sequence.addCommand(command);
        }


        return sequence;
    }
}

export default CommandBuilder;