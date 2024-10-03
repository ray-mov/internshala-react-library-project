import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/books/search/${search}`);
  };

  return (
    <div className="max-w-[60%] mx-auto">
      <form className="space-x-6 text-center" onSubmit={handleSearch}>
        <input
          type="text"
          className="border-2 outline-none py-1 px-2 rounded-lg lg:w-96 text-2xl shadow-md"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          type="submit"
          className="px-3 py-1 text-white bg-black text-xl font-medium font-mono rounded-3xl shadow-lg"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
