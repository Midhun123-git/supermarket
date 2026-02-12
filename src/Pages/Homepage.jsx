import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Header from '../Components/Header'
import Comp1 from '../Components/Comp1'
import Img1 from "../assets/Img1.png"
import Img2 from "../assets/Comp1/img2.png"
import Img3 from "../assets/Comp1/img3.png"
import Img4 from "../assets/Comp1/img4.png"
import Img5 from "../assets/Comp1/img5.png"
import Img6 from "../assets/Comp1/img6.png"
import Img7 from "../assets/Comp1/img7.png"
import Img8 from "../assets/Comp1/img8.png"
import Img9 from "../assets/Comp1/img9.png"
import Img10 from "../assets/Comp1/img10.png"
import img1 from "../assets/Comp2/img1.png"
import img2 from "../assets/Comp2/img2.png"
import img3 from "../assets/Comp2/img3.png"
import img4 from "../assets/Comp2/img4.png"
import img5 from "../assets/Comp2/img5.png"
import Comp2 from '../Components/Comp2'
import Comp4 from '../Components/Comp4'
import Comp5 from '../Components/Comp5';
import imgg1 from "../assets/Comp5/img1.png"
import imgg2 from "../assets/Comp5/img2.png"
import imgg3 from "../assets/Comp5/img3.png"
import imgg4 from "../assets/Comp5/img4.png"
import L1 from "../assets/Logo/L1.png"
import L2 from "../assets/Logo/L2.png"
import L3 from "../assets/Logo/L3.png"
import L4 from "../assets/Logo/L4.png"

import Comp6 from '../Components/Comp6';
import Footer from '../Components/Footer';
const Homepage = () => {
  return (
    <div className='bg-[#ECF0F1] flex flex-col '>
            <div className='fixed top-0 left-0 right-0 bg-white z-10'>
  <Header/>
            </div>
            {/* First Row Components Starts*/}
            <div className='flex gap-2 mt-27 flex-wrap justify-center'>

                    <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img1}
                    />

<Comp1
                    text="Baby & Kids "
                            img={Img2}
                    />

<Comp1
                    text="Personal Care & Hygiene"
                            img={Img3}
                    />

<Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img4}
                    />

<Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img5}
                    />
                     <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img6}
                    />
                     <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img7}
                    />
                     <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img8}
                    />
                     <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img9}
                    />
                     <Comp1
                    text="Groceries
                            & Kitchen "
                            img={Img10}
                    />
            </div>
            {/* First Row Components Ends*/}

            {/* Second Row Components Starts */}
<div className='flex justify-center'>

