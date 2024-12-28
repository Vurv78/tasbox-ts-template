# tasbox-ts-template

This is a template to help you create a TASBox package using Typescript (powered by [TypescriptToLua](https://typescripttolua.github.io)).

This uses [bun](https://bun.sh), but you can easily switch to using `npm` or `deno` by swapping out `bun:test` for [jest](https://jestjs.io).

## Initial Setup

Just install the dependencies and you're good to go.

```bash
bun install
```

## Building

```bash
bun run build
```

This will build your package's clientside and serverside entrypoints bundled into `./dist`.

You can test it using the [luau](https://github.com/luau-lang/luau) CLI directly by running `luau ./dist/client/index.luau` to run the clientside entrypoint, for example.

## Testing

Since you're writing Typescript, you can test your isolated code running as Javascript rather than doing anything requiring the engine - assuming you don't use any Luau APIs.

```bash
bun test
```

## Note

Currently this duplicates the code between them - you can configure tstl to instead output files separately as you organize them in `./src` to `./dist`, but I have not tested if `require` would work inside of TASBox that way yet (if not, i'll need to make a change to tstl).

Regardless, TASBox is still in its early infancy, so you should be ready to face issues making anything for it at all.