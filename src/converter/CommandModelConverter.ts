"use strict";
import CommandModel from './../model/CommandModel';
import CommandSequenceModel from './../model/CommandSequenceModel';

class CommandModelConverter
{
    public constructor()
    {

    }

    /**
     * Converts to command collection
     * @param commands
     * @returns {Array<CommandModel>}
     */
    public convertToModelCollection(commands : any) : Array<CommandModel>
    {
        let commandCollection : Array<CommandModel> = Array();

        Object.keys(commands).forEach(commandName => {
            let command : CommandModel = new CommandModel();
            command.Name = commandName.toLowerCase();

            let rawSequences : any = commands[commandName];

            /**
             * Fetches command's sequences
             */
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