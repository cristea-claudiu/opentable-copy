import React from 'react'
import Navbar from '../common/NavHeader/navbar'
import SearchHeader from './header'
import SearchContent from './content'
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
const fetchRestaurantByCity= (city:string | undefined)=>{
  const select ={
    id:true,
    name:true,
    main_image:true,
    price:true,
    cuisine:true,
    location:true,
    slug:true
  }
  if(!city)return prisma.restaurant.findMany({select});
  return prisma.restaurant.findMany({
        where:{
          location:{
            name:{
              equals:city.toLowerCase()
            },
          },
        },
        select:select,
      }
  )
};

const SearchPage = async ({searchParams}: { searchParams: { city: string } }) => {
  const restaurants = await fetchRestaurantByCity(searchParams.city)
  return (
      <>
        <SearchHeader/>
        <SearchContent searchParams={searchParams}/>
      </>
  )
}

export default SearchPage