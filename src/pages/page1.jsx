import React from 'react';
import PropTypes from "prop-types";

const Page = (props) => (
    <div>
        <h2>Page 1</h2>
        <div className="page-container">
            <ul>{
                props.goods.map((good, i) => (
                    <li key={i}>
                        <div className="good-item">
                            <div className="good-name">{ good.name }</div>
                            <div className="good-desc">{ good.description }</div>
                            <div className="good-price">{ good.price } $</div>
                        </div>
                    </li>
                ))
            }</ul>
        </div>
    </div>
);

Page.propTypes = {
    goods: PropTypes.any,
}

export const Page1 = Page;