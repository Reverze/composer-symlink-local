/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './Command';
import CommandBuilderArgs from './CommandBuilderArgs';

abstract class CommandContainer
{
    /**
     * Stores defined commands
     * @type {Command[]}
     */
    private static commands : Map<string, Command> = new Map<string, Command>();


    /**
     * Clear defined commands
     */
    public static clear() : void
    {
        this.commands = new Map<string, Command>();
    }

    /**
     * Defines a new command
     * @param commandName
     * @param command
     */
    public static define(command : Command) : void
    {
        if (!command){
            throw new Error("Command is invalid!");
        }

        if (this.commands.has(command.Name)){
            throw new Error("Command '" + command.Name + "' is already defined!");
        }

        this.commands.set(command.Name, command);
    }

    /**
     * Checks if command is defined
     * @param { string|Command }identifier
     * @returns {boolean}
     */
    public static isDefined(identifier : string|Command) : boolean
    {
        if (typeof(identifier) === 'string'){
            return this.commands.has(identifier);
        }
        else if (identifier instanceof Command){
            for(let command of this.commands.values()){
                if (this.commands.has(command.Name)){
                    return true;
                }
            }

            return false;
        }
        else{
            throw new Error("Invalid identifier. Expected string or object");
        }
    }

    /**
     * Gets command instance
     * @param identifier
     * @returns {undefined|Command}
     */
    public static getCommand(identifier : string) : Command
    {
        return this.commands.get(identifier);
    }

    /**
     * Executes command
     * @param commandIdentifier
     * @param args
     */
    public static execute(commandIdentifier : string, args ?: CommandBuilderArgs) : void
    {
        if (!this.isDefined(commandIdentifier)){
            throw new Error("Command '" + commandIdentifier + "' is not supported!");
        }

        let command : Command = this.getCommand(commandIdentifier);

        command.work(args);
    }
}

export default CommandContainer;