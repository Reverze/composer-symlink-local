"use strict";

interface IInputModel
{
    getSourceName() : string;
    getInitState() : boolean;
    getTestState() : boolean;
    getAttachState() : boolean;
    getPwd() : string|null;
    setSourceName(sourceName : string) : void;
    setInitState(initState : boolean) : void;
    setTestState(testState: boolean) : void;
    setAttachState(attachState: boolean) : void;
    setPwd(customWorkingDirectoryPath : string) : void;
}

export default IInputModel;
