import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
      <input
        type="text"
        placeholder=" Q   Search expenses by description"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '890px', /* Matches the exact width of your form card */
          padding: '12px 16px',
          border: '1px solid #d1d5db',
          borderRadius: '20px',
          fontSize: '16px',
          outline: 'none',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff'
        }}
      />
    </div>
  );
}

export default SearchBar;