/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import DeclareModel from './../model/DeclareModel';
import ContainerModel from './../model/ContainerModel';

class DeclareModelConverter
{
    public static convert(rawObject : any, container ?: ContainerModel) : DeclareModel
    {
        let declareModel : DeclareModel = new DeclareModel();

        Object.keys(rawObject).forEach(varName => {
            declareModel.set(varName, rawObject[varName]);
        });


        return declareModel;
    }
}

export default DeclareModelConverter;
