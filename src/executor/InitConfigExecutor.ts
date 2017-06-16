/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';
import ConfigWriter from './../config/ConfigWriter';
import ConfigSchema from './../config/ConfigSchema';
import * as sprintf from 'sprintf';
import * as path from 'path';


class InitConfigExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : EventArgs)
    {
        sender.Output.info("Initializing a new config file");
        sender.Output.info(sprintf("Creating a new config file '%s' at path '%s'", sender.SourceFileName, sender.WorkingDirectory));

        let writer : ConfigWriter = new ConfigWriter(path.resolve(sender.WorkingDirectory, sender.SourceFileName));

        try{
            writer.createNewSync(ConfigSchema);
            sender.Output.success("Config file has been initialized successfully!");
        }
        catch(err){
            sender.Output.error("Initializing a new config file failed!");
            console.log(err.message);
        }

        sender.exit();
    }
}

export default InitConfigExecutor;