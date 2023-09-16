import React from "react";
import PropTypes from "prop-types";
import classNames from "utils/classNames";
const CampMeta = ({ amount = "", text = "", size = "small" }) => {
    return (
        <div className="flex flex-col gap-y-1">
            <h4
                className={classNames(
                    "font-semibold text-text2",
                    size === "small" ? "text-sm" : "text-xl"
                )}
            >
                {amount}
            </h4>
            <span
                className={classNames(
                    "text-xs text-text4",
                    size === "small" ? "text-xs" : "text-base"
                )}
            >
                {text}
            </span>
        </div>
    );
};
CampMeta.propTypes = {
    amount: PropTypes.string,
    text: PropTypes.string,
};

export default CampMeta;
