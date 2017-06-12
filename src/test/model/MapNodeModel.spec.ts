"use strict";
import MapNodeModel from './../../model/MapNodeModel';
import { expect } from 'chai';

describe("MapNodeModel Test", () => {

    it("should set up source directory name and link name", () => {
        let nodeModel : MapNodeModel = new MapNodeModel();
        let dirSrc : string = "~/Project";
        let linkName : string = "xyz/my-dependency";
        nodeModel.SourceDirectoryPath = dirSrc;
        nodeModel.LinkName = linkName;

        expect(nodeModel.LinkName).to.equal(linkName);
        expect(nodeModel.SourceDirectoryPath).to.equal(dirSrc);
    });

    it("should throw an exception when directoryname or link name is not defined", () => {
        let nodeModel : MapNodeModel = new MapNodeModel();

        expect(() => {
            nodeModel.SourceDirectoryPath = null;
        }).to.throw(Error);

        expect(() => {
            nodeModel.SourceDirectoryPath = undefined;
        }).to.throw(Error);

        expect(() => {
            nodeModel.SourceDirectoryPath = "";
        }).to.throw(Error);

        expect(() => {
            nodeModel.LinkName = null;
        }).to.throw(Error);

        expect(() => {
            nodeModel.LinkName = undefined;
        }).to.throw(Error);

        expect(() => {
            nodeModel.LinkName = "";
        }).to.throw(Error);
    });
});