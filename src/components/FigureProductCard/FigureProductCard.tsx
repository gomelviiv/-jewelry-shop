import * as React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';

interface IFigureProductCard {
  className: string;
  img: string;
  name: string;
  price: number;
  type: string;
  id: number;
  product: {
    img: string;
    name: string;
    price: number;
    type: string;
    id: number;
  };
}

const FigureProductCard: React.FC<IFigureProductCard> = ({
  className,
  img,
  name,
  price,
  type,
  id,
  product,
}) => {
  console.log(product);
  return (
    <figure className={`figure-product-card ${className}`}>
      <img src={img} alt="" />
      <figcaption className="product-card-figcaption">
        <p className="product-card-figcaption__p">{type}</p>
        <h2 className="product-card-figcaption__h2">{name}</h2>
        <Link to={`/catalog/${name}`}>
          <Button className="product-card-figcaption__button" onClick={() => {}}>
            {price} ₽
          </Button>
        </Link>
      </figcaption>
    </figure>
  );
};

export default FigureProductCard;
