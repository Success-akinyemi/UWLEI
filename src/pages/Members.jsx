import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { NewMemberModal } from '../modal/NewMemberModal'
import { membersList } from '../data/memebersList'

function Members() {
    const [ showMenu, setShowMenu ] = useState(false)
    const [ showModal, setShowModal ] = useState(false)
    const membersListData = membersList
    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }

    const toggleModal = (body) => {
        setShowModal(!showModal)
    }

    return (
    <div className='flex relative'>
        {/**SIDEBAR */}
        <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
            <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>

        {/**MAIN SECTIO */}
        <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
            
            {/**TOP */}
            <div className="topNav border-b-[1px] border-b-gray-300 flex items-center justify-between">
                <h3 className="text-gray-600 text-[21px] font-bold">Members</h3>

                {/**MOBILE MENU BAR */}
                <div id="menu-btn" onClick={toggleMenu} className="hidden max-tablet:flex cursor-pointer">
                    <i className="fa-solid fa-bars text-[24px]"></i>
                </div>
            </div>

            {/**CONTENT */}
            <div className="contentpad">
                <div onClick={toggleModal} className="flex items-end justify-end">
                    <div className="btn2 bg-amber-yellow">Add new Member</div>
                </div>

                <div className="flex flex-col gap-4">
                    <h3 className='text-amber-yellow font-semibold text-[24px] '>Members you've added</h3>

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


        {/**SHOW NEW MEMBERS MODAL */}
        { showModal && <NewMemberModal showModal={showModal} toggleModal={toggleModal} /> }
    </div>
  )
}

export default Members
