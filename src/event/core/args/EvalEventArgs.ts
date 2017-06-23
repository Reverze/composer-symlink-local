/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import EventArgs from './../../EventArgs';
import * as validator from 'validator';

/**
 * EvalOptionEvent's args
 */
class EvalEventArgs extends EventArgs
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
     * Gets eval parameters
     * @returns {Array<string>}
     * @constructor
     */
    get Parameters() : Array<string>
    {
        return this.parameters;
    }

    /**
     * Sets eval parameters
     * @param value
     * @constructor
     */
    set Parameters(value : Array<string>)
    {
        this.parameters = value;
    }

    /**
     * Adds parameters
     * @param parameter
     */
    public addParameter(parameter : string) : void
    {
        if (typeof parameter !== 'string'){
            throw new Error("Invalid eval parameter");
        }

        if (validator.isEmpty(parameter)){
            throw new Error("Given eval parameter is empty!");
        }

        this.parameters.push(parameter);
    }
}

export default EvalEventArgs;