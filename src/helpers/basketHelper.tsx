import { IJewelryItem } from '../redux/reducers/jewelry/type';

export class BasketHelper {
  static getTotalPriceNewItem = (arr: Array<IJewelryItem>) =>
    arr.reduce((sum: number, current: IJewelryItem) => sum + current.price, 0);

  static getTotalCount = (newItems: any) => {
    return Object.keys(newItems).reduce(
      (sum: number, key: any) => newItems[key].items.length + sum,
      0,
    );
  };

  static getTotalPrice = (newItems: any) => {
    return Object.keys(newItems).reduce(
      (sum: number, key: any) => newItems[key].totalPrice + sum,
      0,
    );
  };
}
