import React, { useEffect, useState } from 'react'
import mobile from '../../public/images/acer_swift_3_laptop.jpg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Product = () => {
  const [products,setProducts]=useState([]);
  const navigate =useNavigate();

  const fetchProducts =async () => {
     await axios.get('http://localhost:3000/products')
     .then((response)=>{
        setProducts(response.data)
     })
    .catch(error => console.log(error))
  }

  useEffect(()=>{
    fetchProducts();
  },[])


  return (
     <div className='grid grid-cols-1 min-h-screen md:grid-cols-2 lg:grid-cols-4  gap-6 py-5 items-start' >
      
    
           {products.map((p,i) =>(
             <div key={i} className='w-[180px]  p-4 md:p-6 mx-auto bg-white rounded-lg hover:shadow-lg' >
               <img src={p.image}
                alt={p.name}
                className='w-[200px] h-[150px] object-contain block m-auto'/>
                {/* Product Info */}
                <div className='flex flex-col gap-2 my-4  h-[120px]'>
                  <p className='text-center font-bold'>{p.name}</p>
                  <p className='text-center text-sm'>$ {p.price}</p>
                  <p className='text-xs text-gray-500 text-center'> {p.smallDescription}</p>
                </div>
                <button className='w-full bg-blue-700 text-white text-center text-xs p-2 rounder-lg cursor-pointer'>+ Add to Cart</button>
            </div>
           ))}
           
        

    
    </div>
  )
}

export default Product