import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import { ToastContainer } from 'react-toastify'
import { useEffect, useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Donation from './pages/Donation'
import Members from './pages/Members'
import Profile from './pages/Profile'
import Blogs from './pages/Blogs'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    const [selectedCard, setSelectedCard] = useState('')

    const closePopup = () => {
        setSelectedCard(null);
    };

    useEffect(() => {
        AOS.init({
        duration: 1000, 
        once: true,    
        });
    }, []);

    const renderPopup = () => {
        switch (selectedCard) {
            case 'passwordsetsuccessful':
                return (
                    <div>

                    </div>
                )
        }
    }
    
    {/**intro */}
  return (
    <div className='app'>
        {
            selectedCard && (
                <>
                    <div className='popup-overlay z-[9999] fixed flex items-center justify-center top-0 left-0 w-[100vw] h-[100vh] bg-black/60 '>
                        <div className={`z-50 w-[576px] max-small-phone:w-[95%] max-phone:w-[90%] shadow-xl flex flex-col justify-center overflow-x-hidden`}>
                            <div className='w-full'>
                                {renderPopup()}
                            </div>
                        </div>
                    </div>
                </>
            )
        }

        <ToastContainer position='top-right' />
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LandingPage />} />

                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/members' element={<Members />} />
                <Route path='/donation' element={<Donation />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/blogs' element={<Blogs />} />


            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
