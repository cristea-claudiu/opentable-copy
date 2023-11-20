import React from 'react'
import RestaurantDescriptions from './description'
import ReservationCardPortion from './reservation-card-portion'
import {PrismaClient} from "@prisma/client";

const prisma =new PrismaClient();
interface Restaurant{
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
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
      slug:true
    }
  })
  if(!restaurant){
    throw new Error();
  }
  return restaurant;
}
const RestaurantOverviwContent = async ({params}: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)

  return (
      <div className="flex relative m-auto w-2/3 justify-between items-start 0 -mt-11">
        <RestaurantDescriptions params={restaurant}/>
        <ReservationCardPortion/>
      </div>
  )
}

export default RestaurantOverviwContent