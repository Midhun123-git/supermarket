import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Comp5 = ({
  image,
  title,
  oldPrice,
  per,
  newPrice,
  isCounter = false   // ✅ PROP ADDED
}) => {

  return (
    <div className='w-[140px] h-[212px] rounded-3xl
     bg-[#FFFFFF] border mt-5 ml-5
     flex flex-col justify-between'>

      {/* IMAGE SECTION */}
      <div className='h-[118px] bg-[#E5E5E5]
        rounded-t-3xl relative
        flex items-center justify-center'>

       
        <div className='absolute top-2 left-2 z-10'>
        <svg width="27" height="43" viewBox="0 0 27 43" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.4414 10.0712C10.895 9.52482 10.588 8.78372 10.588 8.01097C10.588 7.23822 10.895 6.49712 11.4414 5.9507C11.9878 5.40428 12.7289 5.0973 13.5016 5.0973C14.2744 5.0973 15.0155 5.40428 15.5619 5.9507C16.1083 6.49712 16.4153 7.23822 16.4153 8.01097C16.4153 8.78372 16.1083 9.52482 15.5619 10.0712C15.0155 10.6177 14.2744 10.9246 13.5016 10.9246C12.7289 10.9246 11.9878 10.6177 11.4414 10.0712ZM27.0033 38.2146V13.4913C27.0033 12.5024 26.6187 11.5134 25.8633 10.758L16.2487 1.14339C14.7241 -0.381209 12.2792 -0.381209 10.7546 1.14339L1.14001 10.758C0.384577 11.5134 -7.83337e-06 12.5024 0.0137274 13.505L-7.74908e-06 38.2146C0.0137274 39.2172 0.384577 40.2199 1.14001 40.9753C1.89544 41.7308 2.89811 42.1016 3.88704 42.1016H23.1163C24.1189 42.1154 25.1079 41.7308 25.8633 40.9753C26.6325 40.2062 27.0033 39.2035 27.0033 38.2146Z" fill="url(#paint0_linear_1_236)"/>
<text 
    x="50%" 
    y="65%" 
    textAnchor="middle" 
    fill="white" 
    fontSize="12" 
    fontWeight="bold"
  >
   {per}
  </text>
<defs>
<linearGradient id="paint0_linear_1_236" x1="27.2368" y1="12.1315" x2="-0.233505" y2="39.6018" gradientUnits="userSpaceOnUse">
<stop stop-color="#27AE60"/>
<stop offset="0.435" stop-color="#39CB77"/>
<stop offset="1" stop-color="#168946"/>
</linearGradient>
</defs>
</svg>

        </div>

        {/* ✅ TOP RIGHT BUTTON (Condition Based) */}
        <div className='absolute top-2 right-2 z-10'>

          {isCounter ? (
            // 🔥 COUNTER VERSION
            <div className='w-[90px] h-[28px]
              bg-white border border-[#27AE60]
              rounded-[10px] flex justify-between
              items-center px-2'>
              <FaMinus size={14} className='text-[#27AE60]'/>
              <p>01</p>
              <FaPlus size={14} className='text-[#27AE60]'/>
            </div>
          ) : (
            // 🔥 ONLY PLUS VERSION
            <div className='w-[30px] h-[30px]
              rounded-[10px]
              border border-[#27AE60]
              bg-white
              flex items-center justify-center'>
              <FaPlus size={14} className='text-[#27AE60]'/>
            </div>
          )}

        </div>

        {/* PRODUCT IMAGE */}
        <img 
          src={image}
          alt=""
          className='max-w-[80%] max-h-[80%] object-contain'
        />

      </div>

      {/* TITLE */}
      <p className='font-medium text-[14px] text-[#1E1E1E] p-1
        overflow-hidden leading-4 h-[34px]'>
        {title}
      </p>

      {/* PRICE */}
      <div className='mt-2'>
        <div className='flex justify-end mt-1'>
          <p className='line-through text-[#8F8F8F] mr-1'>{oldPrice}</p>
        </div>

        <div className='flex justify-between'>
          <div className='flex gap-1 items-center'>
            <p className='text-[#8F8F8F] font-medium text-[12px] p-1'>
              1 Piece
            </p>
            <IoIosArrowDown size={12} className='text-[#27AE60]'/>
          </div>

          <p className='font-medium text-[14px] text-[#1E1E1E] mr-1'>
            {newPrice}
          </p>
        </div>
      </div>

    </div>
  )
}

export default Comp5
