import BgImg from '../Assets/Images/logoImg.jpg'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import Cta from '../components/Cta'
import SupportOrganizations from '../components/SupportOrganizations'
import Countries from '../components/Countries'


function LandingPage() {

  const videoUrl = "https://www.youtube.com/watch?v=3BGIx92CNFw";

  // Extract the video ID from the URL
  const videoId = videoUrl.split("v=")[1];

  // Proper embed format
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`;

  return (
    <div className="">
        <Nav />

        {/**Showcase */}
        <div className="w-full h-screen relative flex flex-col padx items-start justify-center">
            {/**overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-[10]"></div>
            <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
            {/**
             * 
             <img src={BgImg} alt="hero image" className="absolute z-[5] right-0 left-0 w-full h-full object-center object-cover" />
             */}
            <div className="flex flex-col z-[20] gap-[24px]">
                <p data-aos="fade-up" data-aos-delay="100" className="text-[20px] max-lg:text-[17px] font-bold max-phone:text-[14px] text-brown" >Welcome to UWLEI</p>
                <h1 data-aos="fade-up" data-aos-delay="200" className="text-white text-[56px] font-bold w-[70%] shadow max-phone:text-[36px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</h1>

                <div data-aos="fade-up" data-aos-delay="300" className="flex items-center gap-[16px]">
                    <Link to="/register" className="btn max-phone:text-[14px] text-white border-[2px] border-primary-green bg-primary-green hover:bg-transparent hover:border-primary-green hover:text--primary-green transition-all duration-500 cursor-pointer">Join Us</Link>
                    <Link to="/login" className="btn max-phone:text-[14px] border-[2px] border-primary-green text-white hover:bg-primary-green hover:text-white transition-all duration-500">Login</Link>
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
