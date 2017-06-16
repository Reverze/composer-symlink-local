/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import * as fs from 'fs';
import * as path from 'path';

class ConfigWriter
{
    /**
     * Config's file path
     * @type {string}
     */
    private filePath : string = null;

    public constructor(filePath : string)
    {
        this.filePath = filePath;
    }

    /**
     * Creates a new config file using given schema
     * @param configSchema
     */
    public createNewSync(configSchema : any)
    {
        let configStringify : string = JSON.stringify(configSchema, null, 4);

        let err : any = fs.writeFileSync(this.filePath, configStringify);

        if (err !== null && err !== undefined){
            throw err;
        }
    }

}

export default ConfigWriter;
