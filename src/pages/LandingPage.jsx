import BgImg from '../Assets/Images/logoImg.jpg'
import LogoImg from '../Assets/Images/logo.jpg'
import SupportImg from '../Assets/Images/img.jpg'
import SupportTwoImg from '../Assets/Images/img2.jpg'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div class="">
        {/**top nav */}
        <div class="w-full bg-primary-green text-white py-[16px] padx flex items-center justify-between">
            <h3 class="text-[24px] font-bold max-phone:text-[18px]">UWLEI</h3>
            
            <p class="text-[13px] font-semibold text-end max-phone:text-[10px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</p>
        </div>

        {/**NAVBAR */}
        <div class="w-full bg-white py-[32px] flex items-center justify-between padx navbar">
            <div class="">
                <img alt="logo" src={LogoImg} class="w-[70px] rounded-full max-phone:w-[50px]" />
            </div>

            <div class="">
                <Link to="/" class="text-amber-500 text-[21px] max-phone:text-[19px] font-semibold text-brown">Home</Link>
            </div>
        </div>

        {/**Showcase */}
        <div class="w-full h-screen relative flex flex-col padx items-start justify-center">
            {/**overlay */}
            <div class="absolute top-0 left-0 w-full h-full bg-black/80 z-[10]"></div>
            <img src={BgImg} alt="hero image" class="absolute z-[5] right-0 left-0 w-full h-full object-center object-cover" />
            <div class="flex flex-col z-[20] gap-[24px]">
                <p class="text-[20px] max-lg:text-[17px] font-bold max-phone:text-[14px] text-brown">Welcome to UWLEI</p>
                <h1 class="text-white text-[56px] font-bold w-[70%] shadow max-phone:text-[36px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</h1>

                <div class="flex items-center gap-[16px]">
                    <Link to="/register" class="btn text-white border-[2px] border-primary-green bg-primary-green hover:bg-transparent hover:border-primary-green hover:text--primary-green transition-all duration-500 cursor-pointer">Creat Account</Link>
                    <Link to="/login" class="btn border-[2px] border-primary-green text-white hover:bg-primary-green hover:text-white transition-all duration-500">Login</Link>
                </div>
            </div>
        </div>

        {/**FOOTER */}
        <div class="padx footer bg-primary-green flex flex-col">
            <div class="flex flex-col w-full gap-8 mt-[-30px]">
                <div className="text-white flex items-center justify-center w-full flex-col">
                    <h3 className='text-[56px] max-phone:text-[32px]'>Supported By:</h3>
                </div>

                <div className="flex items-center justify-center gap-10 flex-wrap">
                    <img alt="" src={LogoImg} className='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportImg} className='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportTwoImg} className='rounded-full w-[120px] h-[120px] object-center' />
                </div>
            </div>

            <div class="text-white">
            </div>
        </div>
    </div>
  )
}

export default LandingPage
