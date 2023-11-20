import React from 'react'
import SearchSideBar from '../side-search-bar'
import SearchRestaurantCard from '../restaurant-search-card'
import {PRICE, PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
interface SearchParams { city?: string,cuisine?:string,price? :PRICE }

const fetchRestaurantByCity= (searchParams:SearchParams)=>{
    const where :any={}
    if (searchParams.city){
        const localtion = {
            name:{
                equals: searchParams.city.toLowerCase()
            }
        }
        where.location=localtion
    }
    if (searchParams.cuisine){
        const cuisine = {
            name:{
                equals: searchParams.cuisine.toLowerCase()
            }
        }
        where.cuisine=cuisine
    }
    if (searchParams.price){
        const price = {
                equals: searchParams.price
        }
        where.price=price
    }

    const select ={
        id:true,
        name:true,
        main_image:true,
        price:true,
        cuisine:true,
        location:true,
        slug:true,
        reviews:true,
    }
    return prisma.restaurant.findMany({
            where,
            select,
        }
    )
};
const fetchLocations =async ()=>{
    return prisma.location.findMany()
}
const fetchCuisines = async ()=>{
    return prisma.cuisine.findMany()
}

const SearchContent = async ({searchParams}: { searchParams:SearchParams } ) => {
    const restaurants = await fetchRestaurantByCity(searchParams)
    const locations= await fetchLocations()
    const cuisines=    await fetchCuisines()
    return (
    <div className="flex py-4 m-auto w-2/3 justify-between items-start">
      <SearchSideBar locations={locations} cuisines={cuisines} searchParams={searchParams}/>
      <div className="w-5/6 text-black">
          {restaurants.length ? (<>{restaurants.map(restaurant=>(<SearchRestaurantCard key={restaurant.id} restaurant={restaurant}/>))}</>) :(<h2>Sorry , we didn't find any restaurant in this location</h2>)}
      </div>
    </div>
  )
}

export default SearchContent