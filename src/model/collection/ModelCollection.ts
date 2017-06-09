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

    public * each()
    {
        for(let model of this.modelArray){
            yield model;
        }
    }


}

export default ModelCollection;