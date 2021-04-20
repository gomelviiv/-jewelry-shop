import * as React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { ClearBasket } from '../../../redux/basket/action';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
function HeaderBasket() {
  const dispatch: Dispatch<any> = useDispatch();

  return (
    <div className="basket-top">
      <h2 className="content__title">
        <ShoppingCartIcon />
        Корзина
      </h2>
      <div className="basket__clear" onClick={() => dispatch(ClearBasket())}>
        <DeleteIcon />
        <span>Очистить корзину</span>
      </div>
    </div>
  );
}

export default HeaderBasket;
