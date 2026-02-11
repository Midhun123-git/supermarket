import React from 'react'
import img1 from "../assets/img1.png"
const Comp1 = () => {
  return (
    <div className='w-[114px] h-[125px]
     rounded-xl bg-[#FFFFFF] border
     flex  flex-col items-center justify-center mt-7 ml-6  p-2
     '>
        <div className='relative '> 
        <p className='text-center text-[#1E1E1E] font-medium text-[14px] p-3'>Groceries
            & Kitchen </p>
            <img src={img1} alt="" className='rounded-full mb-2'/>

            <svg width="97" height="21" className='absolute bottom-2 ' viewBox="0 0 97 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M96.8796 20.311C96.8796 14.9242 91.7761 9.75801 82.6919 5.94896C73.6077 2.1399 61.2868 4.06693e-07 48.4398 0C35.5928 -4.06693e-07 23.2719 2.1399 14.1877 5.94896C5.10347 9.75801 1.93985e-06 14.9242 0 20.311L48.4398 20.311H96.8796Z" fill="#DEFFEC"/>
</svg>


        </div>
            
    </div>
  )
}

export default Comp1