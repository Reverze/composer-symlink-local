"use strict";
import * as parser from 'argv-parser';
import * as defaultInputSchema from './inputSchema';
import InputModel from './../model/InputModel';
import IInputModel from './../model/IInputModel';

export default class InputParser
{
    /**
     * Raw args
     * @type {string[]}
     */
    private rawArgv : Array<string> = Array();


    public constructor(argv : Array<string>)
    {
        this.rawArgv = argv;
    }

    public getModel() : IInputModel
    {
        let data : any = parser.parse(this.rawArgv, {
            rules: defaultInputSchema.default
        });

        let inputModel : IInputModel = new InputModel();
        inputModel.setFileName(data.parsed.file);

        return inputModel;
    }


}
