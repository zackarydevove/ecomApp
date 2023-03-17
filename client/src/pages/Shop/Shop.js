import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';

function Shop() {
    const [products, setProducts] = useState([]);
    const [query, setQuery] = useState([]);
    const [userCart, setUserCart] = useState([]);
    const [total, setTotal] = useState(0);
    const [renderCart, setRenderCart] = useState(0);
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    console.log(query);
    const peripheral = ['Headphone', 'Keyboard', 'Mouse', 'Speaker', 'Tablet'];
    const group = ['M', 'X', 'B'];

    useEffect(() => {
        axios({
          method: 'GET',
          withCredentials: true,
          url: 'https://ecom-app-server.vercel.app/user',
        })
        .then((res) => setUserCart(res.data.cart) )
        .catch((err) => console.log(err));
    }, [renderCart]);

    useEffect(() => {
        if (userCart){
            let sum = 0;
            userCart.forEach((item) => {
                sum += item.quantity * Number(item.product.price);
            });
            setTotal(sum);
        }
    }, [userCart]);

    function addToCart(id){
        setRenderCart(renderCart + 1);
        console.log(renderCart);
        axios({
            method: 'POST',
            data: {
                id: id,
            },
            withCredentials: true,
            url: 'https://ecom-app-server.vercel.app/cart',
        })
        .then((res) => {
            if (res.data === 'not login') {
                navigate('/login');
            }
        })
        .catch((err) => console.log(err));
    }


    useEffect(() => {
        axios({
            method: 'GET',
            withCredentials: true,
            url: 'https://ecom-app-server.vercel.app/products'
        })
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, [])

    function addToQuery(string){
        const index = query.findIndex(item => item === string);
        let newQuery = [...query];
        if (index > -1){
            newQuery.splice(index, 1);
        } else {
            newQuery.push(string);
        }
        setQuery(newQuery);
        console.log(query);
    }

  return (
    <div className='overflow-hidden'>
        {/* Page 1 */}
        <div className='w-screen h-[50vh] bg-shopwp bg-no-repeat bg-cover bg-center overflow-hidden'>
            <Navbar userCart={userCart} total={total} />
        </div>

        {/* Page 2 */}
        <div className='w-screen h-auto mt-14 mb-14 flex max-md:flex-col justify-center gap-10 relative'>
            {
                open ?
                <div className='md:hidden'>
                    <div className='flex items-center gap-10'>
                        <RxCross1 size='2em' className='md:hidden ml-10 ' onClick={() => setOpen(!open)}/> 
                        <h1 className='font-bold text-2xl'>FILTERS</h1>
                    </div>
                    <div className='md:hidden w-full bg-white '>
                        <div className='w-full flex sm:flex-row flex-col sm:justify-evenly max-sm:items-center max-sm:gap-5'>
                            <div className='flex flex-col gap-5'>
                                <h1 className='font-bold text-xl'>PERIPHERAL</h1>
                                <div>
                                    {
                                        peripheral.map((item) => {
                                            return (
                                                <div className='flex gap-5'>
                                                    <input type='checkbox' onClick={() => addToQuery(item)}/>
                                                    <p>{item}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h1 className='font-bold text-xl'>Collection</h1>
                                <div>
                                    {
                                        group.map((item) => {
                                            return (
                                                <div className='flex gap-5'>
                                                    <input type='checkbox' onClick={() => addToQuery(item)}/>
                                                    <p>{item}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                : 
                <div className='flex items-center gap-10 md:hidden'>
                    <GiHamburgerMenu size='2em' className='md:hidden ml-10' onClick={() => setOpen(!open)}/>
                    <h1 className='font-bold text-2xl '>FILTERS</h1>
                </div>
            }

            {/* Query column */}
            <div className='max-md:hidden md:w-[10%] mr-5 flex flex-col max-md:justify-evenly max-md:items-center gap-5'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-bold text-xl'>PERIPHERAL</h1>
                    <div>
                        {
                            peripheral.map((item) => {
                                return (
                                    <div className='flex gap-5'>
                                        <input type='checkbox' onClick={() => addToQuery(item)}/>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <hr className='w-[100%] text-light_grey'/>
                    <h1 className='font-bold text-xl'>group</h1>
                    <div>
                        {
                            group.map((item) => {
                                return (
                                    <div className='flex gap-5'>
                                        <input type='checkbox' onClick={() => addToQuery(item)}/>
                                        <p>{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr className='w-[100%] text-light_grey'/>

            </div>

            {/* Products */}
            <div className='w-[100%] md:w-[50%] flex flex-col items-center gap-10'>
                <div className='w-[100%] flex flex-wrap '>
                {
                      products.map((item) => {
                        console.log(item._id)
                        console.log(`bg-product${item._id}`);
                        const matchesQuery = query.length === 0 || (query.includes(item.type) || query.includes(item.group));
                        return (
                          matchesQuery ? (
                            // One product
                            <div className='w-full sm:w-1/2 xl:w-1/3 xl:h-auto flex flex-col max-md:items-center gap-3' key={item._id}>
                                <div className='w-[90vw] h-[90vw] sm:w-[45vw] sm:h-[45vw] md:w-[25vw] md:h-[25vw] xl:w-[16vw] xl:h-[16vw] overflow-hidden'>
                                    <div className={`w-full  h-full bg-product${item._id} bg-no-repeat bg-contain bg-center hover:scale-105 hover:cursor-pointer`}/>
                                </div>
                              <div>
                                <h2 className='text-xl font-bold'>{item.name}</h2>
                                <p>{item.type}</p>
                              </div>
                              <p className='text-lg'>${(item.price / 100).toFixed(2)}</p>
                              <button onClick={() => addToCart(item._id)} className='w-fit text-sm text-white pr-7 pl-7 p-4 bg-footer hover:bg-white hover:border hover:text-black transition'>ADD TO CART</button>
                            </div>
                          ) : null
                        )
                      })
                }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Shop
