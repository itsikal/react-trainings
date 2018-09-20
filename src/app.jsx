import React from "react";
import ReactDom from "react-dom";
import PropTypes from "prop-types";
import { rootId } from "../template.config";
import goods from "./mock/goods.json";
import { Page1 } from "./pages/page1";

console.log(rootId)

const App = (props) => (
    <div className='App'>
        <h1>Super Shop</h1>
        <div className="container">
            <Page1 goods={ props.goods } />
        </div>
    </div>
);

App.propTypes = {
    goods: PropTypes.any,
}

ReactDom.render(
    <App goods={ goods }/>,
    document.getElementById(`${rootId}`),
)