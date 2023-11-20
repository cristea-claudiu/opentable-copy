
import RestaurantOverviw from "../../../components/restaurant/overview-page"
import {PrismaClient} from "@prisma/client";
import {notFound} from "next/navigation";


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
    notFound()
  }
  return restaurant;
}
export default async function RestaurantDetails({params}: {params: {name: string } }) {
  const restaurant = await fetchRestaurantBySlug(params.name);
  return (
      <RestaurantOverviw params={restaurant}/>
   );

}
