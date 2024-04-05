import React from 'react'

function Headeritem ({name, Icon}) {
  // console.log("The name and Icon from the Header property is : ", {name, Icon});
  return (
    <div className='flex items-center gap-3 text-[18px] cursor-pointer mb-3 mt-3'>
      <Icon/>
      <div className='relative text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer group'>
          <h2 className=''>{name}</h2>
          {/* Underline Animation */}
      <div className="absolute mt-6 left-0 w-full h-0.5 bg-white transition-transform transform origin-left scale-x-0 group-hover:scale-x-100"></div>
    </div>
    </div>
  )
}

export default Headeritem;
