/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import CustomSourceEventArgs from './../event/core/args/CustomSourceEventArgs';
import FlowController from './../app/FlowController';
import * as validator from 'validator';

class CustomSourceExecutor extends Executor
{
    public work(sender : FlowController, args : CustomSourceEventArgs)
    {
        let customSourceName = args.SourceName;

        if (customSourceName === null || customSourceName === undefined){
            throw new Error("Custom source file's name cannot be null or undefined!");
        }

        if (! (typeof (customSourceName) === 'string')){
            throw new Error("Source's name parameter is not a string");
        }

        if (validator.isEmpty(customSourceName)){
            throw new Error("Source's name is empty!");
        }

        sender.SourceFileName = customSourceName;
    }
}

export default CustomSourceExecutor;