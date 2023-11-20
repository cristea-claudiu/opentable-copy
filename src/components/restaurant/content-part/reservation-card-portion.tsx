"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const ReservationCardPortion = () => {
  const router = useRouter();
  return (
    <div className='w-[27%]  text-reg '>
    <div className=' w-50 bg-white rounded p-3 shadow ' >
      <div className="text-center border-b pb-2 font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
       <div className='my-3 flex flex-col'>
          <label htmlFor="">Party size</label>
          <select className='py-3 border-b bg-white font-light' name="" id="">
            <option value="">1 person</option>
            <option value="">2 person</option>
            <option value="">4 person</option>
            <option value="">6 person</option>
            <option value="">8 person</option>
            <option value="">10 person</option>
            <option value="">12 person</option>
            <option value="">More then 12</option>
          </select>
       </div>
       <div className='flex justif-between'>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor="">Date</label>
            <input type="text" className='py-3 bg-white border-b font-lightm-1' />
          </div>
          <div className='flex flex-col w-[48%]'>
            <label htmlFor="">Time</label>
            <select name="" className='py-3 border-b rounded bg-white font-light m-1' id="">
              <option value="">7:30 AM</option>
              <option value="">9:30 AM</option>
            </select>
          </div>
       </div>
       <div className='mt-5 '>
        <button className='bg-red-600 rounded w-full px-4 text-white font-bold h-16' onClick={()=>{
              router.push("/reserve/[name]")}}>Find a time</button>
       </div>
    </div>
  </div>
  )
}

export default ReservationCardPortion