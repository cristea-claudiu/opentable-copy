import React from 'react'
import {Review} from "@prisma/client";

const CalculateReviewRatingAverage = (reviews: Review[]) => {
    if (!reviews.length) return 0;
    return reviews.reduce((sum, review)=>{
        return sum + review.rating
    },0)/reviews.length

}
export default CalculateReviewRatingAverage
