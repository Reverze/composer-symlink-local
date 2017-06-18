"use strict";

interface IInputModel
{
    getSourceName() : string;
    getInitState() : boolean;
    getTestState() : boolean;
    getPwd() : string|null;
    setSourceName(sourceName : string) : void;
    setInitState(initState : boolean) : void;
    setTestState(testState: boolean) : void;
    setPwd(customWorkingDirectoryPath : string) : void;
}

export default IInputModel;
