import React from 'react';
import { ClassesColumns} from './dashboard.vm';
import * as innerClasses from './dashboard.styles';
import { ProductsListContext } from 'pods/productsList/products-list.context';
import { theme } from 'core/theme';

const classesColumns: ClassesColumns = {
  small: innerClasses.reduceColumn,
  medium: innerClasses.addColumn,
  big: ''
}

const getColumns = sizeColumns => classesColumns[sizeColumns] || "";

export const changeNumColumns = () => {
  const {sizeColumns} = React.useContext(ProductsListContext);
  const maxSmallWidthDevice = theme.breakpoints.values.md;
  const widthDevice = window.innerWidth;

  return widthDevice < maxSmallWidthDevice ? getColumns(sizeColumns) : "";
}


