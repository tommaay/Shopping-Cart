import React from 'react';
import formatCurrency from '../util';

export default function Cart({ cartItems, removeFromCart }) {
  return (
    <div>
      {!cartItems.length ? (
        <div className='cart cart-header'>Cart is empty</div>
      ) : (
        <div>
          <div className='cart'>
            <ul className='cart-items'>
              {cartItems.map((item) => (
                <li key={item._id}>
                  <div>
                    <img src={item.image} alt={item.title}></img>
                  </div>
                  <div>
                    <div>{item.title}</div>
                    <div className='right'>
                      {formatCurrency(item.price)} x {item.count}{' '}
                      <button
                        className='button'
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {cartItems.length && (
            <div>
              <div className='cart'>
                <div className='total'>
                  <div>
                    Total:{' '}
                    {formatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>
                  <button className='button primary'>Proceed</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
