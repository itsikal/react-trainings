import React from 'react';
import PropTypes from "prop-types";
import { Goods } from "../types";
import Cart from "../elements/Cart";

const Home = ({ goods, cart }) => (
    <div>
        <h2>Cart</h2>
        <div className="page-container">
            <Cart goods={goods} cart={cart} />
        </div>
    </div>
);

Home.propTypes = {
    ...Goods,
    cart: PropTypes.object
}

export default Home;