
import SearchPage from '@/components/search'
import {PRICE, PrismaClient} from "@prisma/client";

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
export default async function Search({searchParams}: { searchParams: { city: string } }) {
  const restaurants = await fetchRestaurantByCity(searchParams.city)

    return (
      <SearchPage searchParams={searchParams}/>

  )
}
