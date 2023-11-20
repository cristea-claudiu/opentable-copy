import React from 'react'



const RestaurantHeader = ({ name } : { name : string}) => {
  const renderTittle=()=>{
    const nameArray= name.split('-')
    nameArray[nameArray.length - 1]=`(${nameArray[nameArray.length - 1]})`
    return nameArray.join(" ")
  }



  return (
    <>
    <div className='h-96 overflow-hidden'>
      <div className='bg-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2 h-full flex justify-center items-center'>
        <h1 className='text-7xl text-white capitalize text-shadou text-center'>{renderTittle()}</h1>
      </div>
    </div>
    </>
  )
}

export default RestaurantHeader