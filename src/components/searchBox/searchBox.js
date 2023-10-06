import React, { useState } from "react";
import SearchIcon from "./searchIcon";
import "./index.css";

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <SearchIcon />
      <input
        type="text"
        placeholder="Busca en este sitio web"
        value={searchTerm}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBox;