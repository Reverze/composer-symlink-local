"use strict";
import * as parser from 'argv-parser';
import * as defaultInputSchema from './inputSchema';

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
        this.parse();
    }

    private parse()
    {
        let data = parser.parse(this.rawArgv, {
            rules: defaultInputSchema.default
        });

        console.log(data);
    }


}
