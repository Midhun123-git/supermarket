import React from 'react'
import Comp3 from './Comp3'
import Img1 from "../assets/Comp3/img1.png"
import Img2 from "../assets/Comp3/img2.png"
import Img3 from "../assets/Comp3/img3.png"
const Comp4 = () => {
  return (
    <div className='flex  
    flex-col
    lg:flex-row
    gap-5 w-full  lg:w-[683px] min-h-[189px]
     bg-[#FDF2DF]
     rounded-[20px]
     
     items-center
     p-2  
     '>
            <div className='flex flex-col gap-5'>
                    <p className='text-[#1E1E1E] 
                    text-[16px]
                    font-semibold
                    '>Your personal grocery assistant</p>
                    <p className='font-normal text-[12px] 
                    text-[#1E1E1E]
                    '>Find recipes, get recommendations, and 
                    <br className='hidden lg:block' /> shop smarter with AI</p>
                    <div className='bg-[#F39C12] 
                    w-[95px] 
                    h-[32px] rounded-[10px]
                    text-center text-white
                    pt-1
                    cursor-pointer
                    '>
                                 Try Now
                    </div>
            </div>

            <div className='flex 
            lg:flex-row
            flex-col 
            
            gap-3'>
     <Comp3
     text="Recipe Suggestions"
     img={Img1 }
     btn="Browse"
     />
     <Comp3
     text="Personalized picks"
     img={Img2 }
     btn="View"
     />
     <Comp3
     text="Meal Planning"
     img={Img3 }
     btn="Try Search"
     />
            </div>
    </div>
  )
}

export default Comp4