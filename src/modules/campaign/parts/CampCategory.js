import { IconFolder } from "components/icons";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
const CampCategory = ({ text, className = "text-xs" }) => {
    return (
        <Link
            to={"/"}
            className={classNames(
                "flex items-center mb-4 font-medium gap-x-3 text-text3",
                className
            )}
        >
            <IconFolder></IconFolder>
            <span>{text}</span>
        </Link>
    );
};
CampCategory.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
};

export default CampCategory;
