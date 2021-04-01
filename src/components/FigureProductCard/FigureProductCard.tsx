import * as React from 'react';
import { Link } from 'react-router-dom';
import { IJewelryField } from '../../redux/reducers/jewelry/type';
import Button from '../Button';

interface IFigureProductCard {
  id: number;
  img: string;
  name: string;
  brand: IJewelryField;
  price: number;
  gender: IJewelryField;
  season: IJewelryField;
  type: IJewelryField;
  event: IJewelryField;
  className: string;
  item: {
    id: number;
    img: string;
    name: string;
    brand: IJewelryField;
    price: number;
    gender: IJewelryField;
    season: IJewelryField;
    type: IJewelryField;
    event: IJewelryField;
  };
}

const FigureProductCard: React.FC<IFigureProductCard> = ({
  className,
  img,
  name,
  price,
  type,
  item,
  id,
}) => {
  return (
    <figure className={`figure-product-card ${className}`}>
      <img src={`./assets/img/${img}`} alt="" />
      <figcaption className="product-card-figcaption">
        <p className="product-card-figcaption__p">{type.text}</p>
        <h2 className="product-card-figcaption__h2">{name}</h2>
        <Link
          to={{
            pathname: `/catalog/${name}`,
            state: item,
          }}>
          <Button className="product-card-figcaption__button" value="" onClick={() => {}}>
            {price} ₽
          </Button>
        </Link>
      </figcaption>
    </figure>
  );
};

export default FigureProductCard;
