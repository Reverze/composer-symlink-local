/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <
 */
"use strict";
import CommandMetaData from './CommandMetaData';

interface ICommandSequence
{
    executeAll();
    addCommand(command : CommandMetaData) : void
}

export default ICommandSequence;
