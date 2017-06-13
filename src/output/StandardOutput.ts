import IStandardOutput from './IStandardOutput';
import * as so from './output';

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
        so.print(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public warning(message : string) : void
    {
        so.warning(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public notice(message : string) : void
    {
        so.notice(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public info(message : string) : void
    {
        so.info(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public error(message : string) : void
    {
        so.error(message);
    }

    /**
     * @inheritDoc
     * @param message
     */
    public success(message : string) : void
    {
        so.success(message);
    }


}

export default StandardOutput;