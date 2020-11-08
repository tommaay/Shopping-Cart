import React from 'react';
import formatCurrency from '../util';

export default function Products({ products }) {
  return (
    <div>
      <ul className='products'>
        {products.map((product) => (
          <li key={product._id}>
            <div className='product'>
              <a href={'#' + product._id}>
                <img src={product.image} alt={product.title} />
                <p>{product.title}</p>
              </a>
            </div>

            <div className='product-price'>
              <div>{formatCurrency(product.price)}</div>
              <button className='button primary'>Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
