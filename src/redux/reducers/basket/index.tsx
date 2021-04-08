import * as actionTypes from './actionTypes';
import { IBasket, IBasketItem, IBasketPayloadType } from './type';
import { IJewelryItem } from '../jewelry/type';

const initialState = {
  totalCount: 0,
  totalPrice: 0,
  items: {},
} as IBasket;

const getTotalPriceNewItem = (arr: Array<IJewelryItem>) =>
  arr.reduce((sum: number, current: IJewelryItem) => sum + current.price, 0);

const getTotalCount = (newItems: any) => {
  return Object.keys(newItems).reduce(
    (sum: number, key: any) => newItems[key].items.length + sum,
    0,
  );
};

const getTotalPrice = (newItems: any) => {
  return Object.keys(newItems).reduce((sum: number, key: any) => newItems[key].totalPrice + sum, 0);
};

const basketReducer = (state: IBasket = initialState, action: IBasketPayloadType<any>): IBasket => {
  switch (action.type) {
    case actionTypes.ADD_JEWELRY_TO_BASKET: {
      const currentJewelryItem = !state.items[action.payload.id]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];
      const newItems = {
        ...state.items,
        [action.payload.id]: {
          items: currentJewelryItem,
          totalPrice: getTotalPriceNewItem(currentJewelryItem),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case actionTypes.REMOVE_JEWELRY_ITEM: {
      const newItems = { ...state.items };
      const currentTotalPrice = newItems[action.payload].totalPrice;
      const currentTotalCount = newItems[action.payload].items.length;

      delete newItems[action.payload];
      return {
        ...state,
        items: newItems,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case actionTypes.MINUS_BASKET_ITEM: {
      const oldItems = state.items[action.payload].items;
      const newObjItems =
        oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPriceNewItem(newObjItems),
        },
      };
      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case actionTypes.PLUS_BASKET_ITEM: {
      const newObjItems = [
        ...state.items[action.payload].items,
        state.items[action.payload].items[0],
      ];
      const newItems = {
        ...state.items,
        [action.payload]: {
          items: newObjItems,
          totalPrice: getTotalPriceNewItem(newObjItems),
        },
      };

      return {
        ...state,
        items: newItems,
        totalCount: getTotalCount(newItems),
        totalPrice: getTotalPrice(newItems),
      };
    }
    case actionTypes.CLEAR_BASKET: {
      return {
        items: {},
        totalCount: 0,
        totalPrice: 0,
      };
    }
    default:
      return state;
  }
};

export default basketReducer;
