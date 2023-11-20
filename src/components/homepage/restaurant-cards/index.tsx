import React from 'react'
import RestaurantCard from './restaurant-card'
import {PrismaClient, Cuisine, Location, PRICE, Review} from '@prisma/client'


const prisma = new PrismaClient();
const fetchRestaurants = async ():Promise<RestaurantCardType[]> => {
    const restaurants = await prisma.restaurant.findMany({
        select:{
            id:true,
            name:true,
            main_image:true,
            cuisine:true,
            slug:true,
            location:true,
            price:true,
            reviews:true,
        }
    });
    return restaurants
}

export interface RestaurantCardType {
    id: number,
    name: string,
    main_image: string,
    cuisine: Cuisine,
    location: Location,
    price: PRICE,
    slug:String
    reviews: Review[]

}
const HomeRestaurantCards = async () => {
    const restaurants = await fetchRestaurants();
    return (
        <div className="py-3 px-36 mt-10 flex flex-wrap">
            {restaurants.map(restaurant => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant}/>
            ))}
        </div>
    )
}

export default HomeRestaurantCards