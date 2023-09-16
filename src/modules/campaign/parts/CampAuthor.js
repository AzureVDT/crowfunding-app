import { defaultImage } from "constants/global";
import React from "react";
import PropTypes from "prop-types";
const CampAuthor = ({ image = defaultImage, author = "" }) => {
    return (
        <div className="flex items-center gap-x-3">
            <img
                src={image}
                alt=""
                className="object-cover w-8 h-8 rounded-full"
            />
            <p className="text-xs text-text3">
                by <span className="font-semibold text-text2">{author}</span>
            </p>
        </div>
    );
};
CampAuthor.propTypes = {
    image: PropTypes.string,
    author: PropTypes.string,
};

export default CampAuthor;
