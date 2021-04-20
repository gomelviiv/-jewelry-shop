import * as React from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelIcon from '@material-ui/icons/Cancel';

import { IJewelryItem } from '../../redux/jewelry/type';

import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';

interface IItem {
  key: number;
  item: IJewelryItem;
  totalPrice: number;
  totalCount: number;
  PlusBasketItem(id: number): void;
  MinusBasketItem(id: number): void;
  RemoveJewelryBasket(id: number): void;
}

const BasketItem: React.FC<IItem> = ({
  item,
  totalPrice,
  totalCount,
  MinusBasketItem,
  PlusBasketItem,
  RemoveJewelryBasket,
}) => {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={`../assets/img/${item.img}`} alt="" />
      </div>
      <div className="cart__item-info">
        <h3>{item.name}</h3>
        <p>
          Категория: {item.type.text}, Бренд: {item.brand.text}
        </p>
      </div>
      <div className="cart__item-count">
        <button onClick={() => dispatch(MinusBasketItem(item.id))}>
          <RemoveIcon />
        </button>
        {totalCount}
        <button onClick={() => dispatch(PlusBasketItem(item.id))}>
          <AddIcon />
        </button>
      </div>
      <div className="cart__item-price">{totalPrice}</div>
      <div className="cart__item-remove">
        <button onClick={() => dispatch(RemoveJewelryBasket(item.id))}>
          <CancelIcon />
        </button>
      </div>
    </div>
  );
};

export default BasketItem;
