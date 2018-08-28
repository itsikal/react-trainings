import React from "react";
import ReactDom from "react-dom";
import { rootId } from "../template.config";

const App = () => (
    <div className='App'>
        <h1>React Lesson 1</h1>
    </div>
);

ReactDom.render(
    <App />,
    document.getElementById(`${rootId}`),
)