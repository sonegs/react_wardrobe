import React from 'react';
import { cx } from '@emotion/css';
import { ItemComponent } from './components';
import { DashboardComponentProps} from './dashboard.vm';
import { changeNumColumns } from './dashboard.tools';
import * as innerClasses from './dashboard.styles';

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
