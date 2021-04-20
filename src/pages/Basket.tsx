import * as React from 'react';
import { BodyBasket, HeaderBasket, BottomBasket } from '../sections';

function Basket() {
  return (
    <div className="basket">
      <div className="wrapper">
        <HeaderBasket />
        <BodyBasket />
        <BottomBasket />
      </div>
    </div>
  );
}

export default Basket;
