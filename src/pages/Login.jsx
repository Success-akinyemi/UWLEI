import { Link, useNavigate } from 'react-router-dom'
import LogoImg from '../Assets/Images/logo.jpg'
import { useState } from 'react';
import { notify } from '../utils/taost';
import { FaArrowLeft } from "react-icons/fa6";
import { login } from '../helpers/api';

function Login() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };  

  const handleLogin = async (e) => {
    if(loading) return
    e.preventDefault();
    if(!formData?.username) return notify('error', 'Provide a username')
    if(!formData?.password) return notify('error', 'Provide a password')

    try {
        setLoading(true)
        const res = await login(formData)

        if(res.refresh) {
            localStorage.setItem('UWLEIACCESS', res.access)
            localStorage.setItem('UWLEIREFRESH', res.refresh)
            notify('success', 'Login Successful')

            if(!res.user.isActivated) {
                setTimeout(() => {
                    navigate('/account-activation')
                }, 3000)
            } else {
                setTimeout(() => {
                    navigate('/dashboard')
                }, 3000)
            }

        } else {
            notify('error', res.detail || 'Unable to login user')
        }
        
    } catch (error) {
        
    } finally {
        setLoading(false)
    }
  }

  return (
  <div class="flex flex-col authPage">

    <div class="logo">
      <img alt="logo" src={LogoImg} />
      <p className='!text-brown'>UWLEI</p>
    </div>

    {/**AUTH CARD */}
    <div class="flex flex-col gap-[24px] items-start justify-center w-[400px] max-phone:w-[90%] authCard">
      <Link to="/" class="bg-primary-green h-[40px] w-[40px] rounded-full flex items-center justify-center">
        <FaArrowLeft className='text-[24px] text-white' />
      </Link>

      <h3 class="text-[24px] font-medium text-gray-700">Let's get started</h3>

      {/**✅ Proper form */}
      <form id="loginForm" class="flex flex-col gap-[16px] w-full">

        {/**Email */}
        <div class="inputGroup">
          <label class="label">Username</label>
          <input id="username" onChange={handleChange} type="text" placeholder="Your username" class="input" required />
            <div>
                Don't have an account? <Link to="/register" class="text-primary-green underline">Register here</Link>
            </div>
        </div>

        {/**Password */}
        <div class="inputGroup">
          <label class="label">Password</label>
          <input id="password" onChange={handleChange} type="password" placeholder="Password" class="input" required />
        </div>

        <div>
            <a href="" class="text-primary-green underline">Forgot password</a>
        </div>

        <div>
          <button onClick={handleLogin} type="submit" class="btn2 bg-primary-green w-full">{ loading ? 'Signing up....' : 'Sign in' }</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
