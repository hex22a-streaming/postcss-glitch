/**
 * Crafted by Crash on 14.12.17.
 */

import { decl } from 'postcss';

export const getOffsetTop = height => Math.floor(Math.random() * height);
export const getOffsetBottom = (height, offsetTop, glitchHeight) => height - offsetTop - glitchHeight;

export const utils = { getOffsetTop, getOffsetBottom };

export default (height, glitchHeight = 5) => {
  const offsetTop = utils.getOffsetTop(height);
  const offsetBottom = utils.getOffsetBottom(height, offsetTop, glitchHeight);
  return decl({ prop: 'clip-path', value: `inset(${offsetTop}px 0 ${offsetBottom}px 0)` });
};
