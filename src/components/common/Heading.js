import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
const Heading = ({ children, className = "", number = null }) => {
    return (
        <h2 className={classNames("text-lg font-semibold mb-5", className)}>
            {children}
            {number && <span className="text-secondary">{`(${number})`}</span>}
        </h2>
    );
};
Heading.propTypes = {
    children: PropTypes.node,
    number: PropTypes.number,
    className: PropTypes.string,
};

export default Heading;
