import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { BASE_URL } from "../helpers/url";

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
          if (res.data.payment.status === "success") {
            setStatus("success");
          } else {
            setStatus("failed");
          }
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

  if (loading) return <p className="text-center py-12">Verifying your payment...</p>;

  if (status === "success")
    return <h2 className="text-green-600 text-center py-12">✅ Payment Successful! Thank you for your donation.</h2>;

  if (status === "failed")
    return <h2 className="text-red-600 text-center py-12">❌ Payment Failed. Please try again.</h2>;

  return <h2 className="text-gray-600 text-center py-12">Something went wrong verifying payment.</h2>;
}

export default PaymentVerify;
