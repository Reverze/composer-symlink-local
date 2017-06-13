"use strict";

interface IInputModel
{
    getFileName() : string;
    getFilePath() : string;
    getInitState() : boolean;
    getPwd() : string|null;
    setFileName(fileName : string) : void;
    setFilePath(filePath : string) : void;
    setInitState(initState : boolean) : void;
    setPwd(customWorkingDirectoryPath : string) : void;
}

export default IInputModel;
