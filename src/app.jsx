import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import { rootId } from "../template.config";
import Main from "./pages/Main";
import createStore from "./store";

const store = createStore();

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Main />
        </Router>
    </Provider>
    , document.getElementById(`${rootId}`),
)