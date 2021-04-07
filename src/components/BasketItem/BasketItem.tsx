import * as React from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import CancelIcon from '@material-ui/icons/Cancel';

function BasketItem() {
  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src="../assets/img/ring.png" alt="" />
      </div>
      <div className="cart__item-info">
        <h3>Name Eman</h3>
        <p>Категория: Подвеска, Бренд: Name Eman</p>
      </div>
      <div className="cart__item-count">
        <button>
          <RemoveIcon />
        </button>
        4
        <button>
          <AddIcon />
        </button>
      </div>
      <div className="cart__item-price">1580 ₽</div>
      <div className="cart__item-remove">
        <button>
          <CancelIcon />
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
