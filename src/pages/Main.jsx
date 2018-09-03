import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import Home from "./Home";
import Final from "./Final";

class Main extends Component {

    static propTypes = {
        goods: PropTypes.arrayOf(PropTypes.object)
    }

    static defaultProps = {
        goods: []
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
        const { goods } = this.props;
        const { cart } = this.state;

        return (
            <div className="container">
                <Fragment>
                    <Home goods={goods} addToCart={this.addToCart} />
                    <Final goods={goods} cart={cart} />
                </Fragment>
            </div>
        )
    }
}

export default Main;
