"use strict";

let defaultConfigFileName = "composer.symlink.json";

let inputSchema = {
    file: {
        type: String,
        value: (value, parsed, tool) => {
            if (value === null || value === undefined){
                return defaultConfigFileName;
            }
            return value;
        }
    }
};

export default inputSchema;