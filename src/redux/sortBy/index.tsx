import * as actionTypes from './actionType';
import { ISortBy, ISortTypePayloadType } from './type';

const initialState = {
  sortByType: '',
  order: '',
  name: '',
} as ISortBy;

const SortByReducer = (
  state: ISortBy = initialState,
  action: ISortTypePayloadType<ISortBy>,
): ISortBy => {
  switch (action.type) {
    case actionTypes.SET_SORT_BY: {
      let newState = { ...state };
      newState.name = action.payload.name;
      newState.sortByType = action.payload.sortByType;
      newState.order = action.payload.order;
      return newState;
    }

    default:
      return state;
  }
};

export default SortByReducer;
