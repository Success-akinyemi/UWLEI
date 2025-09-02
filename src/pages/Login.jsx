import { Link, useNavigate } from 'react-router-dom'
import LogoImg from '../Assets/Images/logo.jpg'
import { useState } from 'react';
import { notify } from '../utils/taost';

function Login() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };  

  const handleLogin = (e) => {
    e.preventDefault();
    if(!formData?.email) return notify('error', 'Provide a email address')
    if(!formData?.password) return notify('error', 'Provide a password')

    try {
        
        navigate('/dashboard')
    } catch (error) {
        
    } finally {

    }
  }

  return (
  <div class="flex flex-col authPage">

    <div class="logo">
      <img alt="logo" src={LogoImg} />
      <p>UWLEI</p>
    </div>

    {/**AUTH CARD */}
    <div class="flex flex-col gap-[24px] items-start justify-center w-[400px] authCard">
      <Link to="/" class="bg-amber-500 h-[40px] w-[40px] rounded-full flex items-center justify-center">
        <i class="fa-solid fa-arrow-left"></i>
      </Link>

      <h3 class="text-[24px] font-medium text-gray-700">Let's get started</h3>

      {/**✅ Proper form */}
      <form id="loginForm" class="flex flex-col gap-[16px] w-full">

        {/**Email */}
        <div class="inputGroup">
          <label class="label">Email</label>
          <input id="email" onChange={handleChange} type="email" placeholder="Your email" class="input" required />
            <div>
                Don't have an account? <Link to="/register" class="text-amber-500 underline">Register here</Link>
            </div>
        </div>

        {/**Password */}
        <div class="inputGroup">
          <label class="label">Password</label>
          <input id="password" onChange={handleChange} type="password" placeholder="Password" class="input" required />
        </div>

        <div>
            <a href="" class="text-amber-500 underline">Forgot password</a>
        </div>

        <div>
          <button onClick={handleLogin} type="submit" class="btn2 bg-amber-500 w-full">Sign in</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login
