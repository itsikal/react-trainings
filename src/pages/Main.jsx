import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Home from "./Home";
import Final from "./Final";
import { connect } from "react-redux";
import { fetchGoods } from "../ducks/goods";

class Main extends Component {

    static propTypes = {
        goods: PropTypes.arrayOf(PropTypes.object),
        fetchGoods: PropTypes.func,
    }

    constructor(props) {
        super(props);

        this.state = {
            cart: {},
        }
    }

    addToCart = (id) => () => {
        this.setState(({ cart }) => {
            cart[id] = cart[id] ? cart[id] + 1 : 1
            return {
                cart,
            };
        });
    }
    addPaymenyInfo(info) {
        this.setState(() => ({ info }));
    }

    render() {
        const { goods, fetchGoods } = this.props;
        const { cart } = this.state;

        console.log("goods!!!", this.props);

        return (
            <Fragment>
                <header>
                    <h1>Super Shop</h1>
                </header>
                <div className='App'>
                    <div className="container">
                        <button onClick={() => fetchGoods()}>Fetch Goods</button>
                        <Fragment>
                            <Home goods={goods} addToCart={this.addToCart} />
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchGoods: () => dispatch(fetchGoods()),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
