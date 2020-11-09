import React, { useState } from 'react';
import Cart from './components/Cart';
import Filter from './components/Filter';
import Products from './components/Products';
import data from './data.json';

function App() {
  const [products, setProducts] = useState(data.products);
  const [cartItems, setCartItems] = useState([]);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');

  const addToCart = (product) => {
    const items = cartItems.slice();
    let alreadyInCart = false;
    items.forEach((item) => {
      if (item._id === product._id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      items.push({ ...product, count: 1 });
    }
    setCartItems(items);
  };

  const removeFromCart = (product) => {
    const items = cartItems.slice();
    const newItems = items.filter((item) => item._id !== product._id);
    setCartItems(newItems);
  };

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
            <Products products={products} addToCart={addToCart} />
          </div>
          <div className='sidebar'>
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </main>
      <footer>All rights Reserved</footer>
    </div>
  );
}

export default App;
