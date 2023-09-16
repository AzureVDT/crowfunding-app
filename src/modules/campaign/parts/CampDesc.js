import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
const CampDesc = ({ children, className = "mb-4 text-sm" }) => {
    return (
        <p className={classNames("font-normal text-text3", className)}>
            {children}
        </p>
    );
};
CampDesc.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default CampDesc;
