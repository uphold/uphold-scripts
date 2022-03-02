# uphold-scripts

[![npm][npm-image]][npm-url]

Set of [NPM scripts](https://docs.npmjs.com/cli/run-script)
and [dev dependencies](http://npm.github.io/using-pkgs-docs/package-json/types/devdependencies.html)
to help with common tasks on [Uphold projects](https://github.com/uphold).

## Available Scripts

- `changelog` - generate changelog file for a given version
- `lint` - run eslint to lint JS files
- `release` - cut a new release for a new version
- `test` - run the test suite with jest pre-configured
- `version` - tag a new version and generate its changelog

## Installation

Install the package via `yarn`:

```sh
❯ yarn add uphold-scripts --dev
```

or via `npm`:

```sh
❯ npm install uphold-scripts --save-dev
```

And then configure `package.json` to look like this:

```json
{
  "scripts": {
    "changelog": "uphold-scripts changelog $npm_package_version",
    "lint": "uphold-scripts lint .",
    "lint-staged": "lint-staged -q",
    "release": "uphold-scripts release",
    "test": "uphold-scripts test",
    "version": "uphold-scripts version"
  },
  "pre-commit": [
    "lint-staged"
  ],
  "lint-staged": {
    "*.{js,mjs}": ["uphold-scripts lint"]
  }
}
```

To use the [ESLint](https://eslint.org) validations, this is the minimal `.eslintrc.yml` required:

```yaml
extends: uphold
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/uphold-scripts/latest
[npm-url]: https://www.npmjs.com/package/uphold-scripts
