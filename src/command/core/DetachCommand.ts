/**
 * This file is a part of ComposerSymlinkLocal
 * @Author Reverze <hawkmedia24@gmail.com>
 */
"use strict";
import Command from './../Command';
import CommandBuilderArgs from './../CommandBuilderArgs';
import * as fs from 'fs';

class DetachCommand extends Command
{
    public constructor()
    {
        super('detach');
    }

    public static createBuilderArgs(input : string) : CommandBuilderArgs
    {
        let args : CommandBuilderArgs = new CommandBuilderArgs();

        if (typeof input === 'string'){
            if (input.length <= 0 || input.trim() === '$space'){
                args.Parameters = [];
            }
            else{
                args.Parameters = input.replace("$space", "").trim().split(',');
            }
        }
        else{
            args.Parameters = [];
        }

        return args;
    }

    public parseArgs(input : string) : CommandBuilderArgs
    {
        return DetachCommand.createBuilderArgs(input);
    }

    public work(args ?: CommandBuilderArgs)
    {
        args.Flow.Output.info("Detaching symlinks...");

        let omitSpaces : boolean = args.Parameters.length > 0;

        for(let space of args.Flow.Config.Spaces){
            if (omitSpaces){
                if (args.Parameters.indexOf(space.Name) < 0){
                    continue;
                }
            }

            args.Flow.Output.print("    #" + space.Name);
            args.Flow.Output.notice("    Root directory: '" + space.DirectoryPath + "'");

            args.Flow.Output.info("    Symlinks: ");

            let symlinkCounter : number = 1;

            for(let node of space.Map.Nodes){
                args.Flow.Output.notice("      " + symlinkCounter.toLocaleString() + ". '" + node.LinkName + "' --> '" +
                    node.SourceDirectoryPath + "'");

                if (!fs.existsSync(node.LinkName)){
                    args.Flow.Output.warning("        * Source directory is not exists!");
                }

                if (!fs.existsSync(node.SourceDirectoryPath)){
                    args.Flow.Output.warning("        * Target directory is not exists!");
                }

                if (fs.existsSync(node.LinkName) && fs.existsSync(node.SourceDirectoryPath)){
                    let entryStats = fs.lstatSync(node.LinkName);

                    if (entryStats.isSymbolicLink()){
                        if (fs.existsSync(node.LinkName + ".backup")){
                            fs.unlinkSync(node.LinkName);
                            fs.renameSync(node.LinkName + ".backup", node.LinkName);
                        }
                        else{
                            args.Flow.Output.warning("The backup was not found! Unlink and empty directory will be created!");
                            fs.unlinkSync(node.LinkName);
                            fs.mkdirSync(node.LinkName);
                        }

                        args.Flow.Output.print("        * Symlink has been detached.");
                    }
                    else{
                        args.Flow.Output.print("        * Symlink is not attached. Omitting.");
                    }
                }

                symlinkCounter++;
                args.Flow.Output.print("");
            }

            args.Flow.Output.print("------------------------------------");
        }

    }
}

export default DetachCommand;

