import { css } from 'styled-components';
import * as C from '../../styles/theme/color';
import * as F from '../../styles/theme/font';

export const LineInput = (error: boolean) => {
  return css`
    transition: 0.5s;
    height: 35px;
    border-bottom: 1.5px solid ${error ? C.red : C.gray40};
    background-color: ${C.gray10};
    ${F.font.Body2};
    &:focus {
      border-bottom: 1.5px solid ${error ? C.red : C.liteBlue};
    }
  `;
};
