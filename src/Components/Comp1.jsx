import React from 'react'
const Comp1 = (props) => {
  return (   
    <div className='w-[114px] h-[125px] 
    rounded-xl bg-white 
    flex flex-col items-center justify-between 
    mt-7 ml-6 p-2 relative'>
  
    {/* TEXT */}
    <p className='text-center text-[#1E1E1E] font-medium text-[14px] h-[40px] overflow-hidden'>
      {props.text}
    </p>
  
    {/* IMAGE CENTERED */}
    <div className="flex justify-center items-center w-full">
      <div className="w-[60px] h-[60px] overflow-hidden">
        <img 
          src={props.img} 
          alt="" 
          className="w-full h-full object-cover"
        />
        <svg width="97" height="21" className='absolute bottom-0 right-2' viewBox="0 0 97 21" fill="none" xmlns="http://www.w3.org/2000/svg">
  // <path d="M96.8796 20.311C96.8796 14.9242 91.7761 9.75801 82.6919 5.94896C73.6077 2.1399 61.2868 4.06693e-07 48.4398 0C35.5928 -4.06693e-07 23.2719 2.1399 14.1877 5.94896C5.10347 9.75801 1.93985e-06 14.9242 0 20.311L48.4398 20.311H96.8796Z" fill="#DEFFEC"/>
  // </svg>
      </div>
    </div>
  
  </div>
  )
}

 export default Comp1


