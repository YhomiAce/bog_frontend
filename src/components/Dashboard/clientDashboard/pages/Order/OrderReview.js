import React from 'react'
import ReactStars from 'react-rating-stars-component'

export const OrderReview = () => {

    const ratingChanged = (newRating) => {
        console.log(newRating)
    }
  return (
    <div>
        <form>
            <div>
                <textarea className='h-24 p-2 w-full rounded mt-2 border border-gray-400 '></textarea>
            </div>
            <div className='mt-6'>
                <p>Leave a rating</p>
                <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={45}
                    color2={'#ffd700'}
                />
            </div>
            <div className='mt-6'>
                <button
                    type='button'
                    className='btn-primary w-full'
                >Submit</button>
            </div>
        </form>
    </div>
  )
}
