import React from 'react';

function Product({ product }) {
  return (
    <div className="bottom_small_plate">
      <div className="bottom_small_plate_image">
        <img src={product.image} alt={product.title} className="bottom_small_plate_image_image" />
        <button className="button_buy">
          <img src="/images/cart.svg" alt="cart" className="header_icon" />
          Add to Cart
        </button>
      </div>
      <div className="bottom_small_plate_text">
        <p className="bottom_small_plate_text_header">{product.title}</p>
        <p className="bottom_small_plate_text_price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Product;
