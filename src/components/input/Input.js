import React from "react";
import { useController } from "react-hook-form";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";
const Input = ({
    control,
    name,
    type = "text",
    error = "",
    placeholder = "",
    children,
    ...props
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });
    return (
        <div className="relative">
            <input
                autoComplete="off"
                type={type}
                id={name}
                className={classNames(
                    `w-full px-6 py-4 text-sm font-medium border rounded-xl
                    placeholder:text-text4 dark:placeholder:text-text2 dark:text-white bg-transparent`,
                    error.length > 0
                        ? "border-error text-error"
                        : "border-strock dark:border-darkStrock",
                    children ? "pr-16" : ""
                )}
                {...field}
                placeholder={error.length > 0 ? "" : placeholder}
                {...props}
            />
            {error.length > 0 && (
                <span className="absolute text-sm font-medium pointer-events-none text-error top-2/4 -translate-y-2/4 left-6 error-input">
                    {error}
                </span>
            )}
            {children && (
                <span className="absolute cursor-pointer select-none right-6 top-2/4 -translate-y-2/4">
                    {children}
                </span>
            )}
        </div>
    );
};

Input.propTypes = {
    control: PropTypes.any.isRequired,
    name: PropTypes.string,
    type: PropTypes.string,
    error: PropTypes.string,
    placeholder: PropTypes.string,
    children: PropTypes.node,
};

export default withErrorBoundary(Input, {
    FallbackComponent: ErrorComponent,
});
