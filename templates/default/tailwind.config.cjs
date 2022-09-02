/** @type {import('tailwindcss').Config} */
module.exports = {
	{{#if typescript}}
	content: ["./*.{html,ts}"],
	{{else}}
	content: ["./*.{html,js}"],
	{{/if}}
	theme: {
		extend: {},
	},
	plugins: [],
};
