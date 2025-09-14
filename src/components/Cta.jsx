import { Link } from "react-router-dom"

function Cta() {
  return (
    <section class="py-16 bg-gradient-to-r from-green-600 to-yellow-500 text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-6" data-aos="fade-up">
                Join Us in Building a United Africa
            </h2>
            <p class="text-lg max-w-2xl mx-auto mb-8" data-aos="fade-up" data-aos-delay="100">
                Whether through donations, volunteering, or partnership, your support makes a difference.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4" data-aos="fade-up" data-aos-delay="200">
                <Link to='/register'  class="bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded-lg font-medium transition duration-300">
                    Get Started
                </Link>
                {/**
                 * 
                <button class="border-2 border-white hover:bg-white hover:bg-opacity-20 px-6 py-3 rounded-lg font-medium transition duration-300">
                    Volunteer
                </button>
                 */}
            </div>
        </div>
    </section>
  )
}

export default Cta
