import { Link, useLocation } from 'react-router-dom'
import LogoImg from '../Assets/Images/logo.jpg'
import { menuLinks } from '../data/menuLinks'
import { IoClose } from "react-icons/io5";

function Sidebar({ toggleMenu, showMenu }) {
  const links = menuLinks
  const loc = useLocation()
  const pathName = loc.pathname.split('/')[1]

  return (
    <div
      id="sidebar"
      className={`
        sidebar
        w-[15%] max-small-pc:w-[20%] h-screen border-r border-r-gray-300 
        fixed left-0 top-0 flex flex-col bg-white z-50
        transition-transform duration-300 ease-in-out
        ${showMenu ? 'max-tablet:translate-x-0' : 'max-tablet:-translate-x-full'}
        max-tablet:w-[80%] max-tablet:h-screen
      `}
    >
      <div className="logo flex items-center justify-between gap-2 p-4">
        <div className="">
            <img src={LogoImg} alt="logo" className="h-10 w-10 object-cover" />
            <p className="font-semibold text-lg !text-brown">UWLEI</p>
        </div>

        {/**Close icon */}
        <div className="hidden max-tablet:flex cursor-pointer">
            <div onClick={toggleMenu} className="cursor-pointer">
                <IoClose className='text-[32px] font-bold' />
            </div>
        </div>
      </div>

      <div className="flex flex-col gap-[4px] menuLinks max-tablet:text-[19px] p-2">
        {links.map((i, idx) => (
          <Link
            key={idx}
            to={`/${i.link}`}
            className={`menuLink p-2 rounded ${
              pathName === i.link ? 'bg-primary-green !text-white font-semibold' : ''
            }`}
            onClick={toggleMenu} 
          >
            {i.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
