// // components/SearchCard.js
// import { BlogCard } from "../blog/blogCard";

// export const SearchForm = ({ articleName, articles, navigate }) => {
//   const filteredArticles = articles.filter(
//     (article) =>
//       article.title.toLowerCase().includes(articleName.toLowerCase())
//   );

//   return (
//     <div className="row">
//       {filteredArticles.map((article) => (
//         <div className="col-md-4 mb-4" key={article.id}>
//           <BlogCard article={article} navigate={navigate} />
//         </div>
//       ))}
//     </div>
//   );
// };


import { useState } from "react";

interface SearchInputProps<T> {
  data: T[];
  searchKey: keyof T; // Key of the object to search by
  placeholder?: string; // Customizable placeholder text
  onResultSelect?: (result: T) => void; // Callback when a result is clicked
}

const SearchInput = <T,>({
  data,
  searchKey,
  placeholder = "Search...",
  onResultSelect,
}: SearchInputProps<T>) => {
  const [query, setQuery] = useState<string>("");
  const [filteredResults, setFilteredResults] = useState<T[]>(data);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilteredResults(data);
      return;
    }

    // Filter data based on the query
    const results = data.filter((item) =>
      String(item[searchKey])
        .toLowerCase()
        .includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleSelect = (result: T) => {
    if (onResultSelect) {
      onResultSelect(result);
    }
    setQuery("");
    setFilteredResults(data); // Reset results after selection
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {query && (
        <div className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {filteredResults.length > 0 ? (
            filteredResults.map((item, index) => (
              <div
                key={index}
                onClick={() => handleSelect(item)}
                className="px-4 py-2 cursor-pointer hover:bg-blue-100"
              >
                {String(item[searchKey])}
              </div>
            ))
          ) : (
            <div className="px-4 py-2 text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
