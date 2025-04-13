<div align="center">

# Config Packs

<h3>My <code>config-rocket</code> ecosystem config packs!</h3>
<img src="./branding.svg" alt="Project's branding image" width="320"/>
</div>

# config-packs [![template icon][template-src]][template-href]

## Overview

**config-packs** is the development and distribution repo for my `config-rocket` ecosystem config packs.

## Crafting guide:

### Necessary components:

To be able to bundle and assemble, `Config Rocket` requires a `rocket assembly`, which is these components:
  * `frame/`: the rocket frame, containing the base files that will be processed and split out.
  * `fuel/`: the rocket fuel, containing the files that will be used as context to build the rocket, feel free to add any files as you need.
  * `rocket.config.ts`: the rocket config file, containing the instructions to for `RR` to assemble and allowing customization of the rocket.
    * Utilizes `TypeScript` on development side for type safety & autocomplete DX, bundles to `JSON5` for safety and human-readability at client-side.

### Ecosystem and customizability note:

If you're crafting a config pack for an extension of `config-rocket`, remember to check their rules and guidelines, e.g:
+ [`roo-rocket`](https://github.com/NamesMT/roo-rocket/tree/main/libs/roo-rocket) only allows limited `frame` pattern to ensure safety.

You can mix and create config packs for multiple extension of `config-rocket` in the same repo.

Some could provide their own assemble and bundle functions, this codebase is just a template for you to start from, feel free to adjust and customize it to your needs.

## Live development:

Simply run `pnpm run dev`,

This will assemble the `targetDevSubject` at `.config-dev/` folder and watch for changes, triggering re-assembly as needed, you can open `.config-dev/` in another window to test the assembled config live!

## Bundle for distribution:

Simply run `pnpm run bundle`,

This will execute all `bundleConfigPack` in `src/bundle.ts` and output the result to `dist/` folder.

You can then add them into a GitHub release, or upload them anywhere, everyone can now use it through CLI.

## License [![License][license-src]][license-href]

<!-- Badges -->

[template-src]: https://img.shields.io/badge/>📄<-%23f5dfa2.svg?logoColor=white
[template-href]: https://github.com/namesmt/config-packs-template
[npm-version-src]: https://img.shields.io/npm/v/config-packs?labelColor=18181B&color=F0DB4F
[npm-version-href]: https://npmjs.com/package/config-packs
[npm-downloads-src]: https://img.shields.io/npm/dm/config-packs?labelColor=18181B&color=F0DB4F
[npm-downloads-href]: https://npmjs.com/package/config-packs
[codecov-src]: https://img.shields.io/codecov/c/gh/namesmt/config-packs/main?labelColor=18181B&color=F0DB4F
[codecov-href]: https://codecov.io/gh/namesmt/config-packs
[license-src]: https://img.shields.io/github/license/namesmt/config-packs.svg?labelColor=18181B&color=F0DB4F
[license-href]: https://github.com/namesmt/config-packs/blob/main/LICENSE
[bundlejs-src]: https://img.shields.io/bundlejs/size/config-packs?labelColor=18181B&color=F0DB4F
[bundlejs-href]: https://bundlejs.com/?q=config-packs
[jsDocs-src]: https://img.shields.io/badge/Check_out-jsDocs.io---?labelColor=18181B&color=F0DB4F
[jsDocs-href]: https://www.jsdocs.io/package/config-packs
