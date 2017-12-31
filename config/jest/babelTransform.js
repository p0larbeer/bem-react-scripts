// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc. All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */
'use strict';

const babelJest = require('babel-jest');
const bemConfig = require('bem-config')();
const levels = Object.keys(bemConfig.levelMapSync());

module.exports = babelJest.createTransformer({
  presets: [require.resolve('babel-preset-react-app')],
  plugins: [
    [
      require.resolve('babel-plugin-bem-import'),
      {
        levels,
        techs: ['js'],
      },
    ],
  ],
  babelrc: false,
});
