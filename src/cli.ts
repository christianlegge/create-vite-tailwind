#!/usr/bin/env node

import { AfterHookOptions, create } from "create-create-app";
import { resolve } from "path";

const templateRoot = resolve(__dirname, "..", "templates");

create("create-vite-tailwind", {
	templateRoot,
	extra: {
		typescript: {
			type: "confirm",
			describe: "TypeScript?",
			prompt: "always",
		},
	},
	after: async ({ installNpmPackage, answers }: AfterHookOptions) => {
		let packages = "vite tailwindcss postcss autoprefixer";
		if (answers.typescript) {
			packages = `typescript ${packages}`;
		}
		await installNpmPackage(packages, true);
	},
});
