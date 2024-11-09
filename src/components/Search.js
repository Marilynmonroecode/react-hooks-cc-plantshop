import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search plants..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-3 border rounded-lg"
      />
    </div>
  );
};

export default Search;