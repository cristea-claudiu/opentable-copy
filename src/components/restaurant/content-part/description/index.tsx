import React from 'react'
import RestaurantDetailsComp from './details/restaurant-details-comp'
import ReviewCard from './review-card'
import RestaurantNavbar from '../../restaurant-navbar'
import {PrismaClient, Review} from "@prisma/client";

const prisma =new PrismaClient();
interface Restaurant{
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews:Review[]
}
const fetchRestaurantBySlug = async (slug:string):Promise<Restaurant>=>{
  const restaurant= await prisma.restaurant.findUnique({
    where: {
      slug
    },
    select:{
      id:true,
      name:true,
      images:true,
      description:true,
      slug:true,
      reviews:true
    }
  })
  if(!restaurant){
    throw new Error();
  }
  return restaurant;
}
const RestaurantDescriptions = async ({params}: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavbar slug={restaurant.slug}/>
        <RestaurantDetailsComp params={restaurant}/>
        <ReviewCard reviews={restaurant.reviews}/>
      </div>
  )
}

export default RestaurantDescriptions