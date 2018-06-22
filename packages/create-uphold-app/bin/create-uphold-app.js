#!/usr/bin/env node

'use strict';

/**
 * Module dependencies.
 */

const { execSync } = require('child_process');
const { copyFileSync, mkdirSync, writeFileSync } = require('fs');
const path = require('path');
const program = require('commander');

/**
 * Program parsing.
 */

program
  .parse(process.argv);

if (program.args.length !== 1) {
  console.error('Please specify a project name (e.g. `npm init uphold-app example-app`)');
  process.exit(1);
}

/**
 * Create new project.
 */

const name = [program.args];
const dir = path.join(path.resolve('.'), name);

try {
  mkdirSync(dir);
} catch (e) {
  if (e.code === 'EEXIST') {
    console.error(`Project already exists, please \`cd ${name}\` to access it`);
    process.exit(1);
  }

  throw e;
}

/**
 * Copy bootstrap files.
 */

copyFileSync(path.join(__dirname, '../template/eslintrc.yml'), path.join(dir, '.eslintrc.yml'));
copyFileSync(path.join(__dirname, '../template/gitignore'), path.join(dir, '.gitignore'));
copyFileSync(path.join(__dirname, '../template/LICENSE'), path.join(dir, 'LICENSE'));

/**
 * Build and write package.json file.
 */

const packageJson = require(path.join(__dirname, '../template/package.json'));

packageJson.name = name;

writeFileSync(path.join(dir, 'package.json'), JSON.stringify(packageJson, null, '  '));

/**
 * Finish.
 */

execSync('yarn', { cwd: dir });
execSync('git init', { cwd: dir });

console.log(`
  Created new project at ${dir}.

  To start using it:
    $ cd ${name}
`);
