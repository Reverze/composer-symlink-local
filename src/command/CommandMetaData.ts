/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './Command';
import CommandBuilderArgs from './CommandBuilderArgs';

class CommandMetaData
{
    /**
     * Command instance
     * @type {Command}
     */
    private commandInstance : Command = null;

    /**
     * Command args
     * @type {any}
     */
    private args : CommandBuilderArgs = null;

    public constructor(instance : Command, builderArgs : CommandBuilderArgs)
    {
        if (!instance){
            throw new Error("Invalid command instance!");
        }

        if (!builderArgs){
            throw new Error("Invalid builder args instance!");
        }

        this.commandInstance = instance;
        this.args = builderArgs;
    }

    /**
     * Gets command's instance
     * @returns {Command}
     * @constructor
     */
    get Instance() : Command
    {
        return this.commandInstance;
    }

    /**
     * Gets command's args
     * @returns {CommandBuilderArgs}
     * @constructor
     */
    get Args() : CommandBuilderArgs
    {
        return this.args;
    }
}

export default CommandMetaData;