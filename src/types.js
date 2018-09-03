import PropTypes from "prop-types";

export const ChildrenType = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ])
}

export const GoodItemType = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
}

export const Goods = {
    goods: PropTypes.arrayOf(PropTypes.shape(GoodItemType)),
}
