"use strict";
import CommandSequenceModel from './CommandSequenceModel';
import * as validator from 'validator';

class CommandModel
{
    /**
     * Command's name
     * @type {string}
     */
    private name : string = null;

    /**
     * Stores command execute sequences
     * @type {CommandSequenceModel[]}
     */
    private sequences : Array<CommandSequenceModel> = Array();


    public constructor()
    {

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
    set Name(name : string)
    {
        if (name === null || name == undefined){
            throw new Error("Command's name is not specified");
        }

        if (validator.isEmpty(name)){
            throw new Error("Command's name is empty!");
        }

        this.name = name.toLowerCase();
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
     * @returns {Array<CommandSequenceModel>}
     * @constructor
     */
    get Sequences() : Array<CommandSequenceModel>
    {
        return this.sequences;
    }

}

export default CommandModel;