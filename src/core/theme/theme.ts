import merge from 'lodash.merge';
import { createTheme } from '@material-ui/core/styles';
import { Theme } from './theme.vm';

const defaultTheme = createTheme();

export const theme = merge(defaultTheme, {
  // Add themes styles here...
} as Theme);
