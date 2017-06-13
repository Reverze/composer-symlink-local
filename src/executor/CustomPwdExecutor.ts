"use strict";
import Executor from './Executor';
import FlowController from './../app/FlowController';
import CustomPwdEventArgs from './../event/core/args/CustomPwdEventArgs';
import * as fs from 'fs';
import * as validator from 'validator';

/**
 * This executor is responsible to validate and save custom working directory's path
 * provided by user.
 */
class CustomPwdExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : CustomPwdEventArgs)
    {
        let customcwd : string|null = args.CustomWorkingDirectoryPath;

        if (customcwd === null || customcwd === undefined){
            sender.Output.error("Custom working directory path was not specified but option '--pwd' was passed!");
            sender.exit();
        }

        if (validator.isEmpty(customcwd)){
            sender.Output.error("Given custom working directory path is empty!");
            sender.exit();
        }

        if (!fs.existsSync(customcwd)){
            sender.Output.error("Directory is not exists on given custom working directory's path!");
            sender.exit();
        }

        sender.WorkingDirectory = customcwd;

    }
}

export default CustomPwdExecutor;

