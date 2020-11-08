import React, { useState } from 'react';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  const sortBySize = (size) => {
    const filteredProducts = !!size
      ? data.products.filter(
          (product) => product.availableSizes.indexOf(size) >= 0
        )
      : data.products;
    setSize(size);
    setProducts(filteredProducts);
  };

  const sortProducts = (value) => {
    const sortedProducts = products
      .slice()
      .sort((a, b) =>
        value === 'lowest'
          ? a.price > b.price
            ? 1
            : -1
          : value === 'highest'
          ? a.price < b.price
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      );
    setSort(value);
    setProducts(sortedProducts);
  };

  return (
    <div className='grid-container'>
      <header>
        <a href='/'>React Shopping Cart</a>
      </header>
      <main>
        <div className='content'>
          <div className='main'>
            <Filter
              count={products.length}
              size={size}
              sort={sort}
              sortBySize={sortBySize}
              sortProducts={sortProducts}
            />
            <Products products={products} />
          </div>
          <div className='sidebar'>Cart Items</div>
        </div>
      </main>
      <footer>All rights Reserved</footer>
    </div>
  );
}

export default App;
