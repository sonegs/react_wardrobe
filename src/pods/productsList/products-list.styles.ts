import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const searchBar = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    flex-direction: row;
    justify-content:space-between;
  }
`;

export const textField = css`
  width: 16rem;
  padding-bottom:30px;
`;

export const searchBarIcons = css`
  font-size: 3rem!important;
  color:#d9d9d9;
  cursor: pointer
`;
