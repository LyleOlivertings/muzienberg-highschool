// components/StaffSearch.js
'use client';
import { useState } from 'react';

export default function StaffSearch({ onSearch }) {
  const [query, setQuery] = useState('');

  return (
    <div className="mb-8 text-black">
      <input
        type="text"
        placeholder="Search staff by name, code, or venue..."
        className="w-full p-4 border rounded-lg"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
      />
    </div>
  );
}