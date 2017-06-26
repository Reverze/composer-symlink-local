"use strict";

interface IInputModel
{
    getSourceName() : string;
    getInitState() : boolean;
    getTestState() : boolean;
    getAttachState() : string|boolean;
    getDetachState() : string|boolean;
    getPwd() : string|null;
    getEval() : string|null;
    getRun() : string|null;
    setSourceName(sourceName : string) : void;
    setInitState(initState : boolean) : void;
    setTestState(testState: boolean) : void;
    setAttachState(attachState: string|boolean) : void;
    setDetachState(detachState: string|boolean) : void;
    setPwd(customWorkingDirectoryPath : string) : void;
    setEval(evalInput : string) : void;
    setRun(runInput : string) : void;
}

export default IInputModel;
