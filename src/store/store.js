import { createStore, combineReducers } from 'redux';
import goodsReducer from '../ducks/goods';
import defaultState from './defaultState';

const getInitialStore = () => ({ ...defaultState });

const rootReducer = combineReducers({
    goods: goodsReducer
});

export default () => {
    return createStore(rootReducer, getInitialStore());
}
