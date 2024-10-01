import React from 'react';
import Product from './Product';

const products = [
  { id: 1, title: 'ELLERY X M\'O CAPSULE', price: 52, image: '/images/bottom_1.svg', size: 'S' },
  { id: 2, title: 'ELLERY X M\'O CAPSULE', price: 52, image: '/images/bottom_2.svg', size: 'M' },
  { id: 3, title: 'ELLERY X M\'O CAPSULE', price: 52, image: '/images/bottom_3.svg', size: 'L' },
  { id: 4, title: 'ELLERY X M\'O CAPSULE', price: 52, image: '/images/bottom_4.svg', size: 'S' },
];

function ProductList() {
  const [filter, setFilter] = React.useState('');

  const filteredProducts = filter
    ? products.filter((product) => product.size === filter)
    : products;

  return (
    <div>
      <div className="filter">
        <button onClick={() => setFilter('S')}>S</button>
        <button onClick={() => setFilter('M')}>M</button>
        <button onClick={() => setFilter('L')}>L</button>
        <button onClick={() => setFilter('')}>All</button>
      </div>
      <div className="bottom">
        {filteredProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
