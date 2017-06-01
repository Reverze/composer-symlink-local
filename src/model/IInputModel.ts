"use strict";

interface IInputModel
{
    getFileName() : string;
    getFilePath() : string;
    setFileName(fileName : string) : void;
    setFilePath(filePath : string) : void;
}

export default IInputModel;
