import * as React from 'react';
import { useSelector } from 'react-redux';

import { BasketItem } from '../../../components';
import { basketSelector } from '../../../redux/basket/selectors';
import { IJewelryItem } from '../../../redux/jewelry/type';
import { PlusBasketItem, MinusBasketItem, RemoveJewelryBasket } from '../../../redux/basket/action';

function BodyBasket() {
  const { items }: any = useSelector(basketSelector);
  const addedJewelry = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  return (
    <div>
      {addedJewelry &&
        addedJewelry.map((item: IJewelryItem, index) => (
          <BasketItem
            item={item}
            totalPrice={items[item.id].totalPrice}
            totalCount={items[item.id].items.length}
            key={index}
            RemoveJewelryBasket={RemoveJewelryBasket}
            MinusBasketItem={MinusBasketItem}
            PlusBasketItem={PlusBasketItem}
          />
        ))}
    </div>
  );
}

export default BodyBasket;
