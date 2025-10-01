import { useState } from "react"
import Countries from "../components/Countries"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { startDonation } from "../helpers/api"
import { notify } from "../utils/taost"
import MastcardImg from '../Assets/Images/masterCard.png'
import VisaCardImg from '../Assets/Images/visa.png'
import VerveImg from '../Assets/Images/verve.png'

function Support() {
    const [ formData, setFormData ] = useState({})
    const [ loading, setLoading ] = useState(false)

    const cards = [
        {
            img: MastcardImg
        },
        {
            img: VisaCardImg
        },
        {
            img: VerveImg
        }
    ]

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleDonationRequest = async () => {
        if(loading) return
        if(!formData?.amount) return notify('error', 'Please enter amount to donate')
        if(!formData?.purpose) return notify('error', 'Please enter purpose of donatation')
        
        try {
            setLoading(true)
            const res = await startDonation(formData)

            console.log('DLONATIOE RES', res)
        } catch (error) {
            
        } finally {
            setLoading(false)
        }
    }

  return (
    <div className="">
        <Nav />

        <div className="py-12 bg-gray-100 flex flex-col items-center justify-center flex-wrap">
                <div className="w-full px-4" data-aos='fade-up' >
                    <h3 className='texth2 mb-0'>Support us</h3>
                    <p className='text-[15px] text-center'>fill up form below to make a support donation</p>
                </div>

                <form onSubmit={handleDonationRequest} data-aos='fade-down' className="flex mt-8 flex-col gap-3  w-[500px] max-phone:w-[85vw]">
                    <div className="inputGroup">
                        <label className="label text-[21px] font-semibold">Amount</label>
                        <input type="number" id='amount' onChange={handleChange} className="input" />
                    </div>
                    <div className="inputGroup">
                        <label className="label text-[21px] font-semibold">Purpose of donation</label>
                        <input type="text" id='purpose' onChange={handleChange} className="input" />
                    </div>

                    <div className="mt-4">
                        <button onClick={handleDonationRequest} className="btn2 bg-amber-yellow">{ loading ? 'Please wait...' : 'Make Donation' }</button>
                    </div>

                    {/**CARD */}
                    <div className="flex items-center justify-center gap-4">
                        {
                            cards.map((i, idx) => (
                                <img key={idx} alt="master card" src={i.img} className="w-[50px]" />
                            ))
                        }
                    </div>
                </form>
        </div>
      
        {/**COUNTRIES */}
        <Countries />

        {/**CTA */}
        <Cta />

        {/**FOOTER */}
        <Footer />
    </div>
  )
}

export default Support
