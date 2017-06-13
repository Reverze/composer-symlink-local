"use strict";
import Executor from './Executor';
import FlowController from './../app/FlowController';
import CustomPwdEventArgs from './../event/core/args/CustomPwdEventArgs';

class CustomPwdExecutor extends Executor
{
    public constructor()
    {
        super();
    }

    public work(sender : FlowController, args : CustomPwdEventArgs)
    {
        sender.Output.warning("siemka");
        console.log(args);
        console.log("should be executed here");
    }
}

export default CustomPwdExecutor;

