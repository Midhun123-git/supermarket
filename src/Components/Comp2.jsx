import React from 'react'
import img1 from "../assets/Comp2/img1.png"
import img2 from "../assets/Comp2/img2.png"
import img3 from "../assets/Comp2/img3.png"
import img4 from "../assets/Comp2/img4.png"
import img5 from "../assets/Comp2/img5.png"
const Comp2 = () => {
  const prod=[
      {
        id: 1,
        bg: "#DEFFEC",
        textColor: "#27AE60",
        text: "Essential Focus",
        text2: "Fresh Vegetables",
        img: img1,
        btn: "Order Now",
        btnbg: "#27AE60",
        btntextcolor: "#FFFFFF"
      },
      {
        id: 2,
        bg: "#FCE4BE",
        textColor: "#F39C12",
        text: "Daily Saver",
        text2: "Grocery Discounts",
        img: img2,
        btn: "Order Now",
        btnbg: "#FFFFFF",
        btntextcolor: "#1E1E1E"
      },
      {
        id: 3,
        bg: "#FADDDA",
        textColor: "#E74C3C",
        text: "Must-Have",
        text2: "Snacks & Beverages",
        img: img3,
        btn: "Order Now",
        btnbg: "#E74C3C",
        btntextcolor: "#FFFFFF"
      },
      {
        id: 4,
        bg: "#FCF3D0",
        textColor: "#F1C40F",
        text: "Best Value",
        text2: "Dairy & Bakery",
        img: img4,
        btn: "Order Now",
        btnbg: "#FFFFFF",
        btntextcolor: "#4D0000"
      },
      {
        id: 5,
        bg: "#DDCECE",
        textColor: "#4D0000",
        text: "Trending Now",
        text2: "Chocolates",
        img: img5,
        btn: "Order Now",
        btnbg: "#4D0000",
        btntextcolor: "#FFFFFF"
      }
  ]
  return (
    <div className='flex gap-2 justify-center flex-wrap'>
      {prod.map((items)=>(

<div className='flex gap-3  items-center p-2
h-[114px]
rounded-[14px] mt-6 ml-7'
style={{backgroundColor:items.bg}}
>
          <div className='flex flex-col gap-2'>
                  <p className='text-[#F39C12] font-bold text-[14px]'
                  style={{color:items.textColor} }
                  > 
                  {items.text}
                  </p>
                  <p className='text-[#8F8F8F] font-normal text-[10px]'>
                  {items.text2}
                  </p>
                  <button className='p-1 rounded-[6px]
              
                    cursor-pointer
                    w-[87px] 
                    '
                    style={{backgroundColor:items.btnbg,
                      color:items.btntextcolor
                    }}

                    >
                      {items.btn}
                  </button>
                
          </div>
          <img src={items.img} alt="" className='w-[119px] h-[96px]'/>
</div>
      ))}
   
    </div>
  )
}

export default Comp2