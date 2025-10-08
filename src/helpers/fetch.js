import { useEffect, useState } from "react";
import axios from 'axios'

//axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL
axios.defaults.baseURL = 'https://uwfl.xyz'
//axios.defaults.baseURL = "http://127.0.0.1:8000";
//axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://uwfl.xyz'

const token = localStorage.getItem('UWLEIACCESS')
const refreshToken = localStorage.getItem('UWLEIREFRESH')

export function useFetchBlog(query){
    const [ blogPost, setBlogPost] = useState({ isFetching: true, data: null, status: null, serverError: null, })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data, status} = !query ? await axios.get(`/blog`) : await axios.get(`/blog/${query}`)
                //console.log('Data from Hooks>>>', data, 'STATUS', status)

                if(status === 200){
                    setBlogPost({ isFetching: false, data: data, status: status, serverError: null})
                } else{
                    setBlogPost({ isFetching: false, data: null, status: status, serverError: null})
                }
            } catch (error) {
                setBlogPost({ isFetching: false, data: null, status: null, serverError: error})
            }
        }
        fetchData()
    }, [query])

    return blogPost
}