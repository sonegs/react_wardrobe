import React from 'react';
import { DashboardComponent, DashboardItemProps } from 'common/components';

interface Props {
  items: DashboardItemProps[];
}

export const ProductsListComponent: React.FunctionComponent<Props> = props => {

  const { items } = props;
  return <DashboardComponent items={items} />;

};
