import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { donationList } from '../data/donationList'
import NewDonationModal from '../modal/NewDonationModal'
import Navbar from '../components/Navbar'

function Donation() {
    const [ showMenu, setShowMenu ] = useState(false)
    const [ showModal, setShowModal ] = useState(false)

    const donationListData = donationList

    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }

    const toggleModal = (body) => {
        setShowModal(!showModal)
    }

    return (
    <div className='flex relative '>
        {/**SIDEBAR */}
        <div className="w-[15%] relative max-small-pc:flex-[20%] max-tablet:flex-[0]">
            <Sidebar toggleMenu={toggleMenu} showMenu={showMenu} />
        </div>

        {/**MAIN SECTIO */}
        <div className="flex-[85%] max-small-pc:flex-[80%] w-full min-h-screen bg-gray-50">
            
            {/**TOP */}
            <Navbar toggleMenu={toggleMenu} title={'Donation'}  />

            {/**CONTENT */}
            <div className="contentpad">
                <div onClick={toggleModal} className="flex items-end justify-end">
                    <div className="btn2 bg-amber-yellow max-phone:text-[15px]">Make new donation</div>
                </div>

                <div className="flex flex-col gap-4 max-phone:mt-[20px]">
                    <h3 className='text-primary-green font-semibold text-[24px] max-phone:text-[18px]'>Past Donation Histroy</h3>

                    <div className="flex w-full overflow-x-auto">
                        <table className="min-w-full border border-gray-200 rounded-lg">
                            <thead className="text-[12px]">
                            <tr>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">S/N</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Name</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Amount</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Purpose</th>
                                <th className="px-4 py-2 text-gray-500 text-start border-b-[1px]">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {donationListData.map((donation, idx) => (
                                <tr key={idx} className="hover:bg-gray-50 text-[13px]">
                                <td className="px-4 py-2 border-b-[1px]">{idx + 1}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{donation.name}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{donation.amount}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">{donation.purpose}</td>
                                <td className="px-4 py-2 border-b-[1px] border-l-[1px]">August 4, 2025</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>

        {/**SHOW NEW MEMBERS MODAL */}
        { showModal && <NewDonationModal showModal={showModal} toggleModal={toggleModal} /> }
    </div>
  )
}

export default Donation
