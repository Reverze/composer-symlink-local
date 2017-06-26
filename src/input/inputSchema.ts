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
        type: [ String, Boolean ],
        value: false
    },
    detach: {
        type: Boolean,
        value: false
    },
    eval: {
        type: String,
        value: (value, parsed, tool) => {
            return !value ? null : value;
        }
    },
    run: {
        type: String,
        value: (value, parsed, tool) => {
            return !value ? null : value;
        }
    }
};

export default inputSchema;