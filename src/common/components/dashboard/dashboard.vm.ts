import { ClassesProps } from './components';

export interface DashboardItemProps {
  id: number;
  image: string;
  title: string;
  lastPrice?: string;
  price: string;
  discount?: string;
  otherColors?: string;
  add: string;
}[]

export interface ClassesColumns{
  small: string;
  medium: string;
  big: string;
}


interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}

export interface DashboardComponentProps {
  items: DashboardItemProps[];
  classes?: ClassNameProps;
}
