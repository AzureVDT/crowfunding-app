import React from "react";
import PropTypes from "prop-types";
const FormRow = ({ children }) => {
    return <div className="grid grid-cols-2 gap-x-[45px] mb-5">{children}</div>;
};

FormRow.propTypes = {
    children: PropTypes.node,
};

export default FormRow;
