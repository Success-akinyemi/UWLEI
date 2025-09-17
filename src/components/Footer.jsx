import { Link } from 'react-router-dom'
import SupportImg from '../Assets/Images/img.jpg'
import SupportTwoImg from '../Assets/Images/img2.jpg'
import LogoImg from '../Assets/Images/logo.jpg'

function Footer() {

    //get year
    const year = new Date().getFullYear()
// /bg-gray-800
  return (
    <footer class="bg-gray-800 text-white py-12">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4">UWLEI</h3>
                    <p class="text-gray-400">Fostering unity and sustainable development across the African continent.</p>
                    <div class="flex space-x-4 mt-4">
                        <a href="#" class="text-gray-400 hover:text-white"><i data-feather="facebook"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i data-feather="twitter"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i data-feather="instagram"></i></a>
                        <a href="#" class="text-gray-400 hover:text-white"><i data-feather="linkedin"></i></a>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><Link to="/" class="text-gray-400 hover:text-white">Home</Link></li>
                        <li><Link to="/blogs" class="text-gray-400 hover:text-white">Blogs</Link></li>
                        <li><Link to="/register" class="text-gray-400 hover:text-white">Get Started</Link></li>
                        <li><Link to="/login" class="text-gray-400 hover:text-white">Login</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Contact Us</h4>
                    <ul class="space-y-2 text-gray-400">
                        <li class="flex items-start">
                            <i data-feather="map-pin" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>No 91 Ademola Adetokumbo  Wuse 2 Abuja.</span>
                        </li>
                        <li class="flex items-start">
                            <i data-feather="mail" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>info@uwlei.org</span>
                        </li>
                        <li class="flex items-start">
                            <i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>+2348034521334 (Nigeria)</span>
                        </li>
                        <li class="flex items-start">
                            <i data-feather="phone" class="w-4 h-4 mt-1 mr-2"></i>
                            <span>+27769192879 (South Africa)</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4">Newsletter</h4>
                    <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates on our work across Africa.</p>
                    <div class="flex">
                        <input type="email" placeholder="Your email" class="px-4 py-2 rounded-l-lg w-full text-white border-[1px] border-white" />
                        <button class="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-r-lg">
                            <i data-feather="send" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; {year} UNIQUE WOMEN FOR LEADERSHIP EMPOWERMENT INTERNATIONAL NGO. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
