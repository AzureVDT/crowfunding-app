import React from "react";
import PropTypes from "prop-types";
import DashboardTopBar from "modules/dashboard/DashboardTopBar";
import DashboardSideBar from "modules/dashboard/DashboardSideBar";
const LayoutDashboard = ({ children }) => {
    return (
        <div className="min-h-screen p-10 bg-lite">
            <DashboardTopBar></DashboardTopBar>
            <div className="flex items-start gap-x-10">
                <DashboardSideBar></DashboardSideBar>
                <div>{children}</div>
            </div>
        </div>
    );
};
LayoutDashboard.propTypes = {
    children: PropTypes.node,
};

export default LayoutDashboard;
