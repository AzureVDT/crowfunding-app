import React from "react";
import PropTypes from "prop-types";
const CampaignGrid = ({ children }) => {
    return <div className="grid grid-cols-4 gap-x-7">{children}</div>;
};
CampaignGrid.propTypes = {
    children: PropTypes.node,
};

export default CampaignGrid;
