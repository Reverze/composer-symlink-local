"use strict";

interface IInputModel
{
    getSourceName() : string;
    getInitState() : boolean;
    getTestState() : boolean;
    getAttachState() : boolean;
    getDetachState() : boolean;
    getPwd() : string|null;
    setSourceName(sourceName : string) : void;
    setInitState(initState : boolean) : void;
    setTestState(testState: boolean) : void;
    setAttachState(attachState: boolean) : void;
    setDetachState(detachState: boolean) : void;
    setPwd(customWorkingDirectoryPath : string) : void;
}

export default IInputModel;
