import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { blogsData } from '../data/blogs'
import SupportOrganizations from '../components/SupportOrganizations'
import Cta from '../components/Cta'
import { useFetchBlog } from '../helpers/fetch'
import Spinner from '../components/helpers/Spinner'


function Blogs({ setBlogDetail }) {
    const { data, isFetching } = useFetchBlog()

    //console.log('BLOG DATA', data)

    const blogs = data || []
  return (
    <div className="">
        <Nav />
        
        {/**BLOGS */}
        <div className="">
            {
                isFetching ? (
                    <div className="flex items-center justify-center">
                        <Spinner />
                    </div>
                ) : (
                    <div className="mt-4 mb-16 flex items-center justify-center gap-10 flex-wrap">
                        {
                            blogs?.map((i, idx) => (
                                <div key={idx} className="flex w-[400px] max-phone:w-[90%] flex-col rounded-[10px] border-0 shadow-2xl overflow-hidden">
                                    <div className="w-full">
                                        <img src={i?.image} alt={i?.title} className='w-full hover:scale-[1.04] transition duration-500 ' />
                                    </div>
            
                                    <div className="p-4 flex flex-col gap-3">
                                        <h3 className='text-primary-green font-semibold text-[20px]'>{i?.title}</h3>
            
                                        <div className="flex items-center justify-between text-[14px] text-gray-600 font-semibold">
                                            <div className="flex flex-col gap-1">
                                                <small>{i?.likes_count} likes</small>
                                                <small>{i?.comments?.length} comments</small>
                                            </div>
            
                                            <div className="">
                                                <small>
                                                    Posted: {new Date(i?.created_at).toLocaleDateString("en-US", {
                                                        year: "numeric",
                                                        month: "long",
                                                        day: "numeric"
                                                    })}
                                                </small>
                                            </div>
                                        </div>
            
                                        <div className="">
                                            <Link to={`/blog/${i.id}`} className='text-primary-green text-[18px] font-semibold cursor-pointer'>View</Link>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
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

export default Blogs
