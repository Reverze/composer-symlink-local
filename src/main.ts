"use strict";
import Application from './app';
import * as process from 'process';

let app = new Application(__dirname);
app.execute(process.argv);

