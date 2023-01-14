import React from 'react';

import ProductItem from './ProductItem';
import classes from './Products.module.css';
import DUMMY_PRODUCTS from '../../data/dummy_products';

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
        ;
      </ul>
    </section>
  );
};

export default Products;
