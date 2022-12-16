import React from 'react'

const NewsCategory = ({item}) => {
    return (
        <div className="mt-4 flex justify-between">
            <p>{item.name}</p>
            {/* <p>(5)</p> */}
        </div>
    )
}

export default NewsCategory