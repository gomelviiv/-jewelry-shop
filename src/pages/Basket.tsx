import * as React from 'react';
import { BodyBasket, HeaderBasket } from '../sections';

function Basket() {
  return (
    <div className="basket">
      <div className="wrapper">
        <HeaderBasket />
        <BodyBasket />
      </div>
    </div>
  );
}

export default Basket;
