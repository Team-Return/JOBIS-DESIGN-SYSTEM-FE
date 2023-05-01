import { directionType } from '../types/direction';

export type marginType =
  | [number, number, number, number]
  | [number | directionType, number | 'auto']
  | [number];

export interface marginCssType {
  margin?: marginType[] | marginType;
}

const mgReturn = (mg: marginType) => {
  if (mg[0] === 0 && mg[1] === 'auto') {
    return `margin: 0 auto;`;
  }

  const unitTransform = (m: 'auto' | number) => (m === 'auto' ? m : m + 'px');

  switch (mg[0]) {
    case 'top':
    case 'bottom':
    case 'left':
    case 'right':
      return `margin-${mg[0]}: ${unitTransform(mg[1] || 0)};`;
    default:
      let css = 'margin: ';
      for (let j = 0; j < mg.length; j++) css += mg[j] + 'px ';
      return css + ';';
  }
};

export const marginToCss = ({ margin }: marginCssType) => {
  if (!margin) return;
  let mgCss = '';

  if (Array.isArray(margin[0])) {
    for (let i = 0; i < margin.length; i++) {
      // @ts-expect-error
      mgCss += mgReturn(margin[i]);
    }
  } else {
    // @ts-expect-error
    mgCss = mgReturn(margin);
  }

  return mgCss;
};
