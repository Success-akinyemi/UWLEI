import { LuMenu } from "react-icons/lu";

function Navbar({ toggleMenu, title }) {
  return (
        <div className="topNav border-b-[1px] border-b-gray-300 flex items-center justify-between ">
            <h3 className="text-gray-600 text-[21px] font-bold">{title}</h3>
            {/**MOBILE MENU BAR */}
            <div id="menu-btn" onClick={toggleMenu} className="hidden max-tablet:flex cursor-pointer">
                <LuMenu className="text-[28px] font-bold" />
            </div>
        </div>
  )
}

export default Navbar
