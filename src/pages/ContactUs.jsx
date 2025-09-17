import Countries from "../components/Countries"
import Cta from "../components/Cta"
import Footer from "../components/Footer"
import Nav from "../components/Nav"

function ContactUs() {
  return (
    <div className="">
        <Nav />

        <div className="py-12 bg-gray-100 flex flex-col items-center justify-center flex-wrap">
            <h2 class="texth2" data-aos="fade-up">
                Get In Touch With Us
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-1 gap-8">
                {/**Address */}
                <div className="flex flex flex-col items-center justify-center">
                    <h3 className="text-gray-800 text-[21px] font-semibold">Office Address</h3>

                    <div className="flex flex-col mt-5 gap-3">
                        <span class="flex items-start">
                            <i data-feather="map-pin" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>No 91 Ademola Adetokumbo  Wuse 2 Abuja.</span>
                        </span>
                    </div>
                </div>

                {/**PHONE NUMBER */}
                <div className="flex flex flex-col items-center justify-center">
                    <h3 className="text-gray-800 text-[21px] font-semibold">Call us</h3>

                    <div className="flex flex-col mt-5 gap-3 items-center justify-center">
                        <a href="tel:+2348034521334" class="flex items-start">
                            <i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>+2348034521334 (Nigeria)</span>
                        </a>
                        <a href="tel:+27769192879" class="flex items-start">
                            <i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>+27769192879 (South Africa)</span>
                        </a>
                    </div>
                </div>

            </div>

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

export default ContactUs
