import LogoImg from '../Assets/Images/logo.jpg'
import { Link, Links } from 'react-router-dom'

function Nav() {
  return (
    <div className=''>
        {/**top nav */}
        <div className="w-full bg-primary-green text-white py-[16px] padx flex items-center justify-between bg-gradient-to-r from-green-600 to-yellow-500">
            <h3 className="text-[24px] font-bold max-phone:text-[18px]">UWLEI</h3>
            
            <p className="text-[13px] font-semibold text-end max-phone:text-[10px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</p>
        </div>

        {/**NAVBAR */}
        <div className="w-full bg-white py-[32px] flex items-center justify-between padx navbar">
            <Link to='/' className="">
                <img alt="logo" src={LogoImg} className="w-[70px] rounded-full max-phone:w-[50px]" />
            </Link>

            <div className="flex items-center gap-4 max-phone:gap-2">
                <Link to="/" className="btn border-[2px] text-white !bg-gradient-to-r from-green-600 to-yellow-500 hover:text-white transition-all duration-500 min-w-[200px] max-tablet:min-w-[0] text-[21px] max-phone:text-[14px] font-semibold text-brown hover:text-primary-green">Home</Link>
                <Link to="/blogs" className="btn border-[2px] text-white !bg-gradient-to-r from-green-600 to-yellow-500 hover:text-white transition-all duration-500 min-w-[200px] max-tablet:min-w-[0] text-[21px] max-phone:text-[14px] font-semibold text-brown hover:text-primary-green">Blogs</Link>
                <Link to="/contact-us" className="btn border-[2px] text-white !bg-gradient-to-r from-green-600 to-yellow-500 hover:text-white transition-all duration-500 min-w-[200px] max-tablet:min-w-[0] text-[21px] max-phone:text-[14px] font-semibold text-brown hover:text-primary-green">Contact Us</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
