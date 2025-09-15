import BgImg from '../Assets/Images/logoImg.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Cta from '../components/Cta'
import SupportOrganizations from '../components/SupportOrganizations'
import Countries from '../components/Countries'


function LandingPage() {
  return (
    <div className="">
        <Nav />

        {/**Showcase */}
        <div className="w-full h-screen relative flex flex-col padx items-start justify-center">
            {/**overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[10]"></div>
            <img src={BgImg} alt="hero image" className="absolute z-[5] right-0 left-0 w-full h-full object-center object-cover" />
            <div className="flex flex-col z-[20] gap-[24px]">
                <p data-aos="fade-up" data-aos-delay="100" className="text-[20px] max-lg:text-[17px] font-bold max-phone:text-[14px] text-brown" >Welcome to UWLEI</p>
                <h1 data-aos="fade-up" data-aos-delay="200" className="text-white text-[56px] font-bold w-[70%] shadow max-phone:text-[36px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</h1>

                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-[16px]">
                    <Link to="/register" className="btn text-white border-[2px] border-primary-green bg-primary-green hover:bg-transparent hover:border-primary-green hover:text--primary-green transition-all duration-500 cursor-pointer">Creat Account</Link>
                    <Link to="/login" className="btn border-[2px] border-primary-green text-white hover:bg-primary-green hover:text-white transition-all duration-500">Login</Link>
                </div>
            </div>
        </div>

        {/**COutrie */}
        <Countries />

        {/**Support partners */}
        <SupportOrganizations />
        
        {/**CTA */}
        <Cta />
        
        {/**FOOTER */}
        <Footer />
    </div>
  )
}

export default LandingPage
