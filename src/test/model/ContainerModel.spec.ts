"use strict";
import ContainerModel from './../../model/ContainerModel';
import { expect } from 'chai';

describe("ContainerModel Test", () => {
    it("should set working directory", () => {
        let pwd : string = "/home/me";

        let model : ContainerModel = new ContainerModel();
        model.WorkingDirectory = pwd;

        expect(model.WorkingDirectory).to.equal(pwd);
    });

    it("should add new variable", () => {
        let defvars : any = {
            myVariable1: 1,
            myVariable2: 2
        };

        let model : ContainerModel = new ContainerModel();
        model.Vars = defvars;

        model.Vars.myVariable3 = 3;

        expect(model.Vars.myVariable1).to.equal(1);
        expect(model.Vars.myVariable2).to.equal(2);
        expect(model.Vars.myVariable3).to.equal(3);
    });
});