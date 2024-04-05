import React, {useState} from 'react'
import logo from '../assets/Images/DisneyLogo.png'
import menus from '../Components/menus.js'
import Headeritem from '../Components/Headeritem.jsx'
import { HiDotsVertical } from "react-icons/hi";

const Header = () => {
   const [toggle, setToggle] = useState(false);
  return (
    <div className='flex justify-between p-4'>
        <div className='flex items-center gap-8 '>
        <img src={logo} alt='Disney Logo' className='w-[86px] md:w-[115px] object-cover'/>

        <div className='hidden md:flex gap-8'>
          {menus.map((item)=>(
            <div key={item.name}>
                  <Headeritem name = {item.name} Icon = {item.icon} />
              </div>
          ))}
        </div>

        <div className='flex gap-6 md:hidden'>
          {menus.map((item, index)=> index<3&& (
            <div key={item.name}>
                  <Headeritem name = {''} Icon = {item.icon} />
              </div>
          ))}
          <div className='md:hidden' onClick={()=>setToggle(!toggle)}>
            <Headeritem name={''} Icon = {HiDotsVertical}/>
           {toggle ? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-2'>
              {menus.map((item, index)=> index > 2 && (
              <div key={item.name}>
                    <Headeritem name = {item.name} Icon = {item.icon} />
              </div>
              ))}
            </div>: null}
          </div>
        </div>
        </div>
            <img src={`https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745`} className='w-[50px] h-[50px] items-center rounded '/>
    </div>
  )
}

export default Header