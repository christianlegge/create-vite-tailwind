#!/usr/bin/env node

import { AfterHookOptions, create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

// See https://github.com/uetchy/create-create-app/blob/master/README.md for other options.

create("create-vite-tailwind", {
	templateRoot,
	//promptForPackageManager: true,
	extra: {
		typescript: {
			type: "confirm",
			describe: "TypeScript?",
			prompt: "always",
		},
	},
	after: async ({ installNpmPackage, answers }: AfterHookOptions) => {
		let packages = "vite tailwindcss postcss autoprefixer";
		console.log(answers);
		if (answers.typescript) {
			packages = `typescript ${packages}`;
		}
		await installNpmPackage(packages, true);
	},
});
