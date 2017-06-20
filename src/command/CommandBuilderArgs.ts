/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import FlowController from './../app/FlowController';

class CommandBuilderArgs
{
    /**
     * FlowController instance
     * @type {FlowController}
     */
    private flow : FlowController = null;

    public constructor()
    {

    }

    /**
     * Gets flowcontroller instance
     * @returns {FlowController}
     * @constructor
     */
    get Flow() : FlowController
    {
        return this.flow;
    }

    /**
     * Sets flowcontroller instance
     * @param value
     * @constructor
     */
    set Flow(value : FlowController)
    {
        if (!(value instanceof FlowController)){
            throw new Error("Invalid FlowController instance");
        }
        this.flow = value;
    }
}

export default CommandBuilderArgs;