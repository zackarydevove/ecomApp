import React, { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { AiOutlineUp, AiOutlineDown, AiFillCheckCircle } from 'react-icons/ai';
import { BiTrash } from 'react-icons/bi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Cart(props) {
    const [openCart, setOpenCart] = useState(false);
    const [userCart, setUserCart] = useState(props.userCart);
    const [total, setTotal] = useState(props.total);
  
    const navigate = useNavigate();
  
    useEffect(() => {
      axios({
        method: 'GET',
        withCredentials: true,
        url: 'https://ecom-app-server-nrxr7zfye-zackarydevove.vercel.app/user',
      })
        .then((res) => setUserCart(res.data.cart))
        .catch((err) => console.log(err));
    }, []);
  
    useEffect(() => {
      if (userCart) {
        let sum = 0;
        userCart.forEach((item) => {
          sum += item.quantity * Number(item.product.price);
        });
        setTotal(sum);
      }
    }, [userCart]);
  
    useEffect(() => {
      setUserCart(props.userCart);
    }, [props.userCart]);
  
    const handleClick = () => {
      setOpenCart(!openCart);
    };
  
    const updateCart = (index, add) => {
      axios({
        method: 'POST',
        data: {
          index: index,
          add: add,
        },
        withCredentials: true,
        url: 'https://ecom-app-server-nrxr7zfye-zackarydevove.vercel.app/cart/add',
      })
        .then((res) => {
          setUserCart(res.data.cart);
        })
        .catch((err) => console.log(err));
    };
  
    const deleteItem = (index, id) => {
      console.log(id);
      axios({
        method: 'POST',
        data: { id: id },
        withCredentials: true,
        url: 'https://ecom-app-server-nrxr7zfye-zackarydevove.vercel.app/cart/delete',
      })
        .then((res) => {
          setUserCart(res.data.cart);
        })
        .catch((err) => console.log(err));
    };
  
    const checkout = () => {
      axios({
        method: 'POST',
        data: { cart: userCart },
        withCredentials: true,
        url: 'https://ecom-app-server-nrxr7zfye-zackarydevove.vercel.app/checkout',
      })
        .then((res) => {
          console.log(res);
          window.open(res.data.url, '_blank');
        })
        .catch((err) => console.log(err));
    };
  


    if (!userCart) {
        return (
            <div className='w-5 h-5 z-10 flex justify-center items-center'>
                <FaShoppingCart size='3em' className='cursor-pointer hover:text-grey' onClick={handleClick}/>
                {!openCart  ? 
                        <div className='w-[100vw] sm:w-[485px] h-screen absolute bg-white -right-96 top-0 z-20 transition-all hidden'>
                            <div className='flex justify-between items-center p-2 bg-black text-white'>
                                <h2>CART</h2>
                                <RxCross2 size='2em' className='hover:cursor-pointer' onClick={handleClick}/>
                            </div>
                        </div>
                        : 
                        <div className='w-[100vw] sm:w-[485px] h-screen fixed bg-white right-0 top-0 z-20 transition-all'>
                            <div className='flex justify-between items-center p-2 bg-black text-white'>
                                <h2>CART</h2>
                                <RxCross2 size='2em' className='hover:cursor-pointer' onClick={handleClick}/>
                            </div>
                            <div className='w-full flex flex-col items-center'>
                                <div className='flex justify-center items-center gap-3 p-3'>
                                    <p ClassName='text-black'>Login to see your cart</p>
                                </div>
                                <hr className='w-full text-light_grey'/>
                                <button className='w-[90%] shadow-xl h-14 bg-footer text-white hover:bg-white hover:text-black hover:border' onClick={() => navigate('/login')}>LOGIN</button>
                            </div>
                        </div>
                        
                }
            </div>
        )
    } else {
        return (
            <div className='w-5 h-5 z-10 flex justify-center items-center'>
                <FaShoppingCart size='3em' className='cursor-pointer hover:text-grey' onClick={handleClick}/>
                {!openCart  ? 
                        <div className='w-[100vw] sm:w-[485px] h-screen absolute bg-white -right-96 top-0 z-20 transition-all hidden'>
                            <div className='flex justify-between items-center p-2 bg-black text-white'>
                                <h2>CART</h2>
                                <RxCross2 size='2em' className='hover:cursor-pointer' onClick={handleClick}/>
                            </div>
                        </div>
                        : 
                        <div className='w-[100vw] sm:w-[485px] h-screen fixed bg-white right-0 top-0 z-20 transition-all'>
                            <div className='flex justify-between items-center p-2 bg-black text-white'>
                                <h2>CART</h2>
                                <RxCross2 size='2em' className='hover:cursor-pointer' onClick={handleClick}/>
                            </div>
                            <div className='w-full'>
                                <div className='flex justify-center items-center gap-3 p-3'>
                                    <AiFillCheckCircle className='text-green'/>
                                    <p ClassName='text-black'>Your order qualifies for free shipping and free returns</p>
                                </div>
                                <hr className='w-full text-light_grey'/>
                            </div>
                            <div className='text-black h-[72%] overflow-y-scroll flex flex-col gap-10 p-5 z-50'>
                                    {userCart.map((item, index) => {
                                        return (
                                            <div key={index} className='flex gap-5 relative'>
                                                <BiTrash size='1.3em' className='absolute top-0 right-0 hover:cursor-pointer'
                                                    onClick={() => deleteItem(index, item._id)}/>
                                                <p className='absolute bottom-0 right-0'>${((item.product.price / 100) * item.quantity).toFixed(2)}</p>
                                                <div className={`w-24 h-32 bg-product${item.product._id} bg-center bg-contain bg-no-repeat`}/>
                                                <div className='flex flex-col justify-between'>
                                                    <p className='font-bold'>{item.product.name}</p>
                                                    <div className='w-32 h-1/2 border flex justify-around items-center'>
                                                        <div className='flex justify-center items-center w-[33%] h-[80%] hover:bg-footer hover:text-white hover:cursor-pointer'>
                                                            <AiOutlineUp onClick={() => updateCart(index, 1)} />
                                                        </div>
                                                        <p>{item.quantity}</p>
                                                        <div className='flex justify-center items-center w-[33%] h-[80%] hover:bg-footer hover:text-white hover:cursor-pointer'>
                                                            <AiOutlineDown onClick={() => updateCart(index, -1)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                            </div> 
                            <div className='w-full flex flex-col items-center gap-3'>
                                <hr className='w-full text-light_grey'/>
                                <p>Total: ${(total / 100).toFixed(2)} </p>
                                <button className='bg-footer text-white p-5 w-[50%] hover:bg-white hover:text-black hover:border transition'
                                    onClick={checkout}>Checkout</button>
                            </div>
                        </div>
                }
            </div>
        )
    }


}

export default Cart
