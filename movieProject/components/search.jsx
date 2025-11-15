import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center px-4 py-2 rounded-xl bg-gray-800 gap-3">
      <img src="./search.svg" alt="s" />
      <input 
      className="text-white w-3xl "
        type="text"
        placeholder="Thousands of movies on the click"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Search;
