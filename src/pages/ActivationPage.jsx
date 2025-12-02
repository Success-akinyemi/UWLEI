import { useEffect, useState } from "react"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import Nav from "../components/Nav"
import { startActivation, verifyPayment } from "../helpers/api"
import { notify } from "../utils/taost"
import { useNavigate } from "react-router-dom"

function ActivationPage() {
  const [loading, setLoading] = useState(false)

    const queryParams = new URLSearchParams(window.location.search);
    const reference = queryParams.get("reference");
    const navigate = useNavigate()

    useEffect(() => {
        if(reference) {
            const validateAccount = async () => {
            try {
                const token = localStorage.getItem("UWLEIACCESS");

                const formData = { reference }
                if (token) {
                    const res = await verifyPayment(formData)
                    console.log('VERIFY PAYEM', res.data)
                    if(res.data.status) {
                        notify('success', res.data.message)

                        setTimeout(() => {
                            navigate('/dashboard')
                        }, 2000)
                    } else {
                        notify('error', res.data.message || 'Unable to verify payment')
                    }
                }
            } catch (err) {
                console.error("Error validating account:", err);
            } finally {
                setLoading(false);
            }
            };

            validateAccount();
        }
    }, [reference])

    const handleAccountActivation = async (e) => {
    if(loading) return
    e.preventDefault();

    try {
        setLoading(true)
        const formData = {}
        const res = await startActivation(formData)
        //console.log('RES', res)

        if(res.data.status) {
            window.location.href = res.data.authorization_url
        } else {
            notify('error', 'Unable to process request')
        }
        
    } catch (error) {
        
    } finally {
        setLoading(false)
    }
  }

  return (
    <div className="">
        <Nav />
        
        {/**BLOGS */}
        <div className="py-12 bg-gray-100 flex flex-col items-center justify-center flex-wrap overflow-hidden">
            <div className="" data-aos='fade-up' >
                <h3 className='texth2 mb-0'>Activate Account</h3>
                {
                    reference ? (
                        <p className="text-[15px] text-center p-8">Verifying account</p>
                    ) : (
                        <p className='text-[15px] text-center p-8'>In order to fully have access to your account, click on the button below to begin activation of account to access dashboard</p>
                    )
                }
            </div>


            <div className="">
                {
                    reference ? (
                        <>
                            <button disabled>Verifying....</button>
                        </>
                    ) : (
                        <button disabled={loading} onClick={handleAccountActivation} className="btn text-white font-medium">
                            {
                                loading ? (
                                    'Please Wait....'
                                ) : (
                                    'Proceed to activate account'
                                )
                            }
                        </button>
                    )
                }
            </div>
        </div>

        
        {/**CTA */}
        <Cta />

        <Footer />
    </div>
  )
}

export default ActivationPage
