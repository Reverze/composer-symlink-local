/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import CommandBuilderArgs from './CommandBuilderArgs';

abstract class Command
{
    /**
     * Command name (executor identifier)
     * @type {string}
     */
    private name : string = null;

    public constructor(name : string)
    {
        this.name = name;
    }

    get Name() : string
    {
        return this.name;
    }

    public work(args ?: CommandBuilderArgs)
    {

    }
}

export default Command;