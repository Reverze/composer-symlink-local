/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import EventArgs from './../../EventArgs';

class DetachSymlinksEventArgs extends EventArgs
{
    /**
     * Selected spaces.
     * @type {string[]}
     */
    private spaces : Array<string> = new Array<string>();

    public constructor()
    {
        super();
    }

    /**
     * Gets spaces
     * @returns {Array<string>}
     * @constructor
     */
    get Spaces() : Array<string>
    {
        return this.spaces;
    }

    /**
     *
     * @param value
     * @constructor
     */
    set Spaces(value : Array<string>)
    {
        this.spaces = value;
    }
}

export default DetachSymlinksEventArgs;
