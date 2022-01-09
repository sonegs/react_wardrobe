import React from 'react';
import { cx } from '@emotion/css';
import { ItemComponent, ClassesProps } from './components';
import { ClassesColumns, DashboardComponentProps} from './dashboard.vm';
import * as innerClasses from './dashboard.styles';
import { ProductsListContext } from 'pods/productsList/products-list.context';
import { theme } from 'core/theme';

const classesColumns: ClassesColumns = {
  small: innerClasses.reduceColumn,
  medium: innerClasses.addColumn,
  big: ''
}

const getColumns = sizeColumns => classesColumns[sizeColumns] || "";

const changeNumColumns = () => {
  const {sizeColumns} = React.useContext(ProductsListContext);
  const maxSmallWidthDevice = theme.breakpoints.values.md;
  const widthDevice = window.innerWidth;

  return widthDevice < maxSmallWidthDevice ? getColumns(sizeColumns) : "";

}

export const DashboardComponent: React.FunctionComponent<DashboardComponentProps> = props => {

  const { items, classes } = props;

  const numColumns = changeNumColumns();

  return (
    <div
      className={cx(innerClasses.root, classes.root)}
    >
      <div className={cx(innerClasses.items, classes.items, numColumns)}>
        {items.map(
          item =>
            Boolean(item) && (
              <ItemComponent
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(classes.item.root)
                }}
                item={item}
              />
            )
        )}
      </div>
    </div>
  );
};

DashboardComponent.defaultProps = {
  classes: {
    root: '',
    items: '',
    item: {
      image: '',
      title: '',
      lastPrice: '',
      price: '',
      otherColors: '',
      add: ''
    },
  },
};
