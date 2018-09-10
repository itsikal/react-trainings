import { createStore, combineReducers } from 'redux';
import defaultState from './defaultState';
import goodsReducer from '../ducks/goods';
import cartReducer from '../ducks/cart';

const getInitialStore = () => ({ ...defaultState });

const rootReducer = combineReducers({
    goods: goodsReducer,
    cart: cartReducer,
});

export default () => {
    return createStore(rootReducer, getInitialStore());
}
