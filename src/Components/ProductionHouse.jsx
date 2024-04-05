import React from 'react';
import Lists from './productionHouseList.js';




function ProductionHouse() {
  return (
    <div className='flex gap-5 p-2 px-7 md:px-16'>
        {Lists.map((item)=>(
            // console.log("Item : ", item.image)
            <div className='relative border-[2px] border-gray-600 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-gray-800 '>
                <video src={item.video} autoPlay loop playsInline muted className='absolute top-0 rounded-md z-0 opacity-0 hover:opacity-50' />
                <img src={item.image} className='w-full z-[1] opacity-100' />
            </div>
            
        ))}
    </div>
  )
}

export default ProductionHouse