"use strict";

interface IStandardOutput
{
    /**
     * Prints message (without format) to standard output.
     * @param message
     */
    print(message : string) : void;

    /**
     * Prints message (as warning) to standard output.
     * @param message
     */
    warning(message : string) : void;

    /**
     * Prints message (as notice) to standard output.
     * @param message
     */
    notice(message : string) : void;

    /**
     * Prints message (as info) to standard output.
     * @param message
     */
    info(message : string) : void;

    /**
     * Prints message (as error) to standard output.
     * @param message
     */
    error(message : string) : void;

    /**
     * Prints message (as success) to standard output;
     * @param message
     */
    success(message : string) : void;
}

export default IStandardOutput;