# {{name}}

{{description}}

## Getting started

```
$ npm install
...
$ npm run dev
```

or:

```
$ yarn install
...
$ yarn dev
```

Open the provided link to view the project in a browser. Changes to the project will be hot reloaded and auto refreshed.

## Purged classes

Tailwind purges unused classes by default. This project is configured to scan HTML and 
{{#if typescript}}
Typescript
{{else}}
JavaScript
{{/if}}
 files in the root directory only. To change this behavior, edit the `content` property of `tailwind.config.cjs`. See the [Tailwind configuration docs](https://tailwindcss.com/docs/configuration) for more info.
