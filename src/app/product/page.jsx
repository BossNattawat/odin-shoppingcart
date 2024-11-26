"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from 'next/image'

function product() {

    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [alert, setAlert] = useState(false)
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products?limit=12")
        .then((res) => {
            setProducts(res.data)
            setLoaded(true)
        })
        .catch((error) => {
            console.log(error)
            setLoaded(false)
        })
    }, [])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

    const addToCart = (item) => {
        setAlert(true)
        setCart((prevCart) => {
          const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
          if (existingItem) {
            return prevCart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            );
          }
          return [...prevCart, { ...item, quantity: 1 }];
        });
      };

      if(alert === true){
        setTimeout(() => {
            setAlert(false)
        }, 2500)
      }

  return (
    <div className='m-7 flex flex-col justify-center items-center'>
        {alert === true ? (
            <div className="bg-green-400 p-3 rounded-md text-white fixed bottom-[5vh]" style={{display: "flex"}}>
                <h1 className='text-2xl font-bold'>Added to cart</h1>
            </div>
        ) : null}
        <header className='flex my-10'>
            <h1 className='text-4xl font-semibold'>Products</h1>
        </header>
        {loaded === false ? (
            <div className="w-full h-full flex justify-center items-center">
                <h1 className='text-3xl font-semibold'>Loading...</h1>
            </div>
        ) : (
            <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-9">
                {products.map((item, index) => (
                    <div className="border-2 w-[300px] p-7 h-[550px] flex flex-col items-center justify-around shadow-lg" key={index}>
                        <div className="w-full h-full flex items-center justify-center">
                            <Image className='h-auto w-[180px]' priority src={item.image} width={170} height={170} alt={item.title}/>
                        </div>
                        <div className="flex flex-col w-full">
                            <p className='text-lg my-4'>{item.title}</p>
                            <div className="flex justify-between items-center">
                                <p className='text-xl'>$ {item.price}</p>
                                <button onClick={() => addToCart(item)} className='btn text-center text-sm text-white font-semibold rounded-md duration-150'>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )}
        
    </div>
  )
}

export default product