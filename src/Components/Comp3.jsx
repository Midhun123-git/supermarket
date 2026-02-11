import React from 'react'
const Comp3 = (props) => {
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
     '>
    <p className='font-medium text-[14px] text-[#1E1E1E] p-2'>{props.text}</p>
    <img src={props.img} alt="" className='w-[69px] h-[70px] object-contain mx-auto'/>
    <div className='bg-[#F39C1233] w-[99px] h-[32px]   rounded-3xl text-[#F39C12] text-center
    cursor-pointer
    mb-2
    '>
      {props.btn}
    </div>
    </div>
  )
}

export default Comp3