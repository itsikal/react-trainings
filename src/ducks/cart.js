export const CART_ADD = 'CART_ADD';

// Actions
export function addToCart(id) {
    return {
        type: CART_ADD,
        id,
    };
}

function addItemToCartById(cart, id) {
    let exist = false;
    const newCart = cart.map((item) => {
        if (item.id == id) {
            exist = true;
            return {
                id,
                count: item.count + 1
            };
        }
        return item;
    });
    if (!exist) {
        newCart.push({
            id,
            count: 1,
        });
    }
    return newCart;
}

// Reducer
export default function reducer(state = [], action = {}) {
    if (action.error) {
        return state;
    }

    switch (action.type) {
        case CART_ADD:
            return addItemToCartById(state, action.id);
        default: return state;
    }
}