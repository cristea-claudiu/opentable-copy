import RestaurantMenu from "@/components/restaurant/menu-page";
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

export default async function RestaurantMenuPage({params}: { params: { name: string } }) {
  const restaurant = await fetchRestaurantBySlug(params.name);
  return (
      <>
        <RestaurantMenu params={restaurant}/>
      </>


  )
}
