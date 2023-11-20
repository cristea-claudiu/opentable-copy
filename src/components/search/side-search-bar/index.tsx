import React from 'react'
import {Cuisine, Location, PRICE} from "@prisma/client";
import Link from "next/link";

const SearchSideBar = ({locations, cuisines,searchParams}:{locations:Location[],cuisines:Cuisine[],searchParams:{ city?: string,cuisine?:string,price? :PRICE }}) => {
    const prices=[
        {price:PRICE.CHEAP,label:"$",className:"border text-center w-full text-reg font-light rounded-l p-2"},
        {price:PRICE.REGULAR,label:"$$",className:"border text-center w-full text-reg font-light  p-2"},
        {price:PRICE.EXPENSIVE,label:"$$$",className:"border text-center w-full text-reg font-light  rounded-r p-2"},]

    const unQueryCity=<Link href={{pathname:"/search",query:{...searchParams,city:""}}} className="text-red-700 ml-4">{searchParams.city}</Link>
    const unQueryCuisine=<Link href={{pathname:"/search",query:{...searchParams,cuisine:""}}} className="text-red-700 ml-4 ">{searchParams.cuisine}</Link>
    const unQueryPrice=<Link href={{pathname:"/search",query:{...searchParams,price:""}}} className="text-red-700  ml-4">{searchParams.price}</Link>

  return (
    <div className="w-1/5 text-black">
        <div className="border-b capitalize pb-4 flex flex-col">
            <h1 className="mb-2">Filters:</h1>
            <p>Region: {unQueryCity}</p><p>Cuisine: {unQueryCuisine}</p>
            <p>Price: {unQueryPrice}</p>
        </div>



        <div className="border-b pb-4 flex flex-col">
          <h1 className="mb-2">Region:</h1>
            {locations.map(location=><Link className="font-light text-reg capitalize" key={location.id} href={{pathname:"/search",query:{...searchParams,city:location.name}}}>{location.name}</Link>)}
        </div>
        <div className="border-b  pb-4 mt-3 flex flex-col">
          <h1 className="mb-2">Cuisine:</h1>
            {cuisines.map(cuisine=><Link className="font-light text-reg capitalize" key={cuisine.id} href={{pathname:"/search",query:{...searchParams,cuisine:cuisine.name}}}>{cuisine.name} </Link>)}
        </div>
        <div className="mt-3 text-center pb-4">
          <h1 className="mb-2">Price:</h1>
          <div className="flex">

              {prices.map(({price,label,className})=><Link
                  href={{pathname:"/search",query:{...searchParams,price:price}}}
                  className={className} key={price}>
                  {label}
              </Link>)}

          </div>
        </div>
      </div>
  )
}

export default SearchSideBar