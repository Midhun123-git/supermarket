import React from 'react'
import Comp3Img1 from "../assets/Comp3Img1.png"
const Comp3 = () => {
  return (
    <div className='flex 
    flex-col 
    justify-center
    items-center
    gap-1 w-[113px]
     h-[154px] 
     bg-[#FFFFFF]
     rounded-[10px]
     mt-4
     ml-6
     '>
    <p className='font-medium text-[14px] text-[#1E1E1E] p-2'>Recipe Suggestions</p>
    <img src={Comp3Img1} alt="" className='w-[69px] h-[70px]'/>
    <div className='bg-[#F39C1233] w-[99px] h-[32px]   rounded-3xl text-[#F39C12] text-center
    cursor-pointer
    '>
      Browse
    </div>
    </div>
  )
}

export default Comp3