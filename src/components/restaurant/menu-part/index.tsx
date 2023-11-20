import React from 'react'
import MenuCards from './menu-cards'
import RestaurantNavbar from '../restaurant-navbar'
import {Items, PrismaClient} from "@prisma/client";

const prisma =new PrismaClient();
interface Restaurant{
    id: number;
    name: string;
    images: string[];
    description: string;
    slug: string;
    items: Items[];
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
            items:true,
        }
    })
    if(!restaurant){
        throw new Error();
    }
    return restaurant;
}

const RestaurantMenuContent = async ({params}: { params: { slug: string } }) => {
    const restaurant = await fetchRestaurantBySlug(params.slug)

    return (
        <div className="flex m-auto  w-2/3 justify-between items-start 0 -mt-11">
            <div className="bg-white w-[100%] rounded p-3 shadow">
                <RestaurantNavbar slug={restaurant.slug}/>
                <MenuCards menu={restaurant.items}/>
            </div>
        </div>
    )
}

export default RestaurantMenuContent