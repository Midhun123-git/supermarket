import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Header from '../Components/Header'
import Comp1 from '../Components/Comp1'
import Comp2 from '../Components/Comp2'
import Comp4 from '../Components/Comp4'
import Comp5 from '../Components/Comp5';
import Comp6 from '../Components/Comp6';
import Footer from '../Components/Footer';

import imgg1 from "../assets/Comp5/img1.png"
import imgg2 from "../assets/Comp5/img2.png"
import imgg3 from "../assets/Comp5/img3.png"
import imgg4 from "../assets/Comp5/img4.png"

import L1 from "../assets/Logo/L1.png"
import L2 from "../assets/Logo/L2.png"
import L3 from "../assets/Logo/L3.png"
import L4 from "../assets/Logo/L4.png"

import bhd from "../assets/Best-home-deals.png"

const Homepage = () => {
  return (
    <div className='bg-[#ECF0F1]'>

      {/* Fixed Header */}
      <div className='fixed top-0 left-0 right-0 bg-white z-10'>
        <Header/>
      </div>

      {/*  MASTER CENTER CONTAINER */}
      <div className='max-w-[1320px] mx-auto px-6 xl:px-0 pt-27'>

        {/* First Row */}
        <Comp1 />

        {/* Banner */}
        <div className='mt-7'>
          <img 
            src={bhd} 
            alt=""  
            className='w-full h-[166px] object-cover rounded-xl'
          />
        </div>

        {/* Comp2 */}
        <div className='mt-9'>
          <Comp2/>
        </div>

        {/* Comp4 */}
        <div className='mt-7'>
          <Comp4/>
        </div>

        {/* Recommended Header */}
        <div className='flex items-center justify-between mt-9'>
          <p className='font-medium text-[18px] text-[#1E1E1E]'>
            Recommended for you
          </p>

          <div className='flex gap-3 items-center'>
            <p className='text-[#27AE60] text-[16px] font-medium'>
              See All
            </p>

            <div className='flex items-center justify-center rounded-full w-[38px] h-[38px] bg-[#27AE60] cursor-pointer'>
              <FaArrowRightLong size={19} className='text-white'/>
            </div>
          </div>
        </div>

        {/* Comp5 Grid */}
        <div className='grid xl:grid-cols-8 lg:grid-cols-5 grid-cols-2 gap-4 lg:gap-8 xl:gap-4 mt-7'>
          <Comp5 image={imgg1} title="Amul Dark Chocolate 70% Cocoa" per="5%" gram="200g" newPrice="₹180" isCounter />
          <Comp5 image={imgg2} title="Organic Almond Milk" per="10%" oldPrice="₹280" gram="1L" newPrice="₹280"/>
          <Comp5 image={imgg3} title="Hybrid Tomato" per="3%" oldPrice="₹30" gram="500g" newPrice="₹25"/>
          <Comp5 image={imgg4} title="Broccoli" per="10%" oldPrice="₹60" gram="1piece" newPrice="₹50"/>
          <Comp5 image={imgg1} title="Amul Dark Chocolate 70% Cocoa" per="5%" gram="200g" newPrice="₹180" isCounter />
          <Comp5 image={imgg2} title="Organic Almond Milk" per="10%" oldPrice="₹280" gram="1L" newPrice="₹280"/>
          <Comp5 image={imgg3} title="Hybrid Tomato" per="3%" oldPrice="₹30" gram="500g" newPrice="₹25"/>
          <Comp5 image={imgg4} title="Broccoli" per="10%" oldPrice="₹60" gram="1piece" newPrice="₹50"/>
        </div>

        {/* Flash Sale */}
        <div className='mt-9'>
          <div className='min-h-[314px] bg-[#EAFFF3] rounded-[20px] p-4'>
            <div className='flex justify-between'>
              <p className='text-[#F39C12] font-semibold text-[18px]'>
                Flash Sale
              </p>

              <p className='text-[#E74C3C] text-[14px] font-semibold'>
                02h <span className='ml-2'>30m</span> <span className='ml-2'>02s</span>
              </p>
            </div>

            <div className='flex gap-2 flex-wrap mt-3'>
              <Comp5 image={imgg4} title="Broccoli" per="10%" oldPrice="₹60" gram="1piece" newPrice="₹50"/>
              <Comp5 image={imgg2} title="Organic Almond Milk" per="10%" oldPrice="₹280" gram="1L" newPrice="₹280"/>
              <Comp5 image={imgg3} title="Hybrid Tomato" per="3%" oldPrice="₹30" gram="500g" newPrice="₹25"/>
              <Comp5 image={imgg1} title="Amul Dark Chocolate 70% Cocoa" per="5%" gram="200g" newPrice="₹180" isCounter/>
              <Comp5 image={imgg4} title="Broccoli" per="10%" oldPrice="₹60" gram="1piece" newPrice="₹50"/>
              <Comp5 image={imgg2} title="Organic Almond Milk" per="10%" oldPrice="₹280" gram="1L" newPrice="₹280"/>
              <Comp5 image={imgg3} title="Hybrid Tomato" per="3%" oldPrice="₹30" gram="500g" newPrice="₹25"/>
              <Comp5 image={imgg1} title="Amul Dark Chocolate 70% Cocoa" per="5%" gram="200g" newPrice="₹180" isCounter/>
            </div>
          </div>
        </div>

        {/* Top Brands */}
        <p className='mt-7 text-[16px] font-semibold text-[#1E1E1E]'>
          Top Brands
        </p>

        <div className='grid xl:grid-cols-6 lg:grid-cols-3 grid-cols-1 gap-6 mt-5'>
          {[L1, L2, L4, L3, L4, L3].map((logo, index) => (
            <div key={index} className='h-[108px] w-[187px] rounded-[10px]  bg-white flex items-center justify-center'>
              <img 
  src={logo} 
  alt="" 
  className="max-h-[60px] max-w-[120px] object-contain"
/>
            </div>
          ))}
        </div>

        {/* Groceries */}
        <p className='mt-7 text-[16px] font-semibold text-[#1E1E1E]'>
          Groceries & Kitchen
        </p>

        <div className='mt-4'>
          <Comp6/>
        </div>

        {/* Baby & Kids */}
        <p className='mt-7 text-[16px] font-semibold text-[#1E1E1E]'>
          Baby & Kids
        </p>

        <div className='mt-4'>
          <Comp6/>
        </div>

      </div>

      {/* Footer */}
      <div className='mt-60'>
 <Footer/>
      </div>
     

    </div>
  )
}

export default Homepage