'use strict';

const vueLibrary = require('../src');
const assert = require('assert').strict;

assert.strictEqual(vueLibrary(), 'Hello from vueLibrary');
console.info("vueLibrary tests passed");
