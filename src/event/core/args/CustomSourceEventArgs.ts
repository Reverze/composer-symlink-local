/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import EventArgs from './../../EventArgs';

class CustomSourceEventArgs extends EventArgs
{
    /**
     * Custom source file name
     * @type {string}
     */
    private customSourceName : string|null = null;

    public constructor(customSourceName : string)
    {
        super();

        this.customSourceName = customSourceName;
    }

    /**
     * Gets custom name of source's file
     * @returns {string|null}
     * @constructor
     */
    get SourceName() : string|null
    {
        return this.customSourceName;
    }
}

export default CustomSourceEventArgs;