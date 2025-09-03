
function Security() {
  return (
      <div className="border-[1px] border-gray-300 rounded-[10px] text-gray-600 mt-8">
        <div className="bg-gray-50 p-[10px] border-b-[1px] border-b-gray-300 flex items-center justify-between">
            <h3 className="text-gray-900 text-[19px] font-semibold max-phone:text-[17px]">Account Security</h3>

        </div>

        <div className="p-[10px] flex items-start flex-wrap flex-col">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 w-full py-[20px] px-[10px]">
                <div className="text-[17px] max-phone:text-[14px] font-semibold">
                    Email Verification
                </div>
                <div className="">
                    <span className="bg-green-200 text-green-500 py-0.5 px-2 rounded-[20px] text-[13px] font-semibold text-center">Verified</span>
                </div>
            </div>

            <div className="flex items-center justify-between border-b-[1px] border-b-gray-300 w-full py-[20px] px-[10px]">
                <div className="text-[17px] max-phone:text-[14px] font-semibold">
                    Enable 2FA
                </div>
                <div className="">
                    <div className="bg-gray-300 text-gray-500 py-[3px] px-[6px]">Change Password</div>
                </div>
            </div>

            <div className="flex items-center justify-between w-full py-[20px] px-[10px]">
                <div className="text-[17px] max-phone:text-[14px] font-semibold">
                    Two-Factor Authentication
                </div>
                <div className="">
                    <div className="bg-green-600 text-white py-[3px] px-[6px]">Enable 2FA</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Security
