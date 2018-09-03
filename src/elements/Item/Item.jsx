import React from "react";
import PropTypes from "prop-types";
import { GoodItemType } from "../../types";
import "./Item.scss";

const Item = ({ id, name, description, price, children }) => (
    <div className="item" key={id}>
        <div className="name">{name}</div>
        <div className="desc">{description}</div>
        <div className="price">{price} $</div>
        {children}
    </div>
)

Item.propTypes = {
    ...GoodItemType,
    children: PropTypes.func,
}

export default Item;