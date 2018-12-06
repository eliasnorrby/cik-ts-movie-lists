'use strict';
// const compilerOptions = require("./tsconfig.json").compilerOptions;

module.exports = function(wallaby) {
  return {
    files: [
      'src/**/*.ts',
      '!src/**/*Test.ts',
      { pattern: 'src/**/*input.ts', instrument: false },
      { pattern: 'src/**/*.txt', instrument: false }
    ],
    tests: [
      'test/**/*Test.ts',
      'src/**/*Test.ts',
    ],
    // compilers: {
    //   '**/*.ts?(x)': wallaby.compilers.typeScript(compilerOptions),
    // },
    // compilers: {
    //   '**/*.ts?(x)': wallaby.compilers.typeScript(),
    // },
    testFramework: 'jasmine',
    env: {
      type: 'node',
    },
  };
};
