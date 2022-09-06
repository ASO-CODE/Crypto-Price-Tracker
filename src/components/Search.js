import React from "react";
import "./Search.css";

const Search = ({ handleChange }) => {
  return (
    <div className="coin-search">
      <h1 className="coin-text">Search a currency</h1>
      <form action="">
        <input
          type="text"
          name="text"
          id=""
          placeholder="Search"
          className="coin-input"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
