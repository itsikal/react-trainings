import React from "react";
import ReactDom from "react-dom";
import { Provider } from 'react-redux';
import { rootId } from "../template.config";
import Main from "./pages/Main";
import createStore from "./store";

const store = createStore();

ReactDom.render(
    <Provider store={store}>
        <Main />
    </Provider>,
    document.getElementById(`${rootId}`),
)