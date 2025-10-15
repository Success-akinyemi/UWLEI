import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { NewMemberModal } from '../modal/NewMemberModal'
import { membersList } from '../data/memebersList'
import apiCall from '../helpers/apiCall'

function Members() {
    const [ showMenu, setShowMenu ] = useState(false)
    const [ showModal, setShowModal ] = useState(false)    
    const [membersListData, setMembersListData] = useState(membersList);
    //const membersListData = membersList
    const [ loading, setLoading ] = useState(false)    

    const toggleMenu = (body) => {
        setShowMenu(!showMenu)
    }

    const toggleModal = (body) => {
        setShowModal(!showModal)
    }

        useEffect(() => {
        const fetchMembers = async () => {
        try {
            const token = localStorage.getItem("UWLEIACCESS");
            const storedUser = localStorage.getItem("user");

            if (storedUser) setMembersListData(JSON.parse(storedUser));

            if (token) {
            const res = await apiCall.get(`/main/my-added-members/`, {
                headers: { Authorization: `Bearer ${token}` },
            });

            console.log("MEMBERS", res?.data);
            setMembersListData(res.data);
            }
        } catch (err) {
            console.error("Error fetching members:", err);
        } finally {
            setLoading(false);
        }
        };

        fetchMembers();
    }, []);

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
                    <div className="btn2 bg-amber-yellow">Add new Beneficiaries</div>
                </div>

                <div className="flex flex-col gap-4 max-phone:mt-4">
                    <h3 className='text-primary-green font-semibold text-[24px] '>Beneficiaries you've added</h3>

                    <div className="flex w-full overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="text-[12px]">
                  <tr>
                    {[
                      "S/N",
                      "Name",
                      "Email",
                      "Occupation",
                      "Country",
                      "State",
                      "Local Council",
                      "Home Address",
                      "Phone Number",
                      "National ID/Passport",
                      "Action",
                    ].map((header, i) => (
                      <th
                        key={i}
                        className="px-4 py-2 text-gray-500 text-start border-b-[1px]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan="11"
                        className="text-center py-6 text-gray-400"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : membersListData.length === 0 ? (
                    <tr>
                      <td
                        colSpan="11"
                        className="text-center py-6 text-gray-400"
                      >
                        No members found
                      </td>
                    </tr>
                  ) : (
                    membersListData.map((member, idx) => (
                      <tr key={idx} className="hover:bg-gray-50 text-[13px]">
                        <td className="px-4 py-2 border-b-[1px]">{member?.member_identification_number}</td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.first_name} {member.last_name}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.email}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.occupation}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.country}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.state}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.local_council}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.home_address}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.phone}
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          {member.national_id ?
                            <img src={member.national_id} className='w-8 h-8 rounded-full'/> : <img src={member.passport} className='w-8 h-8 rounded-full' />  
                        }
                        </td>
                        <td className="px-4 py-2 border-b-[1px] border-l-[1px]">
                          <div className="flex items-center gap-3">
                            <span className="text-green-400 cursor-pointer">
                              Edit
                            </span>
                            <span className="text-red-400 cursor-pointer">
                              Delete
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
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
