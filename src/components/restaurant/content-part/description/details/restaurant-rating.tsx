import React from 'react'
import {Review} from "@prisma/client";
import calculateReviewRatingAverage from "@/components/common/calculateReviewRatingAverage";
import Stars from "@/components/common/stars";

const   RestaurantRating = ({reviews}:{reviews:Review[]}) => {
  return (
    <>
    <div className='flex items-end'>
          <div className='rating mt-2 flex items-center'>
           <Stars reviews={reviews}/>
            <p className='text-reg ml-3'>{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
          </div>
          <div>
            <p className="text-reg ml-4">{reviews.length} review{reviews.length === 1 ? "" : "s"}</p>
          </div> 
        </div>
        </>
  )
}

export default RestaurantRating