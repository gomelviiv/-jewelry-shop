import * as actionTypes from './actionType';
import { ISortBy } from './type';

export const SetSortBy = (payload: ISortBy) => ({
  type: actionTypes.SET_SORT_BY,
  payload,
});
