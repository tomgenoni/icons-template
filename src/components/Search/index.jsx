import React from "react";

function Search({ query, handleQuery }) {
    return <input type="text" value={query} onChange={handleQuery} />;
}

export default Search;
