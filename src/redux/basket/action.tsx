import * as actionTypes from './actionTypes';

import { IJewelryItem } from '../jewelry/type';

export const AddJewelryBasket = (payload: IJewelryItem | null) => ({
  type: actionTypes.ADD_JEWELRY_TO_BASKET,
  payload,
});

export const RemoveJewelryBasket = (id: number) => ({
  type: actionTypes.REMOVE_JEWELRY_ITEM,
  payload: id,
});

export const ClearBasket = () => ({
  type: actionTypes.CLEAR_BASKET,
});

export const PlusBasketItem = (id: number) => ({
  type: actionTypes.PLUS_BASKET_ITEM,
  payload: id,
});

export const MinusBasketItem = (id: number) => ({
  type: actionTypes.MINUS_BASKET_ITEM,
  payload: id,
});
