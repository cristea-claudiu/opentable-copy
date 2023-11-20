import React from 'react'
import {PrismaClient, Review} from "@prisma/client";
import RestaurantTittle from "@/components/restaurant/content-part/description/details/restaurant-tittle";
import RestaurantDescription from "@/components/restaurant/content-part/description/details/restaurant-description";
import RestaurantImages from "@/components/restaurant/content-part/description/details/restaurant-images";
import RestaurantRating from "@/components/restaurant/content-part/description/details/restaurant-rating";

const prisma =new PrismaClient();
interface Restaurant{
  id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews:Review[];

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
const RestaurantDetailsComp =async ({params}: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug)
  return (
    <>
  <RestaurantTittle name={restaurant.name}/>
  <RestaurantRating reviews={restaurant.reviews}/>
  <RestaurantDescription description={restaurant.description}/>
  <RestaurantImages images={restaurant.images}/>
  </>
  )
}

export default RestaurantDetailsComp