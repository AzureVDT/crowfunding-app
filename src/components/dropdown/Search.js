import React from "react";
import { useDropdown } from "./dropdown-context";
import PropTypes from "prop-types";
const Search = ({ placeholder, ...props }) => {
    const { onChange } = useDropdown();
    return (
        <div className="sticky top-0 z-10 p-2 bg-white">
            <input
                type="text"
                placeholder={placeholder}
                className="w-full p-4 border border-gray-200 rounded outline-none"
                onChange={onChange}
                {...props}
            />
        </div>
    );
};
Search.propTypes = {
    placeholder: PropTypes.string,
};

export default Search;
