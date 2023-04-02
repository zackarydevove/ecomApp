import React from 'react'
import { ImSearch } from 'react-icons/im';
import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getProducts, cart } from '../api/product';

function SearchBar() {
    const [searchClicked, setSearchClicked] = useState(false)
    const [products, setProducts] = useState([]);
    const [research, setResearch] = useState('');
    const [query, setQuery] = useState([]);
    const navigate = useNavigate();

    const handleClick = () => {
        setSearchClicked(!searchClicked)
    }

    useEffect(() => {
        getProducts()
        .then((res) => setProducts(res))
        .catch((err) => console.log(err));
    }, [])

    const handleChange = e => {
        setResearch(e.target.value.toLowerCase());
        const matchingProducts = products.filter(item => item.name.toLowerCase().includes(research));
        setQuery(matchingProducts);
    }

    function addToCart(productId){
        cart(productId)
        .then((res) => {
            if (res === 'not login') {
                navigate('/login');
            }
        })
        .catch((err) => console.log(err));
    }

        return (
            searchClicked ?

                <div className='w-5 h-5 flex justify-center items-center' >
                    <ImSearch size='3em' className='hover:cursor-pointer hover:text-grey' onClick={handleClick}/>
                    <div className='flex flex-col absolute top-0 right-0 '>
                        <div className='w-[100vw] sm:w-[385px] h-screen z-30 flex flex-col bg-white absolute right-0 top-0 gap-5'>
                            <div className='w-full h-[5%]  flex'>
                                <input value={research} onChange={handleChange} className='w-[90%] p-2 h-16 z-20 text-2xl border-none' placeholder='SEARCH'></input>
                                <div className='w-[10%] h-16 flex justify-items-center items-center'>
                                    <RxCross2 size='2em' className='text-grey hover:text-black hover:cursor-pointer'  onClick={handleClick}/>
                                </div>
                            </div>
                            <hr className='w-full text-grey'/>
                            <div className='flex flex-col gap-5 overflow-y-scroll'>
                            {
                                query.map((item, key) => {
                                    return (
                                                <div className='w-full flex p-3'>
                                                    {/* Left */}
                                                    <div className={`w-24 h-32 bg-product${item._id} bg-contain bg-center bg-no-repeat`}/>
                                                    {/* Right */}
                                                    <div className='flex flex-col flex-grow pl-2'>
                                                        {/* Up */}
                                                        <div className='flex flex-grow justify-between'>
                                                            <p className='font-bold'>{item.name}</p>
                                                            <p>${(item.price / 100).toFixed(2)}</p>
                                                        </div>
                                                        {/* Down */}
                                                        <div className='flex flex-grow justify-center items-center'>
                                                            <button className='w-[60%] p-5 bg-footer text-white hover:bg-white hover:text-black hover:border'
                                                                onClick={() => addToCart(item._id)}>ADD TO CART</button>
                                                        </div>
                                                    </div>     
                                                </div>                                       
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
                
                :

                <div className='w-5 h-5 hover:cursor-pointer hover:text-grey z-10 flex justify-center items-center'
                    onClick={handleClick}>
                    <ImSearch size='3em' className=''/>
                </div>
        )
}

export default SearchBar
