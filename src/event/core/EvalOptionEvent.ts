/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import OptionEvent from './OptionEvent';

/**
 * Event called on argument '--eval'
 */
class EvalOptionEvent extends OptionEvent
{
    public constructor()
    {
        super();
    }
}

export default EvalOptionEvent;