import * as actionTypes from './actionType';
import { IJewelry, IJewelryPayloadType } from './type';

const initialState = {
  items: [],
  isLoaded: false,
} as IJewelry;

const jewelryReducer = (
  state: IJewelry = initialState,
  action: IJewelryPayloadType<any>,
): IJewelry => {
  switch (action.type) {
    case actionTypes.SET_JEWELRY: {
      return { ...state, items: action.payload, isLoaded: true };
    }

    case actionTypes.SET_LOADED: {
      let newState = { ...state };
      newState.isLoaded = action.payload;
      return newState;
    }

    default:
      return state;
  }
};

export default jewelryReducer;
