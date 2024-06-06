
const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input 
        type="text" 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Search To-dos" 
      />
    </div>
  );
};

export default SearchBar;
