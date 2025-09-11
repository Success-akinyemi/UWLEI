import BgImg from '../Assets/Images/logoImg.jpg'
import LogoImg from '../Assets/Images/logo.jpg'
import SupportImg from '../Assets/Images/img.jpg'
import SupportTwoImg from '../Assets/Images/img2.jpg'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div className="">
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

        {/**Showcase */}
        <div className="w-full h-screen relative flex flex-col padx items-start justify-center">
            {/**overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[10]"></div>
            <img src={BgImg} alt="hero image" className="absolute z-[5] right-0 left-0 w-full h-full object-center object-cover" />
            <div className="flex flex-col z-[20] gap-[24px]">
                <p className="text-[20px] max-lg:text-[17px] font-bold max-phone:text-[14px] text-brown">Welcome to UWLEI</p>
                <h1 className="text-white text-[56px] font-bold w-[70%] shadow max-phone:text-[36px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</h1>

                <div className="flex items-center gap-[16px]">
                    <Link to="/register" className="btn text-white border-[2px] border-primary-green bg-primary-green hover:bg-transparent hover:border-primary-green hover:text--primary-green transition-all duration-500 cursor-pointer">Creat Account</Link>
                    <Link to="/login" className="btn border-[2px] border-primary-green text-white hover:bg-primary-green hover:text-white transition-all duration-500">Login</Link>
                </div>
            </div>
        </div>

        {/**FOOTER */}
        <div className="padx footer bg-primary-green flex flex-col">
            <div className="flex flex-col w-full gap-8 mt-[-30px]">
                <div classNameName="text-white flex items-center justify-center w-full flex-col">
                    <h3 classNameName='text-[56px] max-phone:text-[32px]'>Supported By:</h3>
                </div>

                <div classNameName="flex items-center justify-center gap-10 flex-wrap">
                    <img alt="" src={LogoImg} classNameName='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportImg} classNameName='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportTwoImg} classNameName='rounded-full w-[120px] h-[120px] object-center' />
                </div>
            </div>

            <div className="text-white">
            </div>
        </div>
    </div>
  )
}

export default LandingPage
