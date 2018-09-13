import goods from "../mock/goods.json";

export const GOODS_FETCH = 'GOODS_FETCH';

// Action
export const fetchGoods = () => {
    return {
        type: GOODS_FETCH,
        goods: [...goods],
    };
}

// Reducer
export default function reducer(state = [], action = {}) {
    if (action.error) {
        return state;
    }

    switch (action.type) {
        case GOODS_FETCH:
            return action.goods;
        default: return state;
    }
}
