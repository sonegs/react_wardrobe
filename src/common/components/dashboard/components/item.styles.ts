import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  color: #333;
  border: 1px solid #b2c9f3;
  border-radius:5px;
  box-shadow: 1px 1px 5px #b2c9f3;
  transition: .3s;

  @media (min-width: ${theme.breakpoints.values.sm}px) { // Tablet
    display:grid;
    grid-template-rows: 10fr 1fr 1fr 1fr 1fr 1fr;
  }
  @media (min-width: ${theme.breakpoints.values.md}px) { // Desktop
    display:grid;
    grid-template-rows: 6.5fr .8fr .8fr .8fr .6fr 1fr;
  }

  &:hover {
    background-color: #f3f3f3;
    margin-bottom:5px
  }
`;

export const smallCard = css`
  display: flex!important;
  flex-direction: column!important;
`;

export const mediumCard = css`
  display: grid!important;
  grid-template-rows: 6.5fr 1fr 1fr 1fr 1fr 1fr!important;
`;
export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const image = css`
  width: 100%;
  justify-self: center;
  grid-row-start:1;
  grid-row-end:1;
`;

export const textRow = css`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  letter-spacing: 0.00938em;
`;

export const title = css`
  font-size: .9rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const lastPrice = css`
  font-size: .9rem;
  text-decoration: line-through;
  @media (min-width: ${theme.breakpoints.values.sm}px) { // Tablet
    align-self:end;
  }
`;
export const price = css`
  font-size: .9rem;
`;
export const otherColors = css`
  font-size:.8rem;
  text-decoration: none;
  color: gray;
`;
export const add = css`
  background: #0172ea;
  font-size: .9rem;
  width: 4rem;
  justify-self: center;
  padding: .1rem .8rem;
  border-radius: 5px;
  text-decoration: none;
  text-transform: uppercase;
  color:#FFF;
  transition: .3s;
  align-self:center;

  &:hover {
    background-color: #0d64c1;
  }


`;
