"use strict";
import CommandModel from './CommandModel';
import SpaceModel from './SpaceModel';

class ConfigModel
{
    /**
     * Stores defiend commands
     * @type {CommandModel[]}
     */
    private commands : Array<CommandModel> = Array();

    /**
     * Stores defined spaces
     * @type {SpaceModel[]}
     */
    private spaces : Array<SpaceModel> = Array();

    public constructor()
    {
        let obj : any = {
            commands: {
                update: {
                    $detachSymlinks: "$space.swayframework-dependencies",
                    $eval: "composer update",
                    $attachSymlinks: "$space.swayframework-dependencies"
                }
            },
            spaces: [
                {
                    name: "swayframework-dependencies",
                    rootDir: "./vendor/rev",
                    map: [
                        {
                            source: "/home/konrad/projects/console",
                            linkName: "swayframework-console"
                        }
                    ]
                }
            ]
        };
    }



}


export default ConfigModel;