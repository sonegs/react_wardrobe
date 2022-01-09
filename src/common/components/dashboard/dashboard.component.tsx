import React from 'react';
import { cx } from '@emotion/css';
import { ItemComponent, ClassesProps } from './components';
import { DashboardItemProps } from './dashboard.vm';
import * as innerClasses from './dashboard.styles';

interface ClassNameProps {
  root?: string;
  items?: string;
  item?: ClassesProps;
}

interface Props {
  items: DashboardItemProps[];
  classes?: ClassNameProps;
}

export const DashboardComponent: React.FunctionComponent<Props> = props => {
  const { items, classes } = props;
  return (
    <div
      className={cx(innerClasses.root, classes.root)}
    >
      <div className={cx(innerClasses.items, classes.items)}>
        {items.map(
          item =>
            Boolean(item) && (
              <ItemComponent
                key={item.title}
                classes={{
                  ...classes.item,
                  root: cx(classes.item.root),
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
