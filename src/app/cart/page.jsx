"use client"

import React, { useState } from 'react'
import Link from 'next/link';

function cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const getTotalPrice = () =>
      cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  
    const handleRemove = (id) => {
      const updatedCart = cart.filter((item) => item.id !== id);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
  
    return (
      <div className="m-7 flex flex-col justify-center items-center">
        <header className="flex justify-between w-full my-10">
          <h1 className="text-4xl font-semibold">Shopping Cart</h1>
          <Link className='btn text-center text-sm text-white font-semibold rounded-md duration-150' href="/product">Back to Products</Link>
        </header>
        <div className="w-full">
          {cart.length > 0 ? (
            <div>
              {cart.map((item) => (
                <div className="border-b flex justify-between items-center py-4" key={item.id}>
                  <p className="text-lg w-[400px]">{item.title}</p>
                  <p className="text-lg">Quantity: {item.quantity}</p>
                  <p className="text-lg">$ {item.price}</p>
                  <button className="btn text-center text-sm bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md duration-200" onClick={() => handleRemove(item.id)}>Remove</button>
                </div>
              ))}
              <div className="flex justify-end py-4">
                <h2 className="text-2xl font-bold">Total: $ {getTotalPrice()}</h2>
              </div>
            </div>
          ) : (
            <p className="text-2xl">Your cart is empty.</p>
          )}
        </div>
      </div>
    );
  }

export default cart