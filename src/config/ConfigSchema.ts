/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";

let configSchema = {
    commands: {
        update: {
            $detachSymlinks: "$space",
            $eval: "composer update",
            $attachSymlinks: "$space"
        },
        install: {
            $detachSymlinks: "$space",
            $eval: "composer install",
            $attachSymlinks: "$space"
        }
    },
    spaces: [
        {
            name: "example-space",
            rootDir: "./vendor/example",
            map: [
                {
                    source: "~/my_projects/packages/example-package-one",
                    linkName: "me/package-one"
                }
            ]
        }
    ]
};

export default configSchema;
