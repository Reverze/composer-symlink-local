"use strict";
import CommandSequenceModel from './CommandSequenceModel';
import * as validator from 'validator';
import ModelCollection from './collection/ModelCollection';

class CommandModel
{
    /**
     * Command's name
     * @type {string}
     */
    private name : string = null;

    /**
     * Stores command execute sequences
     * @type {ModelCollection<CommandSequenceModel>}
     */
    private sequences : ModelCollection<CommandSequenceModel> = null;


    public constructor()
    {
        this.sequences = new ModelCollection<CommandSequenceModel>();
    }

    /**
     * Adds command's sequence
     * @param sequence
     */
    public addSequence(sequence : CommandSequenceModel) : void
    {
        if (!(sequence instanceof CommandSequenceModel)){
            throw new Error("Command sequence object is not instance of 'CommandSequenceModel'");
        }

        this.sequences.push(sequence);
    }

    /**
     * Sets command's name
     * @param name
     * @constructor
     */
    set Name(commandName : string)
    {
        if (commandName === null || commandName == undefined){
            throw new Error("Command's name is not specified");
        }

        if (validator.isEmpty(commandName)){
            throw new Error("Command's name is empty!");
        }

        this.name = commandName.toLowerCase();
    }

    /**
     * Gets command's name
     * @returns {string}
     * @constructor
     */
    get Name() : string
    {
        return this.name;
    }

    /**
     * Gets command's sequences
     * @returns {ModelCollection<CommandSequenceModel>}
     * @constructor
     */
    get Sequences() : ModelCollection<CommandSequenceModel>
    {
        return this.sequences;
    }

}

export default CommandModel;