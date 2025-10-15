import { LuMenu } from "react-icons/lu";

function Navbar({ toggleMenu, title, profile }) {
  return (
        <div className="topNav border-b-[1px] border-b-gray-300 flex items-center justify-between ">
            <div className="flex items-center gap-2">
                { profile && (
                    <img src={profile} className="h-8 w-8 rounded-full border-[1px] border-black" />
                )}
                <h3 className="text-gray-600 text-[21px] font-bold">{title}</h3>
            </div>
            {/**MOBILE MENU BAR */}
            <div id="menu-btn" onClick={toggleMenu} className="hidden max-tablet:flex cursor-pointer">
                <LuMenu className="text-[28px] font-bold" />
            </div>
        </div>
  )
}

export default Navbar
