"use strict";
import ModelCollection from './../../model/collection/ModelCollection';
import { expect } from 'chai';

class ExampleModel
{
    private name : string = null;
    private email : string = null;

    get Name() : string
    {
        return this.name;
    }

    get Email() : string
    {
        return this.email;
    }

    set Name(value : string)
    {
        this.name = value;
    }

    set Email(value : string)
    {
        this.email = value;
    }
}

describe("ModelCollection Test", () => {

    it("should be empty collection", () => {
        let collection = new ModelCollection<ExampleModel>();
        expect(collection.isEmpty()).to.equal(true);
    });

    it("should add model into collection", () => {
        let collection = new ModelCollection<ExampleModel>();
        let modelInstance = new ExampleModel();
        modelInstance.Name = "das";
        modelInstance.Email = "das@example.com";
        collection.push(modelInstance);
        expect(collection.Count).to.equal(1);
    });

    it("should pull model from collection", () => {
        let collection = new ModelCollection<ExampleModel>();
        let modelInstance = new ExampleModel();
        modelInstance.Name = "das";
        collection.push(modelInstance);
        expect(collection.Count).to.equal(1);
        collection.pull(modelInstance);
        expect(collection.Count).to.equal(0);
    });

    it("should iterate all models", () => {
        let collection = new ModelCollection<ExampleModel>();
        collection.push(new ExampleModel());
        collection.push(new ExampleModel());
        expect(collection.Count).to.equal(2);

        let count = 0;

        for(let model of collection.each()){
            count++;
        }

        expect(count).to.equal(2);
        count = 0;

        for(let model of collection)
        {
            count++;
        }
        expect(count).to.equal(2);
    });

    it("should find all models", () => {
        let collection = new ModelCollection<ExampleModel>();
        let modelInstance = new ExampleModel();
        modelInstance.Name = "das";
        let modelInstanceTwo = new ExampleModel();
        modelInstanceTwo.Name = "das";
        collection.push(modelInstance);
        collection.push(modelInstanceTwo);

        let resultCollection = collection.findAll(model => model.Name === "das");

        expect(resultCollection.Count).to.equal(2);

        modelInstanceTwo.Name = "d";
        resultCollection = collection.findAll(model => model.Name === "das");

        expect(resultCollection.Count).to.equal(1);
    });

    it("should drop one model", () => {
        let collection = new ModelCollection<ExampleModel>();
        let modelInstance = new ExampleModel();
        modelInstance.Name = "das";
        let modelInstanceTwo = new ExampleModel();
        modelInstanceTwo.Name = "die";
        collection.push(modelInstance);
        collection.push(modelInstanceTwo);

        let droppedModelCounter = collection.dropWhere(model => model.Name === "das");

        expect(droppedModelCounter).to.equal(1);
        expect(collection.Count).to.equal(1);
    });
});