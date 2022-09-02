# create-vite-tailwind

A minimal boilerplate project for using TailwindCSS with Vite

> created by [create-create-app](https://github.com/uetchy/create-create-app).

## Usage

```bash
$ npx create-vite-tailwind <name>
...
$ cd <name>
$ yarn dev
```

or:

```
$ npm run dev
```

Open the provided link to view the project in a browser. Changes to the project will be hot reloaded and auto refreshed.

## Purged classes

Tailwind purges unused classes by default. The template project is configured to scan HTML and script files in the root directory only. To change this behavior, edit the `content` property of `tailwind.config.cjs`. See the [Tailwind configuration docs](https://tailwindcss.com/docs/configuration) for more info.
