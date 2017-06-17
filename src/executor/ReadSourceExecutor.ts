/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import FlowController from './../app/FlowController';
import ConfigReader from './../config/ConfigReader';
import EventArgs from './../event/EventArgs';
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
        let configReader : ConfigReader = new ConfigReader(sender.WorkingDirectory, sender.SourceFileName);

        let configObject = configReader.read();


    }
}

export default ReadSourceExecutor;