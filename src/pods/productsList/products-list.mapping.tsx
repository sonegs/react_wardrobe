import React from 'react';
import { ProductsListComponent } from './products-list.component';
import { DashboardItemProps } from 'common/components';

interface Props {
  items: DashboardItemProps[];
}

export const ProductsListMapping: React.FunctionComponent<Props> = props => {
  const { items } = props;

  const mapItems = items.map(item => mapProductsListFromApiToViewModel(item));

  return <ProductsListComponent items={mapItems} />;
};

const mapProductsListFromApiToViewModel = item => {
    return {
      id: item.id,
      image: item.image,
      title: item.title,
      lastPrice: (item.discount) ? `${item.price} €` : "",
      price: (item.discount) ? `${applyDiscount(item.price, item.discount)} €`: `${item.price} €`,
      discount: (item.discount) ? `(-${item.discount}%)`: "",
      otherColors: item.otherColors,
      add: item.add
    }
  }

  const applyDiscount = (price, discount) => {
    return ((price - (price * discount) / 100)).toFixed(2);
  }
