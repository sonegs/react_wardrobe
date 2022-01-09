import React from 'react';
import { theme } from 'core/theme';
import { ClassesColumns } from 'common/components/dashboard/dashboard.vm';
import { ProductsListContext } from 'pods/productsList/products-list.context';
import * as innerClasses from 'common/components/dashboard/components/item.styles';

const classesCard: ClassesColumns = {
  small: innerClasses.smallCard,
  medium: innerClasses.mediumCard,
  big: ''
}

const getColumns = sizeColumns => classesCard[sizeColumns] || "";

export const changeStylesCards = () => {
  const {sizeColumns} = React.useContext(ProductsListContext);
  const maxSmallWidthDevice = theme.breakpoints.values.md;
  const widthDevice = window.innerWidth;

  return widthDevice < maxSmallWidthDevice ? getColumns(sizeColumns) : "";
}


