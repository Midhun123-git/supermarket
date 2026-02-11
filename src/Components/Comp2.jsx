import React from 'react'
import Comp2Img1 from "../assets/Comp2Img1.png"
const Comp2 = () => {
  return (
    <div className='flex gap-3 bg-[#FCE4BE]  items-center p-2
     w-[226px] h-[114px]
      rounded-[14px] mt-6 ml-7'>
                <div className='flex flex-col gap-2'>
                        <p className='text-[#F39C12] font-bold text-[14px]'> 
                        Daily Saver
                        </p>
                        <p className='text-[#8F8F8F] font-normal text-[10px]'>
                        Grocery Discounts
                        </p>
                        <button className='p-1 rounded-[6px]
                          bg-[#FFFFFF] text-[#1E1E1E]
                          cursor-pointer
                          w-[87px] 
                          '>
                            Order Now
                        </button>
                      
                </div>
                <img src={Comp2Img1} alt="" className='w-[119px] h-[96px]'/>
    </div>
  )
}

export default Comp2