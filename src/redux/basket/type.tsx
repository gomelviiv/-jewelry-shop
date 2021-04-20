import { IJewelryItem } from '../jewelry/type';

export interface IBasketItem {
  items: Array<IJewelryItem>;
  totalPrice: number;
}

export interface IBasket {
  totalCount: number;
  totalPrice: number;
  items: {
    [id: number]: IBasketItem;
  };
}

export interface IBasketPayloadType<T> {
  type: string;
  payload: T;
}
