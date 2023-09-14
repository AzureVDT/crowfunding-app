import React from "react";
import PropTypes from "prop-types";
const Button = ({
    type = "button",
    children,
    className = "",
    isLoading = false,
    ...rest
}) => {
    const child = !!isLoading ? (
        <div className="w-10 h-10 border-4 border-white rounded-full border-t-transparent border-b-transparent animate-spin"></div>
    ) : (
        children
    );
    return (
        <button
            className={`min-h-[56px] text-white flex items-center justify-center py-4 w-full text-base font-semibold rounded-xl ${
                !!isLoading ? "opacity-50 pointer-events-none" : ""
            } ${className}`}
            type={type}
            {...rest}
        >
            {child}
        </button>
    );
};
Button.propTypes = {
    type: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    isLoading: PropTypes.bool,
};

export default Button;
