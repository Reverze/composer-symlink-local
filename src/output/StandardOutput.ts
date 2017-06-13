import IStandardOutput from './IStandardOutput';

class StandardOutput implements IStandardOutput
{
    public constructor()
    {

    }

    /**
     * @inheritDoc
     * @param message
     */
    public print(message : string) : void
    {
        console.log(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public warning(message : string) : void
    {
        this.print("\033[0;33m" + message + "\033[0m ");
    }

    /**
     * @inheritDoc
     * @param message
     */
    public notice(message : string) : void
    {
        this.print("\033[0;35m" + message + "\033[0m ");
    }

    /**
     * @inheritDoc
     * @param message
     */
    public info(message : string) : void
    {
        this.print("\033[1;34m" + message + "\033[0m ");
    }

    /**
     * @inheritDoc
     * @param message
     */
    public error(message : string) : void
    {
        this.print("\033[0;31m" + message + "\033[0m ");
    }

    /**
     * @inheritDoc
     * @param message
     */
    public success(message : string) : void
    {
        this.print("\033[0;32m" + message + "\033[0m ");
    }


}

export default StandardOutput;