/**
 * This file is a part of ComposerSymlinkLocal
 */
"use strict";

interface IModelCollection<T> extends IterableIterator<T>
{
    /**
     * Pushes model instance into collection
     * @param modelInstance
     */
    push(modelInstance : T) : void;

    /**
     * Pulls model instance from collection
     * @param modelInstance
     */
    pull(modelInstance : T) : void;

    each();

    toArray() : Array<T>

    merge(collection : IModelCollection<T>);

    next(value ?: any) : IteratorResult<T>;

}

export default IModelCollection;