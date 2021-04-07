import * as React from 'react';
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';

import DeleteIcon from '@material-ui/icons/Delete';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
function HeaderBasket() {
  return (
    <div className="basket-top">
      <h2 className="content__title">
        <ShoppingCartIcon />
        Корзина
      </h2>
      <div className="basket__clear">
        <DeleteIcon />
        <span>Очистить корзину</span>
      </div>
    </div>
  );
}

export default HeaderBasket;
