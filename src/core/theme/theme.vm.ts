import { Theme as DefaultTheme } from '@material-ui/core/styles';

export interface Theme extends Omit<DefaultTheme, 'palette'> {
  // Add types here...
}
