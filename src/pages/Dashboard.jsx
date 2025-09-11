import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { membersList } from '../data/memebersList'

function Dashboard() {
    const [ showMenu, setShowMenu ] = useState(false)

    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }
    const membersListData = membersList


    return (
    <div className='flex relative '>
        {/**SIDEBAR */}
        <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
            <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>

        {/**MAIN SECTIO */}
        <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
            
            {/**TOP */}
            <Navbar toggleMenu={toggleMenu} title={'Dashboard'}  />

            {/**CONTENT */}
            <div className="contentpad">
                <h3 className='text-[24px] max-phone:text-[19px] font-bold'>Hello, <span className='text-primary-green'>Amaka Peter</span></h3>

                <h5 className='mt-8'>Account Overview</h5>
                <div className="mt-6 flex gap-6 max-phone:flex-col">
                    <div className="flex flex-1 p-4 flex-col rounded-[10px] bg-primary-green">
                        <h2 className='text-white text-[20px] font-semibold'>Total Beneficiaries Added</h2>
                        <p className='text-[25px] text-white'>25</p>
                    </div>
                    <div className="flex flex-1 p-4 flex-col rounded-[10px] bg-amber-yellow">
                        <h2 className='text-white text-[20px] font-semibold'>Total Donations</h2>
                        <p className='text-[25px] text-white'>30</p>
                    </div>
                </div>

                <div className="mt-16">
                    {/**BENEFICAIARIES TABLE */}
                    <div className="flex w-full overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="text-[12px]">
                            <tr>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">S/N</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Name</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Email</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Occupation</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Country</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">State</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Local Council</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Home Address</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Phone Number</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">National ID</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {membersListData.map((member, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 text-[13px]">
                                <td className="px-4 py-2 border-b-[1px]">{idx + 1}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.firstName} {member.lastName}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.email}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.occupation}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.country}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.state}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.localCouncil}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.homeAddress}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.phoneNumber}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{member.nationalId}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                                    <div className="flex items-center gap-3">
                                        <span className='text-green-400 cursor-pointer'>Edit</span>
                                        <span className='text-red-400 cursor-pointer'>Delete</span>
                                    </div>
                                </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Dashboard
