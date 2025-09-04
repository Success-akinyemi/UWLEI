
function NewDonationModal({ showModal, toggleModal }) {
  return (
        <div className="fixed z-[999] top-0 left-0 w-screen h-screen bg-black/50 flex items-center justify-center">
            <div className="bg-white w-[45vw] max-tablet:w-[80vw] max-h-[75vh] scroll-bar py-6 px-6 rounded-[20px]">
                <div className="flex justify-end my-4">
                    {/**CLOSE ICON */}
                    <div id="menu-btn" onClick={toggleModal} className="cursor-pointer">
                        <i class="fa-solid fa-xmark text-[24px]"></i>
                    </div>
                </div>

                <div className="">
                    <h3 className='font-semibold text-amber-yellow text-[19px]'>Make Donations</h3>
                    <p className='text-[15px] '>fill up form below to make a donation</p>
                </div>
            </div>
    </div>
  )
}

export default NewDonationModal
