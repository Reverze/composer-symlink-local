"use strict";
import EventArgs from './../../EventArgs';

class CustomPwdEventArgs extends EventArgs
{
    /**
     * Custom path of current working directory provided
     * by user
     * @type {string|null}
     */
    private customCurrentWorkingDirectoryPath : string|null  = null;

    public constructor(customPwd : string|null)
    {
        super();

        this.customCurrentWorkingDirectoryPath = customPwd;
    }

    /**
     * Custom path of current working directory
     * provided by user in application args
     * @returns {string|null}
     * @constructor
     */
    get CustomWorkingDirectoryPath() : string|null
    {
        return this.customCurrentWorkingDirectoryPath;
    }
}

export default CustomPwdEventArgs;