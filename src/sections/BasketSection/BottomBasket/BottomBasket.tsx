import * as React from 'react';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import { Button } from '../../../components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { basketSelector } from '../../../redux/basket/selectors';

function BottomBasket() {
  const { totalCount, totalPrice }: any = useSelector(basketSelector);
  return (
    <div className="basket__bottom">
      <div className="basket__bottom-details">
        <span>
          Всего едеиниц товара:
          <b> {totalCount} шт</b>
        </span>
        <span>
          Сумма заказа:
          <b>{totalPrice} ₽</b>
        </span>
      </div>
      <div className="basket__bottom-buttons">
        <Link className="" to="/">
          <Button className="basket-back-btn" onClick={() => {}}>
            <NavigateBeforeIcon />
            Вернуться назад
          </Button>
        </Link>
        <Button className="basket-buy" onClick={() => {}}>
          Оплатить сейчас
        </Button>
      </div>
    </div>
  );
}

export default BottomBasket;
