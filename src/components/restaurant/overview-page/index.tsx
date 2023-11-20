import React from 'react'
import Navbar from '../../common/NavHeader/navbar'
import RestaurantHeader from '../restaurant-header'
import RestaurantOverviwContent from '../content-part'
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
const RestaurantOverviw = async ({params}: { params: { slug: string } }) => {

  const restaurant = await fetchRestaurantBySlug(params.slug)


  return (
      <>

        <RestaurantHeader name={restaurant.slug}/>
        <RestaurantOverviwContent params={restaurant}/>

      </>
  )
}

export default RestaurantOverviw