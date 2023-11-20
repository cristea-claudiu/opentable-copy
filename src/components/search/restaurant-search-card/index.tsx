import React from 'react'
import {Cuisine, Location, PRICE, Review} from "@prisma/client";
import Price from "@/components/restaurant/content-part/description/details/price";
import Link from "next/link";
import calculateReviewRatingAverage from "@/components/common/calculateReviewRatingAverage";
import Stars from "@/components/common/stars";


interface Restaurant {
  id: number;
  name: string;
  main_image: string;
  price:PRICE;
  cuisine:Cuisine;
  location: Location;
  slug: string;
  reviews:Review[]

}
const SearchRestaurantCard = ({restaurant}:{restaurant:Restaurant}) => {

  const renderRatingText=()=> {
    const rating = calculateReviewRatingAverage(restaurant.reviews)
    if (rating > 4) return "Awesome";
    else if (rating > 3 && rating <= 4) return "Good";
    else if (rating > 1 && rating <= 3) return "Average";
    else if (rating > 0 && rating <= 1) return "Bad";
    else return "No reviews to this restaurant";

  }
  return (
      <Link href={`/restaurant/${restaurant.slug}`}>
    <div className="border-b flex pb-5 ml-4">
    <img
      src={restaurant.main_image}
      alt=""
      className="w-44  h-36 rounded"
    />
    <div className="pl-5">
      <h2 className="text-3xl capitalize">{restaurant.name}</h2>
      <div className="flex items-start">
        <Stars reviews={restaurant.reviews}/>
        <p className="ml-2 text-sm">{renderRatingText()}</p>
      </div>
      <div className="mb-9">
        <div className="font-light flex text-reg">
          <Price price={restaurant.price}/>
          <p className="mr-4 capitalize">{restaurant.cuisine.name}</p>
          <p className="mr-4 capitalize">{restaurant.location.name}</p>
        </div>
      </div>
      <div className="text-red-600">
        View more information
      </div>
    </div>
  </div>
      </Link>
  )
}

export default SearchRestaurantCard