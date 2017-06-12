/**
 * This file is a port of ComposerSymlinkLocal
 */
"use strict";
import IModelCollection from './IModelCollection';
import IModel from './../IModel';

class ModelCollection<T extends IModel> implements IModelCollection<T> {
    /**
     * Model instances are stored in array
     * @type {T[]}
     */
    private modelArray: Array<T> = new Array<T>();

    public constructor() {

    }

    /**
     * Gets number of elements in collection
     * @returns {number}
     * @constructor
     */
    get Count() : number
    {
        return this.modelArray.length;
    }

    /**
     * Checks if collection is empty
     * @returns {boolean}
     */
    public isEmpty() : boolean
    {
        return this.modelArray.length <= 0;
    }

    /**
     * @inheritDoc
     */
    public push(modelInstance: T): void
    {
        this.modelArray.push(modelInstance);
    }

    /**
     * @inheritDoc
     */
    public pull(modelInstance : T) : void
    {
        let index : number = this.modelArray.findIndex(model => modelInstance === model);
        this.modelArray.splice(index, 1);
    }

    /**
     *
     * @param callback
     * @returns {number}
     */
    public dropWhere(callback : Function) : number
    {
        let droppedModels : number = 0;

        for (let modelIndex in this.modelArray){
            let model : T = this.modelArray[modelIndex];
            if (callback(model)){
                this.modelArray.splice(Number(modelIndex), 1);
                droppedModels++;
            }
        }
        return droppedModels;
    }

    /**
     * Finds all
     * @param callback
     * @returns {ModelCollection<T>}
     */
    public findAll(callback : Function) : ModelCollection<T>
    {
        let subCollection = new ModelCollection<T>();

        for(let model of this.modelArray){
            if (callback(model)){
                subCollection.push(model)
            }
        }

        return subCollection;
    }

    /**
     *
     * @param callback
     * @returns {any}
     */
    public findOne(callback : Function) : T|null
    {
        for (let model of this.modelArray){
            if (callback(model)){
                return model;
            }
        }

        return null;
    }

    /**
     * Converts collection into array
     * @returns {Array<T>}
     */
    public toArray() : Array<T>
    {
        return this.modelArray;
    }

    public * each()
    {
        for(let model of this.modelArray){
            yield model;
        }
    }


}

export default ModelCollection;