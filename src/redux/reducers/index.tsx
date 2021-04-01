import { combineReducers } from 'redux';
import filtersReducer from './filters';
import jewelryReducer from './jewelry';

const rootReducer = combineReducers({
  filters: filtersReducer,
  jewelry: jewelryReducer,
});

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export default rootReducer;
