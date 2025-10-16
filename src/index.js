#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */

const { program } = require('commander');

/**
 * Program parsing.
 */

program
  .command('changelog [version]', 'Generate changelog file', { executableFile: './uphold-scripts-changelog' })
  .command('lint', 'Lint JS files', { executableFile: './uphold-scripts-lint' })
  .command('release [version]', 'Cut a new release', { executableFile: './uphold-scripts-release' })
  .command('test <options>', 'Run the test suite', { executableFile: './uphold-scripts-test' })
  .command('version', 'Tag a new version', { executableFile: './uphold-scripts-version' })
  .parse(process.argv);
