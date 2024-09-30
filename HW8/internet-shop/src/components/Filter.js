import React from 'react';

const Filter = ({ onFilterChange }) => {
  return (
    <div>
      <button onClick={() => onFilterChange('S')}>S</button>
      <button onClick={() => onFilterChange('M')}>M</button>
      <button onClick={() => onFilterChange('L')}>L</button>
      <button onClick={() => onFilterChange('')}>All</button>
    </div>
  );
};

export default Filter;
