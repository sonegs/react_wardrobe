import { css } from '@emotion/css';
import { theme } from 'core/theme';

export const root = css`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 4fr .25fr .25fr .3fr .3fr .3fr;
  text-align: center;
  padding: 15px;
  text-decoration: none;
  color: #333;
  border: 1px solid #b2c9f3;
  border-radius:5px;
  box-shadow: 1px 1px 5px #b2c9f3;
  transition: .3s;

  @media (min-width: ${theme.breakpoints.values.md}px) {
    grid-template-rows: 4fr .7fr .4fr .4fr .4fr .4fr;
  }

  &:hover {
    background-color: #f3f3f3;
    margin-bottom:5px
  }
`;
export const buttonContainer = css`
  display: flex;
  justify-content: center;
  align-items: end;
`;
export const image = css`
  width: 100%;
  justify-self: center;
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

  &:hover {
    background-color: #0d64c1;
  }
`;
