/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import IModel from './IModel';

class DeclareModel implements IModel
{
    /**
     * Declared vars
     * @type {Map<string, any>}
     */
    private declaredVars : Map<string, any> = new Map<string, any>();


    public constructor()
    {

    }

    /**
     * Gets declared vars
     * @returns {Map<string, any>}
     * @constructor
     */
    get Vars() : Map<string, any>
    {
        return this.declaredVars;
    }

    /**
     * Gets value of variable
     * @param varName
     * @returns {undefined|any}
     */
    public get(varName : string) : any
    {
        if (this.declaredVars.has(varName)){
            return this.declaredVars.get(varName);
        }
        else{
            throw new Error("Variable '" + varName + "' is not declared!");
        }
    }

    /**
     * Sets variable.
     * Throws an error when variable is already declared.
     * @param varName
     * @param value
     */
    public set(varName : string, value : any) : void
    {
        if (this.declaredVars.has(varName)){
            throw new Error("Variable '" + varName + "' is already declared!");
        }
        else{
            let regexp = /([a-zA-Z][a-zA-Z0-9]{0,})/;

            if (!regexp.test(varName)){
                throw new Error("Invalid variable name format!");
            }

            this.declaredVars.set(varName, value);
        }
    }
}

export default DeclareModel;