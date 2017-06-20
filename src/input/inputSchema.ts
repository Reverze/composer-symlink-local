"use strict";

let inputSchema = {
    source: {
        type: String,
        value : (value, parsed, tool) => {
            return value === null || value === undefined ? null : value;
        }
    },
    init: {
        type: Boolean,
        value: false
    },
    pwd: {
        type: String,
        value: (value, parsed, tool) => {
            return value === null || value === undefined ? null : value;
        }
    },
    test: {
        type: Boolean,
        value: false
    },
    attach: {
        type: Boolean,
        value: false
    }
};

export default inputSchema;