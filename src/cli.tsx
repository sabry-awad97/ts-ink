#!/usr/bin/env node
import { Command } from "commander";
import React from "react";
import { render } from "ink";
import App from "./ui";

const command = new Command();

interface IOptionValues {
	name: string;
}

command.option("-n, --name <name>", "name to display");
command.parse(process.argv);

const options = command.opts<IOptionValues>();

render(<App name={options.name} />);
