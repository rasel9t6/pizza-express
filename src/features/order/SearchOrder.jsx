import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SearchOrder = () => {
  const [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    Navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 sm:focus:w-72 focus:outline-none focus:ring focus:ring-yellow-500 focus:ring-opacity-50  sm:w-64"
      ></input>
    </form>
  );
};

export default SearchOrder;
