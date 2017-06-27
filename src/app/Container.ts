/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import ContainerModel from './../model/ContainerModel';

abstract class Container
{
    private static model : ContainerModel = new ContainerModel();

    public static parse(input : string) : string
    {
        return input;
    }
}

export default Container;