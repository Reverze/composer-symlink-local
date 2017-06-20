/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import ICommandSequence from './ICommandSequence';
import Command from './Command';
import CommandContainer from './CommandContainer';
import CommandBuilderArgs from './CommandBuilderArgs';

class CommandSequence implements ICommandSequence
{
    /**
     * Command sequence name
     * @type {string}
     */
    private name : string = null;

    /**
     * Commands at sequence
     * @type {Command[]}
     */
    private commands : Array<Command> = new Array<Command>();

    /**
     *
     * @type {any}
     */
    private args : CommandBuilderArgs = null;

    public constructor()
    {

    }



    /**
     * Adds command
     * @param command
     */
    public addCommand(command : Command) : void
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
     *
     * @returns {CommandBuilderArgs}
     * @constructor
     */
    get Args() : CommandBuilderArgs
    {
        return this.args;
    }

    /**
     * Gets commands at sequence
     * @returns {Array<Command>}
     * @constructor
     */
    get Commands() : Array<Command>
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

    /**
     *
     * @param value
     * @constructor
     */
    set Args(value : CommandBuilderArgs)
    {
        this.args = value;
    }

    public executeAll()
    {
        for(let command of this.commands){
            CommandContainer.execute(command.Name, this.args);
        }
    }

}

export default CommandSequence;