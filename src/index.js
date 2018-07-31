#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */

const program = require('commander');

/**
 * Program parsing.
 */

program
  .command('changelog [version]', 'Generate changelog file')
  .command('lint', 'Lint JS files')
  .command('release [version]', 'Cut a new release')
  .command('test <options>', 'Run the test suite')
  .command('version', 'Tag a new version')
  .parse(process.argv);
