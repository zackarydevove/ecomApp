import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaLock, FaUser } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dataRes, setDataRes] = useState({});

    const navigate = useNavigate();

    const handleClick = () => {
        axios({
            method: 'POST',
            data: {
              email: email,
              password: password,
              confirmPassword: confirmPassword,
            },
            withCredentials: true,
            url: 'http://localhost:5000/register',
          }).then((res) => {
            setDataRes(res.data);
            console.log(res.data);
            if (res.data === 'User successfully created!') {
                navigate('/login');
            }
          })
          .catch((err) => {
            console.log(err);
          });
    }

  return (
    <div className='overflow-hidden'>
        <div className='w-screen h-screen bg-light_grey z-[-2] absolute left-0 top-0' />
        <Navbar />
        <div className='h-[92vh] flex justify-center items-center relative'>
            {/* Image  */}
            <div className='max-lg:hidden w-[70vw] h-[70vh] z-[-1] bg-contain bg-login_img bg-no-repeat absolute 2xl:left-96 bottom-40 translate-x-[50%]' />

            {/* Login Form */}
            <div className='w-[90vw] lg:w-[35vw] lg:h-[93vh] xl:h-[90vh] flex flex-col justify-start items-center gap-10 lg:absolute lg:translate-x-[-70%] xl:translate-x-[-50%]'>
                <h2 className='text-5xl mb-10'>Sign Up</h2>
                
                <div className='flex flex-col '>
                    <div className='w-[90vw] lg:w-[35vw] h-[55px] rounded-full flex items-center bg-white'>
                        <FaUser className='ml-6 mr-3'/>
                        <input type='email' className='w-[80%] bg-white' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    {dataRes === 'Email already used!' ? <p>Email already used!</p> : null } 
                </div>

                <div className='flex flex-col '>
                    <div className='w-[90vw] lg:w-[35vw] h-[55px] rounded-full flex items-center bg-white' >
                        <FaLock className='ml-6 mr-3' />
                        <input type='password' className='w-[80%] bg-white' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    {dataRes === 'Password doesnt match' ? <p>Password doesnt match</p> : null } 
                </div>

                <div className='flex flex-col '>
                    <div className='w-[90vw] lg:w-[35vw] h-[55px] rounded-full flex items-center bg-white' >
                        <FaLock className='ml-6 mr-3' />
                        <input type='password' className='w-[80%] bg-white' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}></input>
                    </div>
                </div>


                <div className='w-full'>
                  <button className='w-full h-14 bg-footer text-white' onClick={handleClick}>REGISTER</button>
                  <p className='text-center'>Demo account: demo@demo.com / password: demo123</p>
                </div>
                
                <div className='w-full flex justify-center items-center'>
                    <hr className='w-[50%] flex justify-center items-center mx-3' /> 
                    <span className='text-gray-400 font-medium'>Or</span>
                    <hr className='w-[50%] flex justify-center items-center mx-3' />
                </div>

                <p>Sign in with social platforms</p>
                <div className='flex gap-5'>
                    {/* <AiFillTwitterCircle size='3em' className='hover:cursor-pointer hover:text-grey'/> */}
                    <AiFillGoogleCircle size='3em' className='hover:cursor-pointer hover:text-grey'/>
                    {/* <IoLogoFacebook size='3em' className='hover:cursor-pointer hover:text-grey'/> */}
                </div>

                <p>Already have an account? <Link to='/login'>Sign In</Link></p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Login
