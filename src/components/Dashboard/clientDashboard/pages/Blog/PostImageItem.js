import React from 'react'

const PostImageItem = ({item}) => {
    return (
        <div className="w-2/12 ml-4 rounded-lg">
            <img src={item.image} alt="blog" className="w-full rounded-lg" />
        </div>
    )
}

export default PostImageItem