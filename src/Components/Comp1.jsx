import React from 'react'
import img1 from "../assets/Comp1/img1.png"
import img2 from "../assets/Comp1/img2.png"
import img3 from "../assets/Comp1/img3.png"
import img4 from "../assets/Comp1/img4.png"
import img5 from "../assets/Comp1/img5.png"
import img6 from "../assets/Comp1/img6.png"
import img7 from "../assets/Comp1/img7.png"
import img8 from "../assets/Comp1/img8.png"
import img9 from "../assets/Comp1/img9.png"
import img10 from "../assets/Comp1/img10.png"
const Comp1 = () => {
  const prod=[
    {
      id:"1",
      text:"Groceries & Kitchen",
      img:img1
    },
    {
      id:"2",
      text:"Baby & Kids",
      img:img2
    },
    {
      id:"3",
      text:"Personal Care & Hygiene",
      img:img3
    },
    {
      id:"4",
      text:"Groceries & Kitchen",
      img:img4
    },
    {
      id:"5",
      text:"Groceries & Kitchen",
      img:img5
    },
    {
      id:"6",
      text:"Groceries & Kitchen",
      img:img6
    },
    {
      id:"7",
      text:"Groceries & Kitchen",
      img:img7
    },
    {
      id:"8",
      text:"Groceries & Kitchen",
      img:img8
    },
    {
      id:"9",
      text:"Groceries & Kitchen",
      img:img9
    },
    {
      id:"10",
      text:"Groceries & Kitchen",
      img:img10
    },


  ]
  return (   
    <div className=' grid  lg:grid-cols-5 lg:gap-10 xl:grid-cols-10 xl:gap-3
    grid-cols-2  gap-4
    '>
      {prod.map((items)=>(

<div className='w-[114px] 
rounded-xl bg-white 
flex flex-col items-center justify-between 
mt-7  p-2 relative'>

{/* TEXT */}
<p className='text-center text-[#1E1E1E] font-medium text-[14px] overflow-hidden'>
  {items.text}
</p>

{/* IMAGE CENTERED */}
<div className="flex justify-center items-center w-full">
  <div className="w-[60px] h-[60px] overflow-hidden">
    <img 
      src={items.img} 
      alt="" 
      className="w-full h-full object-cover"
    />
    <svg width="97" height="21" className='absolute bottom-0 right-2' viewBox="0 0 97 21" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M96.8796 20.311C96.8796 14.9242 91.7761 9.75801 82.6919 5.94896C73.6077 2.1399 61.2868 4.06693e-07 48.4398 0C35.5928 -4.06693e-07 23.2719 2.1399 14.1877 5.94896C5.10347 9.75801 1.93985e-06 14.9242 0 20.311L48.4398 20.311H96.8796Z" fill="#DEFFEC"/>
// </svg>
  </div>
</div>

</div>
      ))}
   
  </div>
  )
}

 export default Comp1


