import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Goods } from "../../types";
import Item from "../Item";
import "./Cart.scss";

const Cart = ({ goods, cart }) => {
    return <div className="cart">
        <Fragment>
            <h2>Cart</h2>
            {
                cart.map(({ id, count }) => {
                    const good = {
                        ...goods.filter((good) => good.id == id)[0],
                        count,
                    }
                    return <Item {...(good)} key={good.id}>
                        <div className="count">Count: {good.count}</div>
                    </Item>
                })
            }
        </Fragment>
    </div>
}

Cart.propTypes = {
    ...Goods,
    cart: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        count: PropTypes.number,
    })),
}

export default Cart;
