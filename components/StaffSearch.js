// components/StaffSearch.js
'use client';
import { useState } from 'react';

export default function StaffSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = (value) => {
    setQuery(value);
    if (typeof onSearch === 'function') {
      onSearch(value);
    }
  };

  return (
    <div className="mb-8 text-black">
      <input
        type="text"
        placeholder="Search staff by name, code, or venue..."
        className="w-full p-4 border rounded-lg"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}