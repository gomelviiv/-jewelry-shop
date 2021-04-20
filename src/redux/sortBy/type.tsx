export interface ISortBy {
  sortByType: string;
  order: string;
  name: string;
}

export interface ISortTypePayloadType<T> {
  type: string;
  payload: T;
}
