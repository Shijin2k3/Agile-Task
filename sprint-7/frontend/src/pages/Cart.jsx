import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {  FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import axios from 'axios'

const Cart = () => {
  const [cart, setCart] = useState([]);
  const totalAmount = cart.reduce((sum, item) => sum + (item.totalPrice || 0), 0);

  const fetchCartProducts = async () => {
    await axios.get('http://localhost:3000/cart')
      .then((response) => setCart(response.data))
      .catch(error => console.log(error))
  }
  const  dleteCartItem= async(id)=>{
    await axios.delete(`http://localhost:3000/cart/${id}`)
    .then(()=>(setCart(cart.filter(item => item.id !== id))))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    fetchCartProducts();
  }, [])

  
  const handleQuantity = async (item, q) => {
    const newQuantity = (item.quantity || 1) + q;
    if (newQuantity < 1) return; 
    await axios.patch(`http://localhost:3000/cart/${item.id}`, {
      quantity: newQuantity,
      totalPrice: q=== -1 ? item.totalPrice - item.netPrice : item.totalPrice + item.netPrice,
    });
    fetchCartProducts();
  }

  return (
  <div className='flex flex-col'>
   <div className="px-2 flex flex-col  overflow-y-auto h-[350px] p-4">
    {cart.length === 0 ? (
      <div className="flex flex-col items-center  p-10 ">
        <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
        <Link to="/" className="text-blue-600 text-xl">Go to Products</Link>
      </div>
    ) : (
      cart.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row items-center shadow-lg p-4 gap-8 lg:gap-15 bg-white rounded-lg"
        >
          <img
            src={item.image}
            alt={item.name}
            className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain"
          />
          <div className="flex flex-col gap-2 my-2 w-full md:w-[350px]">
            <p className="font-bold text-center md:text-left text-base md:text-lg">{item.name}</p>
            <p className="text-gray-500 text-xs hidden md:block">{item.smallDescription}</p>
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => handleQuantity(item, -1)}
                className="p-1 bg-gray-200 rounded cursor-pointer"
              >
                <FaMinus />
              </button>
              <span className="text-xs">quantity: {item.quantity}</span>
              <button
                onClick={() => handleQuantity(item, 1)}
                className="p-1 bg-gray-200 rounded cursor-pointer"
              >
                <FaPlus />
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col items-center gap-4 md:gap-10 flex-shrink-0">
            <p className="font-semibold text-md">Price : $ {item.netPrice.toFixed(2)}</p>
            <FaTrash className="text-red-600 text-2xl cursor-pointer" onClick={()=>dleteCartItem(item.id) } />
          </div>
          <div className="flex flex-col  items-center lg:items-end gap-3 py-2 w-full md:w-auto">
            <p className="font-bold text-center text-sm md:text-base">
              Subtotal $ {item.totalPrice.toFixed(2)}
            </p>
            <button className="bg-blue-600 text-xs md:text-sm text-white p-2 w-full md:w-[200px] rounded-md cursor-pointer">
              Place Order
            </button>
          </div>
        </div>
      ))
    )}
  </div>
  <div className='w-full bg-white h-[100px] mt-10 p-2 flex flex-col items-center justify-center'>
    <div className="text-lg font-bold">
      Total Amount: ${totalAmount.toFixed(2)}
    </div>

  </div>

</div>
  )
}

export default Cart