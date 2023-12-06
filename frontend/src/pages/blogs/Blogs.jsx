import React from 'react'
import Share from '../../components/share/Share'
import Posts from '../../components/posts/Posts'
import "./blogs.scss" ;
const Blogs = () => {
        return (
                <div className='blogs'>
                        <Share />
                        <Posts />
                </div>
        )
}

export default Blogs
