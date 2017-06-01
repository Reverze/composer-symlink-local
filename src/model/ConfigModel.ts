"use strict";

class ConfigModel
{

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
            space: {
                name: "swayframework-dependencies",
                rootDir: "./vendor/rev",
                map: [
                    {
                        source: "/home/konrad/projects/console",
                        linkName: "swayframework-console"
                    }
                ]
            }
        };
    }

}


export default ConfigModel;