import Navbar from '@/components/common/NavHeader/navbar'
import React from 'react'
import RestaurantHeader from '../restaurant-header'
import RestaurantMenuContent from '../menu-part'
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
      slug: slug
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
    throw new Error("Restaurant not found");
  }
  return restaurant;
}

const RestaurantMenu = async ({params,}: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);

  return (
      <>

        <RestaurantHeader name={restaurant.slug}/>
        <RestaurantMenuContent params={restaurant}/>
      </>
  )
}

export default RestaurantMenu