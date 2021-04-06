import * as actionTypes from './actionTypes';
import { IFilters, IFiltersPayloadType } from './type';

const initialState = {
  gender: null,
  brand: null,
  season: null,
  type: null,
  event: null,
} as IFilters;

const filtersReducer = (
  state: IFilters = initialState,
  action: IFiltersPayloadType<number>,
): IFilters => {
  switch (action.type) {
    case actionTypes.SET_GENDER: {
      let newState = { ...state };
      newState.gender = action.payload;
      return newState;
    }
    case actionTypes.SET_BRAND: {
      let newState = { ...state };
      newState.brand = action.payload;
      return newState;
    }
    case actionTypes.SET_SEASON: {
      let newState = { ...state };
      newState.season = action.payload;
      return newState;
    }
    case actionTypes.SET_TYPE: {
      let newState = { ...state };
      newState.type = action.payload;
      return newState;
    }
    case actionTypes.SET_EVENT: {
      let newState = { ...state };
      newState.event = action.payload;
      return newState;
    }
    default:
      return state;
  }
};

export default filtersReducer;
