import { MdOutlineEdit } from "react-icons/md";

function AccountOverview({ handleSelectedTab }) {
  return (
    <div className="flex flex-col">

      <div className="flex flex-col w-full p-5 bg-amber-yellow text-white gap-2 rounded-[20px]">
        <h2 className="text-[28px] font-bold max-phone:text-[18px]">Welcome back, user!</h2>
        <p className="text-[17px] max-phone:text-[14px]">Your coordinator engagement journey continues. Here's an overview of your account.</p>
      </div>

      <div className="border-[1px] border-gray-300 rounded-[10px] p-[10px] text-gray-600 mt-8">
        <p className="text-[15px]">Days Since Joining</p>
        <h2 className="text-[21px] text-black font-bold">20</h2>
      </div>

      <div className="border-[1px] border-gray-300 rounded-[10px] text-gray-600 mt-8">
        <div className="bg-gray-50 p-[10px] border-b-[1px] border-b-gray-300 flex items-center justify-between">
            <h3 className="text-gray-900 text-[19px] font-semibold max-phone:text-[17px]">Personnal Information</h3>

            <div onClick={() => handleSelectedTab('accountSettings')} className="flex items-center gap-0.5 text-amber-yellow cursor-pointer">
                Edit
                <MdOutlineEdit />
            </div>
        </div>

        <div className="p-[10px] flex items-start max-phone:flex-col max-phone:gap-2">
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Full name</h2>
                    <p className="text-black">John Doe</p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Phone number</h2>
                    <p className="text-black">09012345678</p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Status</h2>
                    <p className="text-black">Verified</p>
                </div>
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Email</h2>
                    <div className="flex items-center gap-1">
                        <p className="text-black">johndoe123@gmail.com</p>
                        <span className="bg-green-200 text-green-500 py-0.5 px-2 rounded-[20px] text-[13px] font-semibold text-center">Verified</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Member since</h2>
                    <p className="text-black">16 August 2025</p>
                </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default AccountOverview
