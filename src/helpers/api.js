import axios from "axios"

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.baseURL = 'https://uwfl.xyz'
//axios.defaults.baseURL = "http://127.0.0.1:8000";
//axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://uwfl.xyz'

const token = localStorage.getItem('UWLEIACCESS')
const refreshToken = localStorage.getItem('UWLEIREFRESH')

//REGISTER USER
export async function register(formData) {
    try {
        const res = await axios.post('/main/register-member/', formData,
            {
                    headers: { "Content-Type": "multipart/form-data" },
            }
        )
        return res?.data
    } catch (error) {
        const res = error.response || 'Unable to register new user'
        return res?.data
    }
}

//LOGIN USER
export async function login(formData) {
    try {
        const res = await axios.post('/main/login/', formData )
        return res?.data
    } catch (error) {
        const res = error.response || 'Unable to login user'
        return res?.data
    }
}

export async function startDonation(formData) {
    try {
        const res = await axios.post(
            '/donation/start_payment/',
            formData,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        return res
    } catch (error) {
        const res = error.response || { data: 'Unable to make donation request' }
        return res.data
    }
}


//members