import LogoImg from '../Assets/Images/logo.jpg'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className=''>
        {/**top nav */}
        <div className="w-full bg-primary-green text-white py-[16px] padx flex items-center justify-between">
            <h3 className="text-[24px] font-bold max-phone:text-[18px]">UWLEI</h3>
            
            <p className="text-[13px] font-semibold text-end max-phone:text-[10px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</p>
        </div>

        {/**NAVBAR */}
        <div className="w-full bg-white py-[32px] flex items-center justify-between padx navbar">
            <div className="">
                <img alt="logo" src={LogoImg} className="w-[70px] rounded-full max-phone:w-[50px]" />
            </div>

            <div className="flex items-center gap-2">
                <Link to="/" className="text-[21px] max-phone:text-[19px] font-semibold text-brown hover:text-primary-green">Home</Link>
                <Link to="/blogs" className="text-[21px] max-phone:text-[19px] font-semibold text-brown hover:text-primary-green">Blogs</Link>
            </div>
        </div>
      
    </div>
  )
}

export default Nav
