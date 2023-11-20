import React from 'react'
import {PRICE} from "@prisma/client";

const Price = ({price}:{price:PRICE}) => {

    const renderPrice=()=>{
        if (price === PRICE.CHEAP){
            return<>
            <span>$</span><span className="text-gray-300">$$$$</span>
            </>
        } else if (price === PRICE.REGULAR){
            return<>
                <span>$$$</span><span className="text-gray-300">$$</span>
            </>
        }else{
            return<>
                <span>$$$$$</span><span className="text-gray-300"></span>
            </>
        }
    }
    return (
        <>
        <p className="mr-3 flex">{renderPrice()}</p>
        </>
    )
}
export default Price
