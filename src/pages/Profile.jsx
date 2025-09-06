import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { CgProfile } from "react-icons/cg";
import AccountOverview from '../components/AccountOverview';
import Security from '../components/Security';
import AccountSettings from '../components/AccountSettings';
import Activity from '../components/Activity';
import Navbar from '../components/Navbar';

function Profile() {
    const [ showMenu, setShowMenu ] = useState(false)
    const [ activeTab, setActiveTab ] = useState('accountOverview')

    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }

    const profileTabs = [
        {
            name: 'Account Overview',
            slug: 'accountOverview'
        },
        {
            name: 'Security',
            slug: 'security'
        },
        {
            name: 'Account Settings',
            slug: 'accountSettings'
        },
        {
            name: 'Activity',
            slug: 'activity'
        }
    ]

    const handleSelectedTab = (slug) => {
        setActiveTab(slug)
    }

    return (
    <div className='flex relative '>
        {/**SIDEBAR */}
        <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
            <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>

        {/**MAIN SECTION */}
        <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
            
            {/**TOP */}
            <Navbar toggleMenu={toggleMenu} title={'Profile'}  />
            
            {/**CONTENT */}
            <div className="contentpad">
                {/**TOP CARD */}
                <div className="w-full relative overflow-hidden rounded-[20px]">
                    <div className="w-full h-[200px] max-phone:h-[150px] bg-brown"></div>

                    <div className="w-full h-[200px] bg-black"></div>

                    {/**abosolute card */}
                    <div className="absolute top-1/2 left-[3%] -translate-y-1/2 flex justify-center">

                        <div className="flex gap-[20px] items-end">
                            {/**Circle */}
                            <div className="h-[150px] w-[150px] max-phone:h-[120px] max-phone:w-[120px] border-[3px] border-white rounded-full">
                                <CgProfile className='w-full h-full text-white' />
                            </div>

                            {/**INFO */}
                            <div className="flex flex-col gap-3 text-white mt-[1rem] max-phone:mt-[1rem]">
                                <h2 className='text-[24px] font-bold max-phone:text-[20px]'>John Doe</h2>
                                <p className='text-[17px] max-phone:text-[15px]'>johndoe@gmail.com</p>

                                <div className="flex items-center gap-4">
                                    <div className="btn bg-white font-semibold text-white">Edit Profile</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-2 mt-[2rem]">
                    <div className="bg-white shadow-2xl rounded-t-[20px] px-[0px] border-[1px] border-gray-200">
                        <div className="flex items-center gap-5 max-phone:gap-2">
                            {
                                profileTabs.map((i, idx) => (
                                    <div key={idx} onClick={() => handleSelectedTab(i.slug)} className={`flex flex-col gap-2 p-3 text-center font-medium cursor-pointer max-phone:text-[14px] ${ i.slug === activeTab ? `text-primary-green border-b-[2px] border-b-primary-green` : `hover:text-primary-green hover:border-b-[2px] hover:border-b-primary-green` } border-b-[2px] border-b-transparent`}>
                                        {i.name}
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="bg-white shadow-2xl rounded-b-[20px]  border-[1px] border-gray-200 py-[25px] px-[20px]">
                        {activeTab === 'accountOverview' && (<AccountOverview handleSelectedTab={handleSelectedTab} />)}
                        {activeTab === 'security' && (<Security />)}
                        {activeTab === 'accountSettings' && (<AccountSettings />)}
                        {activeTab === 'activity' && (<Activity />)}
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Profile
