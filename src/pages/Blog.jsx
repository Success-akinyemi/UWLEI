import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SupportOrganizations from '../components/SupportOrganizations'
import Cta from '../components/Cta'
import { useFetchBlog } from '../helpers/fetch'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/helpers/Spinner'


function Blog({ blogDetail }) {
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[2]
    const { data, isFetching } = useFetchBlog(pathName)

    console.log('BLOG DATA', data)

  return (
    <div className="">
        <Nav />
        
        {/**BLOG DETAIL */}
        <div className="">
            {
                isFetching ? (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className=""></div>
                )
            }
        </div>

        {/**Support partners */}
        <SupportOrganizations />
        
        {/**CTA */}
        <Cta />

        <Footer />
    </div>
  )
}

export default Blog
