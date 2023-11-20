import Link from 'next/link'
import React from 'react'
import {RestaurantCardType} from "@/components/homepage/restaurant-cards";
import Price from "@/components/restaurant/content-part/description/details/price";
import Stars from "@/components/common/stars";

interface Props{
  restaurant: RestaurantCardType
}

const RestaurantCard = ({restaurant}:Props) => {
  return (
    <div
            className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer"
          >
            <Link href={`/restaurant/${restaurant.slug}`}>
            <img
              src={restaurant.main_image}
              alt="FOOD"
              className="w-full h-36"
            />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2  text-center">
                {restaurant.name}
              </h3>
              <div className="flex items-start">
                <Stars reviews={restaurant.reviews}/>
                <p className="ml-2">{restaurant.reviews.length} review{restaurant.reviews.length === 1 ? "" : "s"}</p>
              </div>
              <div className="flex text-reg font-light">
                <p className=" mr-3 capitalize">{restaurant.cuisine.name}</p>
                <Price price={restaurant.price}/>
                <p>{restaurant.location.name}</p>
              </div>
              <p className="text-reg mt-1 font-bold">Booked 3 times today</p>
            </div>
            </Link>
          </div>
  )
}

export default RestaurantCard