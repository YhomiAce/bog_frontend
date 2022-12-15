import React from 'react';

const CategoryItem = ({item, handleCategoryChange}) => {
    const handleChange = (val) => {
        console.log({value: val});
        handleCategoryChange(val)
    }
    return (
        <div className="flex mb-2">
            <input type="checkbox" value={item.id} onChange={(e) => handleChange(e.target.value)} />
            <p className="pl-2 mb-0">{item.name}</p>
        </div>
    )
}

export default CategoryItem