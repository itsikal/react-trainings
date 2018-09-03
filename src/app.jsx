import React, {Fragment } from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { rootId } from "../template.config";
import goods from "./mock/goods.json";
import Main from "./pages/Main";

const App = (props) => (
    <Fragment>
        <header>
            <h1>Super Shop</h1>
        </header>
        <div className='App'>
            <Main goods={ props.goods } />
        </div>
    </Fragment>
);

App.propTypes = {
    goods: PropTypes.arrayOf(PropTypes.object),
}

ReactDom.render(
    <App goods={ goods }/>,
    document.getElementById(`${rootId}`),
)