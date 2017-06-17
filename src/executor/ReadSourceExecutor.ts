/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import FlowController from './../app/FlowController';
import ConfigReader from './../config/ConfigReader';
import EventArgs from './../event/EventArgs';
import ConfigModel from './../model/ConfigModel';
import ConfigModelConverter from './../converter/ConfigModelConverter';
import * as fs from 'fs';
import * as path from 'path';
import * as validator from 'validator';
import * as sprintf from 'sprintf';

class ReadSourceExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {
        /**
         * Initializes config file reader at given (or auto) working directory
         * @type {ConfigReader}
         */
        let configReader : ConfigReader = new ConfigReader(sender.WorkingDirectory, sender.SourceFileName);

        /**
         * Object from parsed config file
         * @type {any}
         */
        let configObject : any = configReader.read();

        let configModelInstance : ConfigModel = null;

        try{
            configModelInstance = ConfigModelConverter.convert(configObject);
        }
        catch(error){
            sender.Output.error("Read config file failed!");
            sender.Output.error(error.message);
        }



    }
}

export default ReadSourceExecutor;