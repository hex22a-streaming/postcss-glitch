/* eslint-disable import/prefer-default-export */
/**
 * Crafted by Crash on 20.12.17.
 */

import { plugin } from 'postcss';

import translator from './translator';

const PLUGIN_NAME = 'postcss-glitch';

export const initialize = () => translator;

module.exports = plugin(PLUGIN_NAME, initialize);
