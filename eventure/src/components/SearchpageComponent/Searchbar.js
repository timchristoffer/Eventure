import React, { useState } from "react";

const Searchbar = ({onSearch}) => {
    
    const handleInputChange = (event) => {
        const query = event.target.value;
        onSearch(query);
    }

    return (
        <div>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </div>
    )
}

export default Searchbar