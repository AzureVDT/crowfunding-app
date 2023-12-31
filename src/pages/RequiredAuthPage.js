import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const RequiredAuthPage = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (!user || !user?.email) {
            navigate("/login");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user]);
    if (!user || !user.email) return null;
    return <>{children}</>;
};
RequiredAuthPage.propTypes = {
    children: PropTypes.node,
};

export default RequiredAuthPage;
