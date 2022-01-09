import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: 1;
  padding-top:20px;
`;

export const items = css`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;

  @media (min-width: ${theme.breakpoints.values.sm}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;
