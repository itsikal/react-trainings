import React from 'react';
import PropTypes from "prop-types";
import { Goods } from "../types";
import Button from "../elements/Button";
import Item from "../elements/Item";

const Home = ({ goods, addToCart }) => (
    <div>
        <h2>Item list</h2>
        <div className="page-container">{
            goods.map((good) => (
                <Item {...(good)} key={good.id}>
                    <Button onClick={() => addToCart(good.id)}>Buy</Button>
                </Item>
            ))
        }</div>
    </div>
);

Home.propTypes = {
    ...Goods,
    addToCart: PropTypes.func
}

export default Home;