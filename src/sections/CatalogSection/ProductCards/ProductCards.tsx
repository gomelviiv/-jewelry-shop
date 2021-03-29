import * as React from 'react';
import { Button, FigureProductCard } from '../../../components';

const arr = [
  {
    id: 1111111111,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna1',
    type: 'Подвеска',
    price: 175000,
  },
  {
    id: 2222222222,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna2',
    type: 'Подвеска',
    price: 175000,
  },
  {
    id: 3333333333,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna3',
    type: 'Подвеска',
    price: 175000,
  },
  {
    id: 4444444444,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna4',
    type: 'Подвеска',
    price: 175000,
  },
  {
    id: 5555555555,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna5',
    type: 'Подвеска',
    price: 175000,
  },
  {
    id: 6666666666,
    img: './assets/img/product-cart-images.png',
    name: 'Dolce & Gabanna6',
    type: 'Подвеска',
    price: 175000,
  },
];

function ProductCards() {
  return (
    <section className="product-cards">
      <div>
        {arr &&
          arr.map((val, index) => (
            <FigureProductCard
              className=""
              id={val.id}
              price={val.price}
              img={val.img}
              name={val.name}
              type={val.type}
              product={val}
              key={`${index} + ${val.id}`}
            />
          ))}
      </div>
      <Button className="product-cards__button" onClick={() => {}}>
        покажите еще
      </Button>
    </section>
  );
}

export default ProductCards;
