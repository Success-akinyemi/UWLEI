import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { BASE_URL } from "../helpers/url";
import Nav from "../components/Nav";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Checked from "../components/Checked";
import Failed from "../components/Failed";

function PaymentVerify() {
  const [params] = useSearchParams();
  const reference = params.get("reference");
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (reference) {
      axios
        .get(`${BASE_URL}/donation/verify_payment/${reference}/`)
        .then((res) => {
          setStatus(res.data.payment.status === "success" ? "success" : "failed");
        })
        .catch((err) => {
          console.error("Verification error:", err);
          setStatus("error");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [reference]);

  let content;

  if (loading) {
    content = (
        <div className="flex items-center justofy-center flex-col">
            <div class="w-10 h-10 border-4 border-primary-green border-t-transparent rounded-full animate-spin" aria-hidden="true"></div>
            <p className="text-center py-8">Verifying your payment...</p>;
        </div>
    )
  } else if (status === "success") {
    content = (
        <div className="flex items-center justofy-center flex-col">
            <Checked color="#16A34A" />
            <h2 className="text-green-600 text-center py-12 text-[1.5rem]">
                Payment Successful! <br /> Thank you for your donation.
            </h2>
            <Link to='/'  class="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Home
            </Link>
        </div>
    );
  } else if (status === "failed") {
    content = (
        <div className="flex items-center justofy-center flex-col">
            <Failed />
            <h2 className="text-red-600 text-center py-12 text-[1.5rem]">
                Payment Failed. <br /> Please try again.
            </h2>
            <Link to='/support'  class="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-lg font-medium transition duration-300">
                Donate
            </Link>
        </div>
    );
  } else {
    content = (
      <h2 className="text-gray-600 text-center py-12">
        Something went wrong verifying payment.
      </h2>
    );
  }

  return (
    <div>
        <Nav />
        <div className="my-12">
            {content}
        </div>
        <Cta />
        <Footer />
    </div>
  ) ;
}

export default PaymentVerify;
