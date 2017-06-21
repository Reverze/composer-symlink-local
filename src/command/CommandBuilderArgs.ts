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

    /**
     *
     * @type {any}
     */
    private parameters : any  = null;

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
     *
     * @returns {any}
     * @constructor
     */
    get Parameters() : any
    {
        return this.parameters;
    }

    /**
     *
     * @param value
     * @constructor
     */
    set Parameters(value : any)
    {
        this.parameters = value;
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