<div className=" w-full lg:w-[90%] h-[166px] rounded-xl 
bg-[linear-gradient(to_right,#5B5BD6_0%,#8E7CC3_50%,#EAE6F5_100%)]
flex items-center j px-8
mt-9
">

  <div>
    <h2 className="text-white text-[32px] font-bold">
      Best Home Deals
    </h2>
    <p className="text-white text-[32px] font-medium">
      40% OFF
    </p>
  </div>


</div>
</div>
{/* Second Row Components Ends */}
{/* Third Row Componenet Starts */}
<div className='flex gap-6  flex-wrap  mt-9 justify-center'>
  <Comp2
  bg="#DEFFEC"
  textColor="#27AE60"
  text="Essential Focus"
  text2="Fresh Vegitables"
  img={img1}
  btn="Order Now"
  btnbg="#27AE60"
  btntextcolor="#FFFFFF"
  />

<Comp2
  bg="#FCE4BE"
  textColor="#F39C12"
  text="Daily Saver"
  text2="Grocery Discounts"
  img={img2}
  btn="Order Now"
  btnbg="#FFFFFF"
  btntextcolor="#1E1E1E"
  />

<Comp2
  bg="#FADDDA"
  textColor="#E74C3C"
  text="Must-Have"
  text2="Snacks & Beverages"
  img={img3}
  btn="Order Now"
  btnbg="#E74C3C"
  btntextcolor="#FFFFFF"
  />

<Comp2
  bg="#FCF3D0"
  textColor="#F1C40F"
  text="Best Value"
  text2="Dairy & Bakery"
  img={img4}
  btn="Order Now"
  btnbg="#FFFFFF"
  btntextcolor="#4D0000"
  />

<Comp2
  bg="#DDCECE"
  textColor="#4D0000"
  text="Trending Now"
  text2="Chocolates"
  img={img5}
  btn="Order Now"
  btnbg="#4D0000"
  btntextcolor="#FFFFFF"
  />
</div>
{/* Third Row Componenet Ends */}
{/* Comp4 Starts */}
<div className='mt-7 lg:ml-17 m-2'>
    <Comp4/>
</div>
{/* Comp4 Ends*/}
{/* Text Beofore Comp5 Starts */}
<div className='flex justify-evenly items-center mt-9'>
 <div className='flex items-center justify-between w-[90%]'> 
        <p className='font-medium text-[18px] text-[#1E1E1E]'>Recommended for you</p>
        <div className='flex gap-3 items-center'>
                        <p className='text-[#27AE60] text-[16px] font-medium'>See All</p>
                        <div className='flex 
                        items-center 
                        justify-center 
                        rounded-full
                        w-[38px] h-[38px] bg-[#27AE60]
                        cursor-pointer
                        '>
                                                <FaArrowRightLong size={19} className='text-white'/>
                        </div>
        </div>
 </div>
</div>
{/* Text Beofore Comp5 Ends */}
{/* Comp5 Starts */}
<div className='flex gap-6 flex-wrap justify-center mt-6'>
   <Comp5
  image={imgg1}
  title="Amul Dark Chocolate 70% Cocoa"
  per="5%"
  gram="200g"
  newPrice="₹180"
  isCounter={true}
/> 

<Comp5
  image={imgg2}
  title="Organic Almond Milk"
  per="10%"
  oldPrice="₹280"
  gram="1L"
  newPrice="₹280"

/> 

<Comp5
  image={imgg3}
  title="Hybrid Tomato"
  per="3%"
  oldPrice="₹30"
  gram="500g"
  newPrice="₹25"

/> 
<Comp5
  image={imgg4}
  title="Broccoli"
  per="10%"
  oldPrice="₹60"
  gram="1piece"
  newPrice="₹50"

/> 

<Comp5
  image={imgg1}
  title="Amul Dark Chocolate 70% Cocoa"
  per="5%"
  gram="200g"
  newPrice="₹180"
  isCounter={true}
/> 

<Comp5
  image={imgg2}
  title="Organic Almond Milk"
  per="10%"
  oldPrice="₹280"
  gram="1L"
  newPrice="₹280"

/> 

<Comp5
  image={imgg3}
  title="Hybrid Tomato"
  per="3%"
  oldPrice="₹30"
  gram="500g"
  newPrice="₹25"

/> 
<Comp5
  image={imgg4}
  title="Broccoli"
  per="10%"
  oldPrice="₹60"
  gram="1piece"
  newPrice="₹50"

/> 
</div>
{/* Comp 5 Ends*/}
{/* Flassh Sale Div Starts */}
<div className='flex justify-center mt-9'>
<div className='w-[94%] min-h-[314px] 
flex flex-col 
lg:p-4 p-2
 bg-[#EAFFF3]
 rounded-[20px]
  
 '>
<div className='flex justify-between w-full'>
<p className='text-[#F39C12] font-semibold text-[18px]'>Flash Sale</p>
<p className='text-[#E74C3C] mr-0
 text-[14px] 
 font-semibold'>
02h
<span className='ml-2 text-[14px] 
 font-semibold text-[#E74C3C]'>
30m
</span>
<span className='ml-2 text-[14px] 
 font-semibold text-[#E74C3C]'>
02s
</span>
</p>
</div>
<div className='flex gap-4 flex-wrap'>
<Comp5
  image={imgg4}
  title="Broccoli"
  per="10%"
  oldPrice="₹60"
  gram="1piece"
  newPrice="₹50"

/> 
<Comp5
  image={imgg2}
  title="Organic Almond Milk"
  per="10%"
  oldPrice="₹280"
  gram="1L"
  newPrice="₹280"

/> 
<Comp5
  image={imgg3}
  title="Hybrid Tomato"
  per="3%"
  oldPrice="₹30"
  gram="500g"
  newPrice="₹25"

/> 
<Comp5
  image={imgg1}
  title="Amul Dark Chocolate 70% Cocoa"
  per="5%"
  gram="200g"
  newPrice="₹180"
  isCounter={true}
/> 
<Comp5
  image={imgg4}
  title="Broccoli"
  per="10%"
  oldPrice="₹60"
  gram="1piece"
  newPrice="₹50"

/> 
<Comp5
  image={imgg2}
  title="Organic Almond Milk"
  per="10%"
  oldPrice="₹280"
  gram="1L"
  newPrice="₹280"

/> 
<Comp5
  image={imgg3}
  title="Hybrid Tomato"
  per="3%"
  oldPrice="₹30"
  gram="500g"
  newPrice="₹25"

/> 
<Comp5
  image={imgg1}
  title="Amul Dark Chocolate 70% Cocoa"
  per="5%"
  gram="200g"
  newPrice="₹180"
  isCounter={true}
/> 
</div>

</div>
</div>
{/* Flassh Sale Div Ends */}
{/* Top Brand Text Bef  StRTS */}
<p className='lg:ml-10 mt-7 p-2 text-[16px]
font-semibold text-[#1E1E1E]
flex justify-center lg:justify-start
'>Top Brands</p>
{/* Top Brand Text Bef  Ends */}

{/* Top Brands Starts */}
<div className='flex gap-3 justify-center  mt-4 flex-wrap'>
                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L1} alt="" className="w-[116px] h-[36] object-cover "/>
                       
                              
                </div>

                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L2} alt=" " className="w-[60px] h-[62px] object-cover "/>
                       
                              
                </div>

                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L4} alt=" " className="w-[90px] h-[50px] object-cover "/>
                       
                              
                </div>

                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L3} alt=" " className="w-[62px] h-[64px] object-cover "/>
                       
                              
                </div>
                
                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L4} alt=" " className="w-[90px] h-[50px] object-cover "/>
                       
                              
                </div>
                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L3} alt=" " className="w-[62px] h-[64px] object-cover "/>
                       
                              
                </div>
                <div className='h-[108px] w-[187px]
                rounded-[10px] border border-[#27AE60]
                bg-[#FFFFFF]
                flex items-center justify-center
                '>
                        
                        <img src={L4} alt=" " className="w-[90px] h-[50px] object-cover "/>
                       
                              
                </div>
</div>
{/* Top Brands Ends */}

<p className='lg:ml-10 mt-7 p-2 text-[16px]
font-semibold text-[#1E1E1E]
flex justify-center lg:justify-start
'>Groceries & Kitchen </p>
{/* kitchen Items Starts */}
<div className='flex justify-center p-6 items-center mt-4'>
 <Comp6/>
</div>
{/* kitchen Items Ends */}

<p className='lg:ml-10 mt-7 p-2 text-[16px]
font-semibold text-[#1E1E1E]
flex justify-center lg:justify-start
'>Baby & Kids</p>
{/* Kids Item Starts */}
<div className='flex justify-center p-6 items-center mt-4'>
 <Comp6/>
</div>
{/* Kids Item Ends */}


{/* footer Starts */}
<div className='mt-9'>
        <Footer/>
</div>
{/* footer Ends */}
    </div>
  )
}

export default Homepage