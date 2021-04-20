import * as React from 'react';

import { BasketItem } from '../../../components';

function BodyBasket() {
  return (
    <div>
      {[1, 2, 3].map((val, index) => (
        <BasketItem key={index} />
      ))}
    </div>
  );
}

export default BodyBasket;
