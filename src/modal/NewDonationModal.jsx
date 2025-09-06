import { useState } from "react"
import { IoClose } from "react-icons/io5"

function NewDonationModal({ showModal, toggleModal }) {
    const [ formData, setFormData ] = useState({})

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }
  return (
        <div className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[45vw] max-tablet:w-[80vw] max-h-[75vh] scroll-bar py-6 px-6 rounded-[20px]">
                <div className="flex justify-end my-4">
                    {/**CLOSE ICON */}
                    <div id="menu-btn" onClick={toggleModal} className="cursor-pointer">
                        <IoClose className='text-[32px] font-bold' />
                    </div>
                </div>

                <div className="">
                    <h3 className='font-semibold text-primary-green text-[19px]'>Make Donations</h3>
                    <p className='text-[15px] '>fill up form below to make a donation</p>
                </div>

                <div className="flex flex-col gap-3 mt-5">
                    <div className="inputGroup">
                        <label className="label">Amount</label>
                        <input type="number" id='amount' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label">Purpose of donation</label>
                        <input type="text" id='purpose' onChange={handleChange} className="input" />
                    </div>

                    <div className="mt-4">
                        <div className="btn2 bg-amber-yellow">Make Donation</div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default NewDonationModal
