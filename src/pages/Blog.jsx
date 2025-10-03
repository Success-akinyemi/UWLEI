import Footer from '../components/Footer'
import Nav from '../components/Nav'
import SupportOrganizations from '../components/SupportOrganizations'
import Cta from '../components/Cta'
import { useFetchBlog } from '../helpers/fetch'
import { useLocation } from 'react-router-dom'
import Spinner from '../components/helpers/Spinner'
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";


function Blog({ blogDetail }) {
    const loc = useLocation()
    const pathName = loc.pathname.split('/')[2]
    const { data, isFetching } = useFetchBlog(pathName)


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
                    <div className="padx mb-16 flex flex-col items-center justify-center gap-6 mt-12">
                        <img alt={data?.title} src={data?.image} className='w-[400px] max-phone:w-[80%] ' />

                        <h2 className='text-[2rem] max-phone:text-[1.3rem] font-bold text-primary-green flex-wrap text-center'>{data?.title}</h2>

                        <div className='flex items-center justify-center gap-8'>    
                            <small className='text-[15px] font-semibold text-gray-800'>
                                    Posted: {new Date(data?.created_at).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                    day: "numeric"
                                })}
                            </small>
                        </div>

                        {/**CONTENT */}
                        <div className="">
                            {data?.content
                            ?.split(/\r?\n\r?\n/) // split on double line breaks
                            .map((para, idx) => (
                                <p key={idx} className="mb-4">
                                {para}
                                </p>
                            ))}
                        </div>

                        {/**SHOW LIKE AND HANDLE LIKE */}
                        <div className="flex items-center justify-center gap-5">
                            <div className="flex items-center gap-1 text-primary-green text-[19px]">
                                <SlLike className='text-[22px] font-bold' />
                                {data?.likes_count} likes
                            </div>
                            <div className="flex items-center gap-1 text-primary-green text-[19px]">
                                <FaRegComment className='text-[22px] font-bold' />
                                {data?.comments?.lenght} comments
                            </div>
                        </div>

                        {/**DISPLAY COMMENTS */}
                        <div className="flex flex-col w-full">

                            {/**ADD COMMENT */}
                            <form className="w-full flex flex-col">
                                <textarea id="comment" placeholder='Type comment here....' className='input h-[100px] resize-none w-full'></textarea>
                                <div className="mt-6 flex items-end justify-end">
                                    <button className="btn text-white !rounded-[8px]">Add Comment</button>
                                </div>
                            </form>
                        </div>

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

export default Blog
