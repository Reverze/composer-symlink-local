/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com
 */
"use strict";
import CommandModel from './CommandModel';
import SpaceModel from './SpaceModel';
import DeclareModel from './DeclareModel';
import ModelCollection from './collection/ModelCollection';

class ConfigModel
{
    /**
     * Stores declared variables
     * @type {DeclareModel}
     */
    private declare : DeclareModel = new DeclareModel();
    /**
     * Stores defiend commands
     * @type {ModelCollection<CommandModel>}
     */
    private commands : ModelCollection<CommandModel> = new ModelCollection<CommandModel>();

    /**
     * Stores defined spaces
     * @type {ModelCollection<SpaceModel> }
     */
    private spaces : ModelCollection<SpaceModel> = new ModelCollection<SpaceModel>();

    public constructor()
    {

    }

    /**
     *
     * @returns {DeclareModel}
     * @constructor
     */
    get Declares() : DeclareModel
    {
        return this.declare;
    }

    /**
     * Gets commands collection
     * @returns {ModelCollection<CommandModel>}
     * @constructor
     */
    get Commands() : ModelCollection<CommandModel>
    {
        return this.commands;
    }

    /**
     * Gets spaces collection
     * @returns {ModelCollection<SpaceModel>}
     * @constructor
     */
    get Spaces() : ModelCollection<SpaceModel>
    {
        return this.spaces;
    }

    set Declares(value : DeclareModel)
    {
        this.declare = value;
    }

    /**
     * Adds command
     * @param command
     */
    public addCommand(command : CommandModel) : void
    {
        this.commands.push(command);
    }

    /**
     * Adds commands
     * @param commands
     */
    public addCommands(commands : ModelCollection<CommandModel>) : void
    {
        for(let command of commands.each()){
            this.commands.push(command);
        }
    }

    /**
     * Adds space
     * @param space
     */
    public addSpace(space : SpaceModel) : void
    {
        this.spaces.push(space);
    }

    /**
     * Adds spaces
     * @param spaces
     */
    public addSpaces(spaces : ModelCollection<SpaceModel>) : void
    {
        for(let space of spaces.each()){
            this.spaces.push(space);
        }
    }



}


export default ConfigModel;