import React, { Fragment } from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose, setDisplayName } from "recompose";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Home from "./Home";
import Final from "./Final";
import { fetchGoods } from "../ducks/goods";
import { addToCart } from "../ducks/cart";

const Main = ({ goods, cart, fetchGoods, addToCart }) => (
    <Fragment>
        <Header />
        <div className='App'>
            <div className="container">
                <button onClick={() => fetchGoods()}>Fetch Goods</button>
                <Switch>
                    <Route exact
                        path='/'
                        render={(props) => <Home {...props} goods={goods} addToCart={addToCart} />}
                    />
                    <Route
                        path='/cart'
                        render={(props) => <Final {...props} goods={goods} cart={cart} />}
                    />
                </Switch>
            </div>
        </div>
    </Fragment>
);

Main.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.object),
    fetchGoods: PropTypes.func,
    cart: PropTypes.arrayOf(PropTypes.object),
    addToCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
    goods: state.goods,
    cart: state.cart,
});

const mapDispatchToProps = (dispatch) => ({
    fetchGoods: () => dispatch(fetchGoods()),
    addToCart: (id) => dispatch(addToCart(id)),
});

const enhance = compose(
    setDisplayName("Main"),
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)

export default enhance(Main);
