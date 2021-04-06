import { combineReducers } from 'redux';
import filtersReducer from './filters';
import jewelryReducer from './jewelry';
import SortByReducer from './sortBy';

const rootReducer = combineReducers({
  filters: filtersReducer,
  jewelry: jewelryReducer,
  sortBy: SortByReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
