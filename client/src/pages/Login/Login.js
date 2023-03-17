import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { FaLock, FaUser } from 'react-icons/fa'
import { AiFillTwitterCircle, AiFillGoogleCircle } from 'react-icons/ai'
import { IoLogoFacebook } from 'react-icons/io'
import { Link, navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataRes, setDataRes] = useState({});

    const navigate = useNavigate();

    const handleClick = () => {
      console.log(email);
      console.log(password);
        axios({
          method: 'POST',
          data: {
            email: email,
            password: password,
          },
          withCredentials: true,
          url: 'https://ecom-app-server.vercel.app/login',
        }).then((res) => {
          setDataRes(res.data);
          console.log(res.data);
          console.log(dataRes);
          if (res.data === 'no user exists') {
            navigate("/signup");
          } else if (res.data === 'Successfully Authenticated') {
            navigate('/profile');
          }
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const googleLogin = () => {
        window.open('https://ecom-app-server.vercel.app/auth/google', '_self');
      }

  return (
    <div className='overflow-hidden'>
                <div className='w-screen h-screen bg-light_grey z-[-2] absolute left-0 top-0' />
        <Navbar />
        <div className='h-[92vh] flex justify-center items-center relative'>
            {/* Image  */}
            <div className='max-lg:hidden w-[1000px] h-[650px] z-[-1] bg-contain bg-login_img bg-no-repeat absolute lg:left-0 xl:left-16  2xl:left-32 bottom-40' />

            {/* Login Form */}
            <div className='w-[90vw] lg:w-[35vw] lg:h-[90vh] flex flex-col justify-start items-center gap-10 lg:absolute lg:translate-x-[70%] xl:translate-x-[50%]'>
                <h2 className='text-5xl mb-10'>Sign In</h2>
                
                <div className='flex flex-col '>
                  <div className='w-[90vw] lg:w-[35vw] h-[55px] rounded-full flex items-center bg-white'>
                      <FaUser className='ml-6 mr-3'/>
                      <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}  className='w-[80%] bg-white' placeholder='Email'></input>
                  </div>
                </div>

                <div className='flex flex-col '>
                  <div className='w-[90vw] lg:w-[35vw] h-[55px] rounded-full flex items-center bg-white' >
                      <FaLock className='ml-6 mr-3' />
                      <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='w-[80%] bg-white' placeholder='Password'></input>
                  </div>
                </div>

                <div className='w-[90vw] lg:w-[35vw] flex justify-end items-center '>
                    <Link to='/forgotpw'>Forgot password?</Link>
                </div>

                <div className='w-full'>
                  <button className='w-full h-14 bg-footer text-white ' onClick={handleClick}>LOGIN</button>
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
                    <AiFillGoogleCircle size='3em' className='hover:cursor-pointer hover:text-grey' onClick={googleLogin}/>
                    {/* <IoLogoFacebook size='3em' className='hover:cursor-pointer hover:text-grey'/> */}
                </div>

                <p>Don't have an account? <Link to='/signup'>Sign Up</Link></p>
            </div>
        </div>
        <Footer />

    </div>
  )
}

export default Login
