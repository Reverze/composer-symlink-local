/**
 * This file is a prt of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import CommandModel from './../model/CommandModel';
import CommandSequenceModel from './../model/CommandSequenceModel';
import ModelCollection from './../model/collection/ModelCollection';
import ContainerModel from './../model/ContainerModel';

class CommandModelConverter
{
    /**
     * Converts raw config model to model collection
     * @param commands
     * @returns {ModelCollection<CommandModel>}
     */
    public static convertToModelCollection(commands : any, container ?: ContainerModel) : ModelCollection<CommandModel>
    {
        let commandCollection : ModelCollection<CommandModel> = new ModelCollection<CommandModel>();

        Object.keys(commands).forEach(commandName => {
            let command : CommandModel = new CommandModel();
            command.Name = commandName.toLowerCase();

            let rawSequences : any = commands[commandName];

            Object.keys(rawSequences).forEach(sequenceExecutorName => {
                let sequence : CommandSequenceModel = new CommandSequenceModel();
                sequence.ExecutorName = sequenceExecutorName;
                sequence.ExecutorParameters = rawSequences[sequenceExecutorName];
                command.addSequence(sequence);
            });

            commandCollection.push(command);
        });


        return commandCollection;
    }
}

export default CommandModelConverter;