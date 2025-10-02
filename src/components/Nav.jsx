import LogoImg from '../Assets/Images/logo.jpg'
import { Link, Links } from 'react-router-dom'

function Nav() {

    const links = [
        {
            name: 'Home',
            link: ''
        }, 
        {
            name: 'Blogs',
            link: 'blogs'
        }, 
        {
            name: 'Contact Us',
            link: 'contact-us'
        },
        {
            name: 'Support',
            link: 'support'
        },
        //{
        //    name: 'Team',
        //    link: 'team'
        //},
    ]
  return (
    <div className=''>
        {/**top nav */}
        <div className="w-full bg-primary-green text-white py-[16px] padx flex items-center justify-between bg-gradient-to-r from-green-600 to-yellow-500">
            <h3 className="text-[24px] font-bold max-phone:text-[18px]">UWLEI</h3>
            
            <p className="text-[13px] font-semibold text-end max-phone:text-[10px]">UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL</p>
        </div>

        {/**NAVBAR */}
        <div className="w-full bg-white py-[32px] flex items-center justify-between padx navbar max-phone:flex-col gap-6">
            <Link to='/' className="flex items-start justify-start">
                <img alt="logo" src={LogoImg} className="w-[70px] rounded-full max-phone:w-[50px]" />
            </Link>

            <div className="flex items-end justify-end w-full max-phone:items-start max-phone:justify-start gap-4 max-phone:gap-2 overflow-x-auto scrollbar-hide">
                {
                    links.map((i, idx) => (
                        <Link key={idx} to={`/${i.link}`} className="btn w-fit !px-[80px] max-tablet:min-w-[40px] !py-[5px] border-[2px] text-white !bg-gradient-to-r from-green-600 to-yellow-500 hover:text-white transition-all duration-500  text-[15px] max-phone:text-[14px] font-semibold whitespace-nowrap">{i.name}</Link>
                    ))
                }
            </div>
        </div>
      
    </div>
  )
}

export default Nav
