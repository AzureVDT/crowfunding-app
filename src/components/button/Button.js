import React from "react";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

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
            className={classNames(
                "min-h-[56px] text-white flex items-center justify-center p-4 text-base font-semibold rounded-xl",
                !!isLoading ? "opacity-50 pointer-events-none" : "",
                className
            )}
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

export default withErrorBoundary(Button, { FallbackComponent: ErrorComponent });
