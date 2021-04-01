export interface IJewelryField {
  value: number;
  text: string;
}
export interface IJewelryItem {
  id: number;
  name: string;
  img: string;
  brand: IJewelryField;
  price: number;
  gender: IJewelryField;
  season: IJewelryField;
  types: IJewelryField;
  event: IJewelryField;
}

export interface IJewelry {
  items: Array<IJewelryItem>;
  isLoaded: boolean;
}

export interface IJewelryPayloadType<T> {
  type: string;
  payload: T;
}
