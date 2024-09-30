// EditProduct.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from './productsSlice';

const EditProduct = ({ productId }) => {
  const product = useSelector((state) => 
    state.products.products.find((p) => p.id === productId)
  );
  const dispatch = useDispatch();

  const [name, setName] = useState(product?.name || '');
  const [description, setDescription] = useState(product?.description || '');
  const [price, setPrice] = useState(product?.price || '');
  const [available, setAvailable] = useState(product?.available || true);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct({
      id: productId,
      name,
      description,
      price: parseFloat(price),
      available,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Product Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Available:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">Save Changes</button>
    </form>
  );
};

export default EditProduct;
