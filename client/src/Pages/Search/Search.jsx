import React, { useState } from 'react';

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All'); // Default category
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = () => {
   
//fetch data from an API or use a local data source

    // For demo purposes
    const dummySearchResults = [
      { id: 1, name: 'Product 1', category: 'Electronics' },
      { id: 2, name: 'Product 2', category: 'Clothing' },
      // Add more items as needed
    ];

    setSearchResults(dummySearchResults);
  };

  return (
    <div className="container mx-auto p-4 h-full">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
        />

        <div className="mt-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="All">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            {/* Add more categories as needed */}
          </select>
        </div>

        <button
          onClick={handleSearch}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {searchResults.map((product) => (
          <div key={product.id} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
