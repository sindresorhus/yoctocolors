#!/usr/bin/env node

import { Suite } from "@jonahsnider/benchmark";
import ansi from "ansi-colors";
import chalk from "chalk";
import cliColor from "cli-color";
import * as colorette from "colorette";
import kleur from "kleur";
// eslint-disable-next-line node/file-extension-in-import
import * as kleurColors from "kleur/colors";
import * as nanocolors from "nanocolors";
import picocolors from "picocolors";
import * as yoctocolors from "./index.js";

const suite = new Suite("simple", {
	warmup: { trials: 10_000_000 },
	run: { trials: 1_000_000 },
});

// eslint-disable-next-line no-unused-vars
let out;

suite
	.addTest("yoctocolors", () => {
		out = yoctocolors.red("Add plugin to use time limit");
		out = yoctocolors.green("Add plugin to use time limit");
		out = yoctocolors.blue("Add plugin to use time limit");
	})
	.addTest("cli-color", () => {
		out = cliColor.red("Add plugin to use time limit");
		out = cliColor.green("Add plugin to use time limit");
		out = cliColor.blue("Add plugin to use time limit");
	})
	.addTest("ansi-colors", () => {
		out = ansi.red("Add plugin to use time limit");
		out = ansi.green("Add plugin to use time limit");
		out = ansi.blue("Add plugin to use time limit");
	})
	.addTest("chalk", () => {
		out = chalk.red("Add plugin to use time limit");
		out = chalk.green("Add plugin to use time limit");
		out = chalk.blue("Add plugin to use time limit");
	})
	.addTest("kleur", () => {
		out = kleur.red("Add plugin to use time limit");
		out = kleur.green("Add plugin to use time limit");
		out = kleur.blue("Add plugin to use time limit");
	})
	.addTest("kleur/colors", () => {
		out = kleurColors.red("Add plugin to use time limit");
		out = kleurColors.green("Add plugin to use time limit");
		out = kleurColors.blue("Add plugin to use time limit");
	})
	.addTest("colorette", () => {
		out = colorette.red("Add plugin to use time limit");
		out = colorette.green("Add plugin to use time limit");
		out = colorette.blue("Add plugin to use time limit");
	})
	.addTest("nanocolors", () => {
		out = nanocolors.red("Add plugin to use time limit");
		out = nanocolors.green("Add plugin to use time limit");
		out = nanocolors.blue("Add plugin to use time limit");
	})
	.addTest("picocolors", () => {
		out = picocolors.red("Add plugin to use time limit");
		out = picocolors.green("Add plugin to use time limit");
		out = picocolors.blue("Add plugin to use time limit");
	});

const results = await suite.run();

const table = [...results]
	// Convert median execution time to mean ops/sec
	.map(([library, histogram]) => [
		library,
		Math.round(1e9 / histogram.percentile(50)),
	])
	// Sort fastest to slowest
	.sort(([, a], [, b]) => b - a)
	// Convert to object for console.table
	.map(([library, opsPerSec]) => ({
		library,
		"ops/sec": opsPerSec.toLocaleString(),
	}));

console.table(table);
