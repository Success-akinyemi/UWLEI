import { MdOutlineEdit } from "react-icons/md";

function AccountOverview({ handleSelectedTab, user }) {
  return (
    <div className="flex flex-col">

      <div className="flex flex-col w-full p-5 bg-primary-green text-white gap-2 rounded-[20px]">
        <h2 className="text-[28px] font-bold max-phone:text-[18px]">Welcome back, {user?.user?.username}!</h2>
        <p className="text-[17px] max-phone:text-[14px]">Your coordinator engagement journey continues. Here's an overview of your account.</p>
      </div>

      <div className="border-[1px] border-gray-300 rounded-[10px] p-[10px] text-gray-600 mt-8">
        <p className="text-[15px]">Days Since Joining</p>
        <h2 className="text-[21px] text-black font-bold">
            {user?.created_at
                ? Math.floor((new Date() - new Date(user?.created_at)) / (1000 * 60 * 60 * 24))
                : 0
            }
        </h2>
      </div>

      <div className="border-[1px] border-gray-300 rounded-[10px] text-gray-600 mt-8">
        <div className="bg-gray-50 p-[10px] border-b-[1px] border-b-gray-300 flex items-center justify-between">
            <h3 className="text-gray-900 text-[19px] font-semibold max-phone:text-[17px]">Personnal Information</h3>

         
        </div>

        <div className="p-[10px] flex items-start max-phone:flex-col max-phone:gap-2">
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Member Id Number</h2>
                    <p className="text-black text-primary-green font-medium">{user?.member_identification_number}</p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Full name</h2>
                    <p className="text-black">{user?.user?.first_name} {user?.user?.last_name}</p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Phone number</h2>
                    <p className="text-black">{user?.phone}</p>
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
                        <p className="text-black">{user?.user?.email}</p>
                        <span className="bg-green-200 text-green-500 py-0.5 px-2 rounded-[20px] text-[13px] font-semibold text-center">Verified</span>
                    </div>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Member since</h2>
                    <p className="text-black">
                        {user?.created_at ? new Date(user.created_at).toLocaleDateString() : "-"}
                    </p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">State</h2>
                    <p className="text-black">
                        {user?.state}
                    </p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Local Council Area</h2>
                    <p className="text-black">
                        {user?.local_council}
                    </p>
                </div>
                <div className="flex flex-col gap-[-3px]">
                    <h2 className="label font-semibold">Home Address</h2>
                    <p className="text-black">
                        {user?.home_address}
                    </p>
                </div>
            </div>

        </div>
      </div>

    </div>
  )
}

export default AccountOverview