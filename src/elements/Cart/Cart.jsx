import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Goods } from "../../types";
import Item from "../Item";
import "./Cart.scss";

const Cart = ({ goods, cart }) => {
    const getTotal = () => {
        return goods.reduce((total, good) => (good.id in cart) ? total + (cart[good.id] * good.price) : total, 0);
    }

    return <div className="cart">
        <Fragment>
            {
                Object.keys(cart).map((id) => {
                    const good = {
                        ...goods.filter((good) => good.id == id)[0],
                        count: cart[id],
                    }
                    return <Item {...(good)} key={good.id}>
                        <div className="count">Count: {good.count}</div>
                    </Item>
                })
            }
            {Object.keys(cart).length > 0 &&
                <div className="total">Total: {getTotal()}</div>
            }
        </Fragment>
    </div>
}

Cart.propTypes = {
    ...Goods,
    cart: PropTypes.object
}

export default Cart;
