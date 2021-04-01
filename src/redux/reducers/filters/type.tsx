export interface IFilters {
  // sortBy: {
  //   type: string;
  //   order: string;
  // };
  brand: number | null;
  gender: number | null;
  season: number | null;
  event: number | null;
  type: number | null;
}

export interface IFiltersPayloadType<T> {
  type: string;
  payload: T;
}
