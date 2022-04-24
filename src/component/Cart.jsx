import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export default function Cart() {
  const cart = useSelector((state)=> state.handleCart)
  // changes 1 line
  const [setQty]=useState(1)

  useEffect(() => {
    console.log("the card details from cart", cart)
  }, [cart])

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart === undefined || cart.length === 0 ? (
        <div className="cart-empty">
          <p>Your Cart is Currently Empty</p>
          <div className="start-shopping">
            <NavLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
              <span>Start Shopping</span>
            </NavLink>
          </div>
        </div>
      ) : (
      <div>
        <div className="titles">
          <h3 className="product-title">Products</h3>
          <h3 className="price">Price</h3>
          <h3 className="quantity">Quantity</h3>
          <h3 className="total">Total</h3>
        </div>

        <div className="cart-items">
          {cart?.map(cart =>
            <div className="cart-item" key={cart.id}>
              <div className="cart-product">
                <img src={cart.image} alt={cart.name} />
                <div>
                  <h3>{cart.name}</h3>
                  <p>{cart.description}</p>
                  <button className="btn btn-outline-dark me-4">Remove</button>
                </div>
                <div className="cart-product-price">
                  ${cart.price}
                </div>

                <div className="cart-product-quantity">
                  <button>-</button>
                  {/* changes */}
                  <div className="count">{cart.qty}</div>
                  <button className='btn btn-outline-dark me-4' onClick={() => 
                  setQty(cart.qty+1)
                }>+</button>
                </div>

                </div>

                <div className="cart-product-total-price">${cart.price * cart.qty}</div>
            </div>
            )}
        </div>
        <div className="cart-summary">
          <button className="btn btn-outline-dark me-4 clear-cart">
            Clear Cart
          </button>


          <div className="subtotal">
            <span>Subtotal</span>
            <span className='amount'>${cart.cartTotalAmount}</span>
          </div>
          <p>Taxes and shipping calculated at checkout</p>
          <button className="btn btn-outline-dark me-4">Check out</button>
          <div className="continue-shopping">
            <NavLink to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
              </svg>
              <span>Continue Shopping</span>
            </NavLink>
          </div>
        </div>
      </div>
      )}


    </div>
  );
}
