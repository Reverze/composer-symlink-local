/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";

let configSchema = {
    declare: {
        my_projects_path: "/home/me/my_projects/libs",
        test_app_path: "/home/me/my_projects/my_test_app"
    },
    commands: {
        update: {
            $detachSymlinks: "$space",
            $eval: [ "composer update", "ls -l $my_projects_path" ],
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
            rootDir: "$test_app_path/vendor/me",
            map: [
                {
                    source: "$my_projects_path/packages/example-package-one",
                    linkName: "package-one"
                }
            ]
        }
    ]
};

export default configSchema;
