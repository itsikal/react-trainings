import React from "react";
import PropTypes from "prop-types";
import { ChildrenType } from "../../types";
import "./Button.scss";

const Button = ({ children, onClick }) => (
    <div
        className="button"
        onClick={onClick}
    > {children}</div>
)

Button.propTypes = {
    onClick: PropTypes.func,
    ...ChildrenType
}

export default Button;
