import React from 'react';



export default function CategoryList(category) {
  return (
    
    <li className="py-2 cursor-pointer">{category.name} ({category.totalProducts})</li>
  )
}
