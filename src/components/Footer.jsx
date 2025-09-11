import SupportImg from '../Assets/Images/img.jpg'
import SupportTwoImg from '../Assets/Images/img2.jpg'
import LogoImg from '../Assets/Images/logo.jpg'

function Footer() {
  return (
        <div className="padx footer bg-primary-green flex flex-col mt-auto">
            <div className="flex flex-col w-full gap-8 mt-[-30px]">
                <div className="text-white flex items-center justify-center w-full flex-col">
                    <h3 className='text-[56px] max-phone:text-[26px]'>Supported By:</h3>
                </div>

                <div className="flex items-center justify-center gap-10 flex-wrap max-tablet:flex-col max-tablet:items-center max-tablet:gap-4">
                    <img alt="" src={LogoImg} className='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportImg} className='rounded-full w-[120px] h-[120px]' />
                    <img alt="" src={SupportTwoImg} className='rounded-full w-[120px] h-[120px] object-center' />
                </div>
            </div>

            <div className="text-white">
            </div>
        </div>
  )
}

export default Footer
