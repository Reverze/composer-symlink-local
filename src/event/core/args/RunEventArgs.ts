/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import EventArgs from './../../EventArgs';
import * as validator from 'validator';

class RunEventArgs extends EventArgs
{
    /**
     *
     * @type {string[]}
     */
    private parameters : Array<string> = new Array<string>();

    public constructor()
    {
        super();
    }

    /**
     * Gets parameters
     * @returns {Array<string>}
     * @constructor
     */
    get Parameters() : Array<string>
    {
        return this.parameters;
    }

    /**
     * Sets parameters
     * @param value
     * @constructor
     */
    set Parameters(value : Array<string>)
    {
        this.parameters = value;
    }

    /**
     * Adds parameter
     * @param value
     */
    public addParameter(value : string) : void
    {
        if (typeof value !== 'string'){
            throw new Error("Parameter must be an string");
        }

        this.parameters.push(value);
    }

}

export default RunEventArgs;