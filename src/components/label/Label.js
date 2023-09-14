import React from "react";
import PropTypes from "prop-types";
const Label = ({ children, htmlFor = "", className = "" }) => {
    return (
        <label
            className={`inline-block text-sm font-medium cursor-pointer dark:text-text3 text-text2 ${className}`}
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};
Label.propTypes = {
    children: PropTypes.node,
    htmlFor: PropTypes.string,
    className: PropTypes.string,
};

export default Label;
