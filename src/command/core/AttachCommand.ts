/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './../Command';
import CommandBuilderArgs from './../CommandBuilderArgs';

class AttachCommand extends Command
{
    public constructor()
    {
        super('attach');
    }

    public work(args ?: CommandBuilderArgs)
    {
        console.log("do something with this shit");
    }
}

export default AttachCommand;

