/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Executor from './Executor';
import EventArgs from './../event/EventArgs';
import FlowController from './../app/FlowController';
import MapNodeModel from './../model/MapNodeModel';
import * as fs from 'fs';
import {Stats} from "fs";

class TestConfigExecutor extends Executor
{
    public constructor()
    {
        super();
    }


    public work(sender : FlowController, args : EventArgs)
    {
        sender.Output.info("Testing configuration...");
        sender.Output.info("  Spaces:");

        for(let space of sender.Config.Spaces){
            sender.Output.print("    #" + space.Name);
            sender.Output.notice("    Root directory: '" + space.DirectoryPath + "'");

            sender.Output.info("    Symlinks: ");

            let symlinkCounter : number = 1;

            for(let node of space.Map.Nodes){
                sender.Output.notice("      " + symlinkCounter.toLocaleString() + ". '" + node.LinkName + "' --> '" +
                    node.SourceDirectoryPath + "'");

                if (!fs.existsSync(node.LinkName)){
                    sender.Output.warning("        * Source directory is not exists!");
                }

                if (!fs.existsSync(node.SourceDirectoryPath)){
                    sender.Output.warning("        * Target directory is not exists!");
                }

                if (fs.existsSync(node.LinkName)){
                    let entryStats = fs.lstatSync(node.LinkName);

                    if (entryStats.isSymbolicLink()){
                        sender.Output.print("        * Symlink attached");
                    }
                    else{
                        sender.Output.print("        * Symlink not attached");
                    }
                }

                symlinkCounter++;
                sender.Output.print("");
            }

            sender.Output.print("------------------------------------");
        }
    }


}

export default TestConfigExecutor;