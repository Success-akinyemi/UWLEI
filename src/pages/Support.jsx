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
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleDonationRequest = async () => {
    if (loading) return;
    if (!formData?.email) return notify('error', 'Please enter your email');
    if (!formData?.amount) return notify('error', 'Please enter amount to donate');
    if (!formData?.purpose) return notify('error', 'Please enter purpose of donation');

    try {
      setLoading(true);
      const res = await startDonation(formData);

      console.log('DONATION RESPONSE:', res);

      if (res?.data?.status) {
        const payUrl = res.data.data.authorization_url;
        window.location.href = payUrl; 
      } else {
        notify('error', res?.data?.message || "Failed to initialize payment.");
      }
    } catch (error) {
      notify('error', "Unable to start donation.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Nav />
      <div className="py-12 bg-gray-100 flex flex-col items-center justify-center">
        <h3 className="texth2 mb-0">Support us</h3>
        <p className="text-[15px] text-center">Fill the form below to make a donation</p>

        <form
          onSubmit={(e) => { e.preventDefault(); handleDonationRequest(); }}
          className="flex mt-8 flex-col gap-3 w-[500px] max-phone:w-[85vw]"
        >
          <div className="inputGroup">
            <label className="label text-[21px] font-semibold">Email</label>
            <input type="email" id="email" onChange={handleChange} className="input" />
          </div>
          <div className="inputGroup">
            <label className="label text-[21px] font-semibold">Amount</label>
            <input type="number" id="amount" onChange={handleChange} className="input" />
          </div>
          <div className="inputGroup">
            <label className="label text-[21px] font-semibold">Purpose of donation</label>
            <input type="text" id="purpose" onChange={handleChange} className="input" />
          </div>

          <div className="mt-4">
            <button type="submit" className="btn2 bg-amber-yellow">
              {loading ? "Please wait..." : "Make Donation"}
            </button>
          </div>
        </form>
      </div>

      <Countries />
      <Cta />
      <Footer />
    </div>
  );
}


export default Support
