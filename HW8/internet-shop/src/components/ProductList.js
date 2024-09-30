import React, { useState } from 'react';
import Product from './Product';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, title: 'T-shirt', size: 'S', price: 30 },
  { id: 2, title: 'Hoodie', size: 'L', price: 50 },
  { id: 3, title: 'Jeans', size: 'M', price: 70 },
];

const ProductList = () => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (size) => {
    setFilter(size);
  };

  const filteredProducts = filter
    ? products.filter((product) => product.size === filter)
    : products;

  return (
    <div>
      <h1>Product Catalog</h1>
      <Filter onFilterChange={handleFilterChange} />
      <div>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {/* Кнопка перехода в корзину */}
      <Link to="/cart">
        <button>Go to Cart</button>
      </Link>
    </div>
  );
};

export default ProductList;
