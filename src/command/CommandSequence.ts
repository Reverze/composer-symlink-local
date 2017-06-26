/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import ICommandSequence from './ICommandSequence';
import Command from './Command';
import CommandContainer from './CommandContainer';
import CommandBuilderArgs from './CommandBuilderArgs';
import CommandMetaData from './CommandMetaData';

class CommandSequence implements ICommandSequence
{
    /**
     * Command sequence name
     * @type {string}
     */
    private name : string = null;

    /**
     * Commands at sequence
     * @type {CommandMetaData[]}
     */
    private commands : Array<CommandMetaData> = new Array<CommandMetaData>();


    public constructor()
    {

    }



    /**
     * Adds command
     * @param command
     */
    public addCommand(command : CommandMetaData) : void
    {
        this.commands.push(command);
    }

    /**
     * Gets sequence's name
     * @returns {string}
     * @constructor
     */
    get Name() : string
    {
        return this.name;
    }


    /**
     * Gets commands at sequence
     * @returns {Array<CommandMetaData>}
     * @constructor
     */
    get Commands() : Array<CommandMetaData>
    {
        return this.commands;
    }

    /**
     * Sets sequence's name
     * @param value
     * @constructor
     */
    set Name(value : string)
    {
        if (!value){
            throw new Error("Invalid sequence's name. It is empty or undefined!");
        }

        this.name = value;
    }


    public executeAll()
    {
        for(let commandMetaData of this.commands){
            CommandContainer.execute(commandMetaData.Instance.Name, commandMetaData.Args);
        }
    }

}

export default CommandSequence;