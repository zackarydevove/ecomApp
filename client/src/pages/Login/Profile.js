import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

function Profile() {
    const [user, setUser] = useState({});
    const [editable, setEditable] = useState([
        {
            boolean: false,
            text: 'EDIT',
        },
        {
            boolean: false,
            text: 'EDIT',
        },
        {
            boolean: false,
            text: 'EDIT',
        },
        {
            boolean: false,
            text: 'EDIT',
        },
        {
            boolean: false,
            text: 'EDIT',
        },
        {
            boolean: false,
            text: 'EDIT',
        },
    ]);

    const navigate = useNavigate();

    console.log(user);

    useEffect(() => {
        axios({
          method: 'GET',
          withCredentials: true,
          url: 'https://ecom-app-server.vercel.app/user'
        })
        .then((res) => setUser(res.data))
        .catch((err) => navigate('/login'))
    }, [])

    const handleDisconnect = () => {
        axios({
            method: 'POST',
            withCredentials: true,
            url: 'https://ecom-app-server.vercel.app/logout'
        })
        .then((res) => navigate('/login'))
        .catch((err) => console.log(err))
    }

    function handleEdit(index){
        // if (editable[index].boolean === true && editable[index].text === 'CONFIRM') {
        //     axios({
        //         method: 'POST',
        //         data: {
                    
        //         }
        //     })
        // }
        let newEditable = [...editable];
        newEditable[index].boolean = !newEditable[index].boolean;
        if (newEditable[index].boolean === true) {
            newEditable[index].text = 'CONFIRM';
        } else {
            newEditable[index].text = 'EDIT';
        }
        setEditable(newEditable);
    }

    if (!user) {
        return (navigate('/login'));
    }

    return (
        <div className='overflow-hidden'>
            <Navbar />
            <div className='w-screen h-[50vh] bg-profile_bg bg-cover bg-no-repeat'>
                <div className='w-full h-full flex flex-col justify-center items-center gap-5 relative'>
                    <div className='w-28 h-28 rounded-full bg-white'/>
                    <p className='text-3xl font-bold'>HI, {user.email}</p>
                    <button className='bg-footer text-white p-5 pl-7 pr-7 hover:bg-white border hover:text-black'
                        onClick={handleDisconnect}>Logout</button>
                </div>
            </div>
            <div className='w-screen bg-white flex lg:flex-row flex-col '>
                {/* Edit Profile */}
                <div className='lg:w-[30%] flex flex-col gap-10 p-10 lg:ml-10'>
                    <h1 className='text-center font-bold'>PROFILE</h1>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>First name</h2>
                        <p contentEditable={editable[0].boolean} className='w-1/2 text-center'>{user.firstname}</p>
                        <button className='font-bold' onClick={() => handleEdit(0)}>{editable[0].text}</button>
                    </div>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Last name</h2>
                        <p contentEditable={editable[1].boolean} className='w-1/2 text-center'>{user.lastname}</p>
                        <button className='font-bold' onClick={() => handleEdit(1)}>{editable[1].text}</button>
                    </div>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Email</h2>
                        <p contentEditable={editable[2].boolean} className='w-1/2 text-center'>{user.email}</p>
                        <button className='font-bold' onClick={() => handleEdit(2)}>{editable[2].text}</button>
                    </div>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Number Phone</h2>
                        <p contentEditable={editable[3].boolean} className='w-1/2 text-center'>{user.numberphone}</p>
                        <button className='font-bold' onClick={() => handleEdit(3)}>{editable[3].text}</button>
                    </div>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Country</h2>
                        <p contentEditable={editable[4].boolean} className='w-1/2 text-center'>{user.country}</p>
                        <button className='font-bold' onClick={() => handleEdit(4)}>{editable[4].text}</button>
                    </div>
                    <hr className='text-grey' />
                    <div className='flex justify-between'>
                        <h2 className='font-bold'>Birthday</h2>
                        <p contentEditable={editable[5].boolean} className='w-1/2 text-center'>{user.birthday}</p>
                        <button className='font-bold' onClick={() => handleEdit(5)}>{editable[5].text}</button>
                    </div>
                    <hr className='text-grey' />
                </div>
                {/* Historic */}
                <div className='lg:w-[70%] h-[92%] flex flex-col gap-5 p-10 lg:ml-10 lg:overflow-y-scroll'>
                    <div className='flex flex-col gap-4'>
                        <h1 className='text-center font-bold'>HISTORIC</h1>
                        <div>
                            <div className='flex justify-between m-0 p-0'>
                                <p>Date</p>
                                <p>Product</p>
                                <p>Total</p>
                            </div>
                        </div>
                            <hr className='text-grey' />
                    </div>

                    {(user && user.history && user.history.length > 0) ?

                    user.history.map(history => {
                        return (
                            <div>
                                <div className='flex justify-between items-center'>
                                    {/* Date */}
                                    <h2 className='max-lg:w-[20%] font-bold'>{history.date.substr(0,10)}</h2>
                                    {/* Product */}
                                    <div className='max-lg:w-[40%] flex flex-col'>
                                        { 
                                            history.cart.map(item => {
                                                return (
                                                    <p>{item.quantity}x {item.product.name} ${(item.product.price * item.quantity) / 100}</p>
                                                )
                                            })
                                        }
                                    </div>
                                    {/* Total */}
                                    <p>
                                    {(() => {
                                            let total = 0;
                                            for (let i = 0; i < history.cart.length; i++) {
                                            total += history.cart[i].quantity * history.cart[i].product.price;
                                            }
                                            return (`$${total/100}`);
                                        })()
                                    }
                                    </p>
                                </div>
                                <hr className='text-grey mt-5' />
                            </div>
                        )})
                    :  null
                }

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
