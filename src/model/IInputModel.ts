"use strict";

interface IInputModel
{
    getFileName() : string;
    getFilePath() : string;
    getInitState() : boolean;
    setFileName(fileName : string) : void;
    setFilePath(filePath : string) : void;
    setInitState(initState : boolean) : void;
}

export default IInputModel;
