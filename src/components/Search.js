import React from "react";

function Search({onSearchChange, search}) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={onSearchChange} value={search} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
