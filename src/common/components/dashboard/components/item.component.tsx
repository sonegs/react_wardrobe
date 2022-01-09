import React from 'react';
import { cx } from '@emotion/css';
import { Link } from 'react-router-dom';
import { DashboardItemProps } from '../dashboard.vm';
import { changeStylesCards } from './item.tools';
import * as innerClasses from './item.styles';

export interface ClassesProps {
  root?: string;
  image: string;
  title: string;
  lastPrice?: string;
  price: string;
  otherColors?: string;
  add: string;
}

interface Props {
  item: DashboardItemProps;
  classes?: ClassesProps;
}


export const ItemComponent: React.FunctionComponent<Props> = props => {
  const {
    item: {image,
          title,
          lastPrice,
          price,
          discount,
          otherColors,
          add },
    classes
  } = props;

  const styleApplyDiscount = ()  => (lastPrice == '') ? 'black' : 'red';
  const applyDiscountStyle: React.CSSProperties = { color: styleApplyDiscount() }
  const gridCard = changeStylesCards();

  return (
    <div
        className={cx(innerClasses.root, classes.root, gridCard)}
    >
      <img
          src={image}
          width="80px"
          className={cx(innerClasses.image, classes.image)}
      />
      <div

        className={cx(innerClasses.textRow, innerClasses.title, classes.title)}
      >
        {title}
      </div>
      <div
        className={cx(innerClasses.textRow, innerClasses.lastPrice, classes.lastPrice)}
      >
        {lastPrice}
      </div>
      <div
        className={cx(innerClasses.textRow, innerClasses.price, classes.price)}
        style={applyDiscountStyle}
      >
        {price}{discount}
      </div>
      <Link
        to={'#'}
        className={cx(innerClasses.textRow, innerClasses.otherColors, classes.otherColors)}
      >
        {otherColors}
      </Link>
      <div className={cx(innerClasses.buttonContainer, classes.otherColors)}>
        <Link
          to={'#'}
          className={cx(innerClasses.textRow, innerClasses.add, classes.add)}
        >
          <div className="button">
            {add}
          </div>
        </Link>
      </div>
    </div>
  );
};

ItemComponent.defaultProps = {
  classes: {
    root: '',
    image: '',
    title: '',
    lastPrice: '',
    price: '',
    otherColors: '',
    add: ''
  },
};
