# Uphold Scripts

Set of [NPM scripts](https://docs.npmjs.com/cli/run-script)
and [dev dependencies](http://npm.github.io/using-pkgs-docs/package-json/types/devdependencies.html)
to help with common tasks on Uphold projects.

## Available Scripts

- `changelog` - generate changelog file for a given version
- `lint` - run eslint to lint JS files
- `release` - cut a new release for a new version
- `test` - run the test suite with jest pre-configured
- `version` - tag a new version and generate its changelog

## Example Usage

This is how a `package.json` could look like when making use of these scripts:

```json
{
  "scripts": {
    "changelog": "uphold-scripts changelog $npm_package_version",
    "lint": "uphold-scripts lint",
    "release": "uphold-scripts release",
    "test": "uphold-scripts test",
    "version": "uphold-scripts version"
  },
  "devDependencies": {
    "uphold-scripts": "^0.4.0"
  },
  "pre-commit": [
    "lint"
  ]
}
```

To use the [ESLint](https://eslint.org) validations, this is the minimal `.eslintrc.yml` required:

```yaml
extends: uphold
```

## License

MIT
