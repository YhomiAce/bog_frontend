import dayjs from 'dayjs'
import React, {useEffect} from 'react'
import { BsArrowRight } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { getAllBlogPosts } from '../../../redux/actions/PostAction'
import { cutText, stripHtml } from "../../../services/helper";
import Spinner from '../../layouts/Spinner';


export const HomepageBlog = () => {
    const dispatch = useDispatch();

    const  {posts, isLoading} = useSelector((state) => state.blog);

    useEffect(() => {
        dispatch(getAllBlogPosts());
    }, [dispatch]);

    if (isLoading) {
        return <center>
            <Spinner />
        </center>
    }

  return (
    <div className='grid-2 w-full gap-4'>
        {
           posts.length > 0 ? posts.filter(where => where.isPublished).slice(0,4).map(item => (
                <div className="mx-4 bg-white  text-black relative">
                    <div className=' bg-tertiary'>
                        <img src={item?.images[0].image} alt="blog1" className="w-full h-60" />
                    </div>
                    <div className="bg-primary w-28 text-white text-xs fw-500 py-3 relative -top-4 left-4 text-center">
                        {dayjs(item?.createdAt).format("DD-MMM-YYYY")}
                    </div>
                    <div className="py-6 pt-3 px-5">
                        <p className="fw-600 lg:text-xl">{item?.title}</p>
                        <p className="pt-2 pb-3 ">{cutText(stripHtml(item?.body), 100, '...')}</p>
                        <Link to={`/blognews/${item?.id}`}><BsArrowRight className="text-lg text-primary" /></Link>
                    </div>
                </div>
            ))
            :
            null
        }
    </div>
  )
}
