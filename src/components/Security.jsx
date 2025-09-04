import { useState } from "react"

function Security() {
    const [ changePassword, setChangePassword ] = useState(false)
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }

    const handleChangePassword = async () => {

    }
    
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

            <div className={`flex items-center justify-between border-b-[1px] border-b-gray-300 w-full py-[20px] px-[10px] ${changePassword ? 'flex-col w-full' : ''}`}>
                <div className={`text-[17px] max-phone:text-[14px] font-semibold ${ changePassword ? 'w-full' : ''}`}>
                    Password
                </div>
                {
                    !changePassword && (
                        <div className="">
                            <div onClick={() => setChangePassword(true)} className="bg-gray-300 text-gray-500 py-[3px] px-[6px] cursor-pointer">Change Password</div>
                        </div>
                    )
                }
                {
                    changePassword && (
                        <div className="flex flex-col gap-4 w-full mt-[8px]">
                            <div className="inputGroup">
                                <label className="label font-semibold text-gray-500">Old Password</label>
                                <input type="text" id="oldPassword" onChange={handleChange} className="input" />
                            </div>
                            <div className="inputGroup">
                                <label className="label">New Password</label>
                                <input type="password" id="newPassword" onChange={handleChange} className="input" />
                            </div>
                            <div className="inputGroup">
                                <label className="label">Confirm New Password</label>
                                <input type="password" id="confirmPassword" onChange={handleChange} className="input" />
                            </div>

                            <div className="flex items-start gap-4">
                                <div onClick={handleChangePassword} className="btn2 bg-amber-yellow">Update Password</div>
                                <div onClick={() => setChangePassword(false)} className="btn2 bg-gray-500">Cancel</div>
                            </div>
                        </div>
                    )
                }
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
