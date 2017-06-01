"use strict";
import * as validator from 'validator';

class CommandSequenceModel
{
    /**
     * Executor's name
     * @type {string}
     */
    private executorName : string = null;

    /**
     * Parameters passed to executor
     * @type {any}
     */
    private executorParameters : any = null;

    public constructor()
    {

    }

    /**
     * Sets executor's name
     * @param name
     * @constructor
     */
    set ExecutorName(name : string)
    {
        if (name === null || name === undefined){
            throw new Error("Executor's name is not defined!");
        }

        if (validator.isEmpty(name)){
            throw new Error("Executor's name cannot be empty!");
        }

        this.executorName = name.toLowerCase();
    }

    /**
     * Sets executor's parameters
     * @param parameters
     * @constructor
     */
    set ExecutorParameters(parameters : any)
    {
        this.executorParameters = parameters;
    }

    /**
     * Gets executor's name
     * @returns {string}
     * @constructor
     */
    get ExecutorName() : string
    {
        return this.executorName;
    }

    /**
     * Gets executor's parameters
     * @returns {any}
     * @constructor
     */
    get ExecutorParameters() : any
    {
        return this.executorParameters;
    }

}

export default CommandSequenceModel;