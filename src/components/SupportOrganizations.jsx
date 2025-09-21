import React from 'react'
import ImgOne from '../Assets/Images/img2.jpg'

function SupportOrganizations() {
  return (
    <section class="py-16 bg-gray-100">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12" data-aos="fade-up">
                Our Valued Partners
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/**Partner 1 */}
                <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300" data-aos="fade-up">
                    <div class="flex justify-center mb-4">
                        <img src={ImgOne} alt="African Development Foundation" class="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <h3 class="text-xl font-semibold text-center text-gray-800 mb-2">African Development Foundation</h3>
                    <p class="text-gray-600 text-center mb-4">Providing grants and technical assistance to community-based organizations across Africa.</p>
                </div>
                
                {/**Partner 2 */}
                <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex justify-center mb-4">
                        <img src="http://static.photos/green/200x200/2" alt="United Nations Economic Commission for Africa" class="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <h3 class="text-xl font-semibold text-center text-gray-800 mb-2">UN Economic Commission for Africa</h3>
                    <p class="text-gray-600 text-center mb-4">Supporting our initiatives with research, policy advice, and capacity building.</p>
                </div>
                
                {/**Partner 3 */}
                <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex justify-center mb-4">
                        <img src="http://static.photos/yellow/200x200/3" alt="African Union Development Agency" class="w-20 h-20 rounded-full object-cover" />
                    </div>
                    <h3 class="text-xl font-semibold text-center text-gray-800 mb-2">African Union Development Agency</h3>
                    <p class="text-gray-600 text-center mb-4">Collaborating on continent-wide development projects and initiatives.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SupportOrganizations
