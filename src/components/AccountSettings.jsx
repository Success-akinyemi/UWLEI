import { useState } from "react"

function AccountSettings() {
    const [ changeEmail, setChangeEmail ] = useState(false)
    const [ changeMobile, setChangeMobile ] = useState(false)
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value})
    }

    const handleChangeEmail = async () => {

    }

    const handleChangeMobile = async () => {

    }

  return (
    <div className="flex flex-col">
        <div className="border-[1px] border-gray-300 rounded-[10px] text-gray-600 mt-8">
            {/* <div className="bg-gray-50 p-[10px] border-b-[1px] border-b-gray-300 flex items-center justify-between">
                <h3 className="text-gray-900 text-[19px] font-semibold max-phone:text-[17px]">Account Settings</h3>

            </div> */}

      {/*       <div className="p-[10px] flex items-start flex-wrap flex-col">
                <div className="w-full">
                    <div className="flex flex-col border-b-[1px] border-b-gray-300 w-full py-[20px] px-[10px]">
                    

                        <div className="">
                            <p>Johndoe@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <div className="flex flex-col w-full py-[20px] px-[10px]">
                      

                        <div className="">
                            <p>09012345678</p>
                        </div>
                    </div>
                </div>

            </div> */}
        </div>


        <div className="border-[1px] border-gray-300 rounded-[10px] text-gray-600 mt-8">
            <div className="bg-gray-50 p-[10px] border-b-[1px] border-b-gray-300 flex items-center justify-between">
                <h3 className="text-gray-900 text-[19px] font-semibold max-phone:text-[17px]">Data & Privacy</h3>

            </div>

            <div className="p-[10px] flex items-start flex-wrap flex-col">

                <div className="w-full">
                    <div className="flex flex-col gap-3 w-full py-[20px] px-[10px]">
                        <div className="text-[17px] max-phone:text-[14px] font-semibold flex items-center justify-between">
                            <p className="">Delete Account</p>
                            <div className="bg-red-500 text-white font-normal py-[8px] px-[12px] cursor-pointer rounded-[10px]">Delete Account</div>
                        </div>

                        <div className="">
                            <p className="max-phone:text-[15px]">Permanently delete your account and all associated data</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default AccountSettings