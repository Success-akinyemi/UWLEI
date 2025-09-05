import BgImg from '../Assets/Images/logoImg.jpg'
import LogoImg from '../Assets/Images/logo.jpg'
import { Link } from 'react-router-dom'



function LandingPage() {
  return (
    <div class="">
        {/**top nav */}
        <div class="w-full bg-amber-400 py-[16px] padx flex items-center justify-between">
            <h3 class="text-[24px] font-bold max-phone:text-[18px]">UWLEI</h3>
            
            <p class="text-[13px] font-semibold text-end max-phone:text-[10px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</p>
        </div>

        {/**NAVBAR */}
        <div class="w-full bg-white py-[32px] flex items-center justify-between padx navbar">
            <div class="">
                <img alt="logo" src={LogoImg} class="w-[70px] max-phone:w-[50px]" />
            </div>

            <div class="">
                <Link to="/" class="text-amber-500 text-[21px] max-phone:text-[19px] font-semibold">Home</Link>
            </div>
        </div>

        {/**Showcase */}
        <div class="w-full h-screen relative flex flex-col padx items-start justify-center">
            {/**overlay */}
            <div class="absolute top-0 left-0 w-full h-full bg-black/80 z-[10]"></div>
            <img src={BgImg} alt="hero image" class="absolute z-[5] right-0 left-0 w-full h-full object-center object-cover" />
            <div class="flex flex-col z-[20] gap-[24px]">
                <p class="text-[20px] max-lg:text-[17px] font-bold text-amber-500 max-phone:text-[14px]">Welcome to UWLEI</p>
                <h1 class="text-white text-[56px] font-bold w-[70%] shadow max-phone:text-[36px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</h1>

                <div class="flex items-center gap-[16px]">
                    <Link to="/register" class="btn text-white bg-amber-500 hover:bg-white hover:text-amber-500 transition-all duration-500 cursor-pointer">Creat Account</Link>
                    <Link to="/login" class="btn border-[2px] border-amber-500 text-amber-500 hover:bg-white transition-all duration-500">Login</Link>
                </div>
            </div>
        </div>

        {/**FOOTER */}
        <div class="padx footer ">
            <div class="">
                <img alt="" src={LogoImg} />
            </div>

            <div class=""></div>
        </div>
    </div>
  )
}

export default LandingPage
