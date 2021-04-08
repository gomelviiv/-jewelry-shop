import { combineReducers } from 'redux';
import filtersReducer from './filters';
import jewelryReducer from './jewelry';
import SortByReducer from './sortBy';
import basketReducer from './basket';

const rootReducer = combineReducers({
  filters: filtersReducer,
  jewelry: jewelryReducer,
  sortBy: SortByReducer,
  basket: basketReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
