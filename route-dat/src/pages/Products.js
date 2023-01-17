import React from 'react';

import { Link } from 'react-router-dom';

const DUMMY_PRODUCTS = [
  { id: 'p1', title: 'Shoes' },
  { id: 'p2', title: 'Shirt' },
  { id: 'p3', title: 'Bagpipes' },
  { id: 'p4', title: 'Carboard' },
];

const ProductsPage = () => {
  return (
    <>
      <h1>Welcome to the products page</h1>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductsPage;
