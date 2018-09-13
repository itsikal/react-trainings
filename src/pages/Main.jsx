import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Home from "./Home";
import Final from "./Final";
import { connect } from "react-redux";
import { fetchGoods } from "../ducks/goods";
import { addToCart } from "../ducks/cart";

class Main extends Component {

    static propTypes = {
        goods: PropTypes.arrayOf(PropTypes.object),
        fetchGoods: PropTypes.func,
        cart: PropTypes.arrayOf(PropTypes.object),
        addToCart: PropTypes.func,
    }

    addPaymenyInfo(info) {
        this.setState(() => ({ info }));
    }

    render() {
        const { goods, cart, fetchGoods, addToCart } = this.props;

        return (
            <Fragment>
                <header>
                    <h1>Super Shop</h1>
                </header>
                <div className='App'>
                    <div className="container">
                        <button onClick={() => fetchGoods()}>Fetch Goods</button>
                        <Fragment>
                            <Home goods={goods} addToCart={addToCart} />
                            <Final goods={goods} cart={cart} />
                        </Fragment>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        goods: state.goods,
        cart: state.cart,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGoods: () => dispatch(fetchGoods()),
        addToCart: (id) => dispatch(addToCart(id)),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
