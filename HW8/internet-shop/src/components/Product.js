import React from 'react';

const Product = ({ product }) => {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>Size: {product.size}</p>
      <p>Price: ${product.price}</p>
      <button>Add to cart</button>
    </div>
  );
};

export default Product;
