import React from 'react'
import img1 from "../assets/Comp6/img1.png"
import img2 from "../assets/Comp6/img2.png"
import img3 from "../assets/Comp6/img3.png"
import img4 from "../assets/Comp6/img4.png"
import img5 from "../assets/Comp6/img5.png"
import img6 from "../assets/Comp6/img6.png"
import img7 from "../assets/Comp6/img7.png"
import img8 from "../assets/Comp6/img8.png"
import img9 from "../assets/Comp6/img9.png"
import img10 from "../assets/Comp6/img10.png"
import img11 from "../assets/Comp6/img11.png"
import img12 from "../assets/Comp6/img12.png"
import img13 from "../assets/Comp6/img13.png"
import img14 from "../assets/Comp6/img14.png"
import img15 from "../assets/Comp6/img15.png"
import img16 from "../assets/Comp6/img16.png"
const Comp6 = () => {
    const Comp=[
        {id:"1",
        title:"Fresh Produce",
        img:img1
        },
        {id:"2",
            title:"Dairy & Eggs",
            img:img2
            },
            {id:"3",
                title:"Meat & Seafood",
                img:img3
                },
                {id:"4",
                    title:"Frozen Foods",
                    img:img4
                    },
                    {id:"5",
                        title:"Pantry Staples",
                        img:img5
                        },
                        {id:"6",
                            title:"Snacks & Sweets",
                            img:img6
                            },
                            {id:"7",
                                title:"Beverages",
                                img:img7
                                },
                                {id:"8",
                                    title:"Breakfast Foods",
                                    img:img8
                                    },
                                    {id:"9",
                                        title:"Small Appliances",
                                        img:img9
                                        },
                                        {id:"10",
                                            title:"Food Storage",
                                            img:img10
                                            }
        
    ]
    const Comp2=[
        {id:"11",
            title:"Cookware",
            img:img11
            },
            {id:"12",
                title:"Cutlery",
                img:img12
                },
                {id:"13",
                    title:"Tableware",
                    img:img13
                    },
                    {id:"14",
                        title:"Kitchen Tools",
                        img:img14
                        },
                        {id:"15",
                            title:"Cleaning Supplies",
                            img:img15
                            },
                            {id:"16",
                                title:"Specialty Items",
                                img:img16
                                }
    ]
  return (   
   <div className='flex flex-col '>
    <div className='flex  gap-1 flex-wrap'>
        {Comp.map((items)=>(
            <div className='w-[114px] h-[125px] 
            rounded-xl bg-[#27AE601A]
            flex flex-col items-center justify-between 
            mt-7 ml-3 p-2 relative'
            key={items.id}
            >
          
            {/* TEXT */}
            <p className='text-center text-[#1E1E1E] font-medium text-[14px] h-[40px] overflow-hidden'>
            {items.title}
            </p>
          
            {/* IMAGE CENTERED */}
            <div className="flex justify-center items-center w-full">
              <div className="w-[60px] h-[60px] overflow-hidden">
                <img 
                  src={items.img} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
          </div>
          
        ))}
    
  </div>
  <div className='flex  flex-wrap'>
  {Comp2.map((items)=>(
            <div className='w-[114px] h-[125px] 
            rounded-xl bg-[#27AE601A]
            flex flex-col items-center justify-between 
            mt-7 ml-3 p-2 relative'
            key={items.id}
            >
          
            {/* TEXT */}
            <p className='text-center text-[#1E1E1E] font-medium text-[14px] h-[40px] overflow-hidden'>
            {items.title}
            </p>
          
            {/* IMAGE CENTERED */}
            <div className="flex justify-center items-center w-full">
              <div className="w-[60px] h-[60px] overflow-hidden">
                <img 
                  src={items.img} 
                  alt="" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          
          </div>
          
        ))}
  </div>
  </div>
  )
}

 export default Comp6


