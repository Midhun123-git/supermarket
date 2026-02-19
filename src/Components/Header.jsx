import React, { useState } from 'react'
 import Logo from "../assets/Logo.png"
 import { CiLocationOn } from "react-icons/ci";
 import { CiSearch } from "react-icons/ci";
 import { IoCartOutline } from "react-icons/io5";
 import { FaUserLarge } from "react-icons/fa6";
 import { CiDiscount1 } from "react-icons/ci";
 import { HiBars3 } from "react-icons/hi2";     
 import { IoIosClose } from "react-icons/io";  
 
const Header = () => {
  const [open,setOpen]=useState(false);
  return (
    <>
    <div className='w-full min-h-[102px] bg-white  flex items-center px-2 xl:px-20 lg:px-2'>
    <div className='lg:hidden mr-3'>
    <HiBars3 size={28} onClick={() => setOpen(true)} />
    </div>
    <div className='flex items-center justify-between relative w-full'> 
   {/* Left Section   */}
   <div>
   <img src={Logo} alt=""  className='w-[120px] h-[34px] md:w-[180px] md:h-[49px]'/>
   </div>
   {/* left Section */}
    {/* Right Section */}
    <div className='flex  xl:gap-7 lg:gap-3 items-center'>
    <div className='hidden lg:flex gap-2 items-center '>
        <CiLocationOn size={20}/>
        <p  className="font-inter text-[#1E1E1E] font-semibold text-[16px]">Location</p>
    </div>
    <div className='relative w-full md:w-auto'>
    <CiSearch  size={16} className='absolute left-4 top-1/2  -translate-y-1/2'/>
    <input type="text"  placeholder='Search For Ice Cream' className='h-[40px] 
    w-full md:w-[505px]
     rounded-3xl 
     bg-[#ECF0F1]
      pl-11
      focus:outline-none
      border-none
      '/>
    </div>
    <div className='hidden lg:flex flex-col gap-1 items-center'>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6836 5.66992C12.2357 5.67013 12.6836 6.11776 12.6836 6.66992C12.6835 7.222 12.2356 7.66972 11.6836 7.66992H11.3379C6.18084 7.67011 2.00008 11.8507 2 17.0078C2.0001 22.1649 6.18086 26.3455 11.3379 26.3457H12.0283C17.1855 26.3457 21.3661 22.165 21.3662 17.0078C21.3663 16.4557 21.8142 16.008 22.3662 16.0078C22.9184 16.0078 23.3661 16.4556 23.3662 17.0078C23.3661 23.2696 18.2901 28.3457 12.0283 28.3457H11.3379C5.07628 28.3455 9.84402e-05 23.2694 0 17.0078C7.52492e-05 10.7462 5.07627 5.67011 11.3379 5.66992H11.6836ZM21.7803 0C22.7373 3.14502 25.1928 5.6499 28.3311 6.71582C25.1924 7.78171 22.7372 10.2881 21.7803 13.4336C20.8234 10.2884 18.3689 7.78176 15.2305 6.71582C18.3686 5.64986 20.8233 3.14492 21.7803 0Z" fill="#27AE60"/>
          </svg>
      <p className='text-[#1E1E1E] text-[12px] font-semibold1' >Ai</p>
    </div>
    <div className='hidden lg:flex flex-col gap-1 items-center'>
    <CiDiscount1 size={29} />
      <p className='text-[#1E1E1E] text-[12px] font-semibold' >Offers</p>
    </div>
    <div className='hidden lg:flex flex-col gap-1 items-center '>
     
    <IoCartOutline size={29}/>
    <p className='text-[#1E1E1E] text-[12px] font-semibold1'>Cart</p>

    </div>
    </div>
   {/* Right Section */}
   
    </div>
    {/* Profile */}
    <div className='hidden lg:flex flex-col ml-9 gap-1 '>
    <div className='rounded-full bg-[#D9D9D9] 
    flex 
    flex-col
    items-center 
    justify-end 

    h-[34px] w-[34px]'>
    <FaUserLarge size={24} className='text-[#8F8F8F] rounded-full'/>
    </div>
    <p className='text-[#1E1E1E] text-[12px] font-semibold1'>Profile</p>
    </div>
    {/* Profile */}
     {/* Cart Notification */}
      <div className='w-[20px] h-[20px] rounded-full
     bg-[#E74C3C] hidden lg:flex justify-center items-center  absolute xl:top-4 xl:right-35
     lg:right-18 lg:top-4
      text-white'>
      1
      </div>
      {/* Cart Notification */}
    </div>
    {/* Mobile Version SideBar */}
    {
        open && (
          <div 
            className='fixed inset-0 bg-black/40 lg:hidden'
            onClick={() => setOpen(false)}
          />
        )
      }

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-[200px] bg-white shadow-lg z-50 transform transition-transform duration-300 lg:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}>

        {/* Close Button */}
        <div className='flex justify-end p-4'>
          <IoIosClose size={30} onClick={() => setOpen(false)} />
        </div>

        {/* Menu Items */}
        <div className='flex flex-col gap-6 px-6 mt-6 text-lg'>
        <div className='flex flex-col gap-7 relative'>
        <div className='lg:hidden  flex-col  gap-1 '>
    <div className='rounded-full bg-[#D9D9D9] 
    flex 
    flex-col
    items-center 
    justify-end 

    h-[34px] w-[34px]'>
    <FaUserLarge size={24} className='text-[#8F8F8F] rounded-full'/>
    </div>
    <p className='text-[#1E1E1E] text-[12px] font-semibold1'>Profile</p>
    </div>

    <div className='hidden lg:flex gap-2 items-center '>
        <CiLocationOn size={20}/>
        <p  className="font-inter text-[#1E1E1E] font-semibold text-[16px]">Location</p>
    </div>
    <div className='lg:hidden flex-col gap-1 items-center'>
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6836 5.66992C12.2357 5.67013 12.6836 6.11776 12.6836 6.66992C12.6835 7.222 12.2356 7.66972 11.6836 7.66992H11.3379C6.18084 7.67011 2.00008 11.8507 2 17.0078C2.0001 22.1649 6.18086 26.3455 11.3379 26.3457H12.0283C17.1855 26.3457 21.3661 22.165 21.3662 17.0078C21.3663 16.4557 21.8142 16.008 22.3662 16.0078C22.9184 16.0078 23.3661 16.4556 23.3662 17.0078C23.3661 23.2696 18.2901 28.3457 12.0283 28.3457H11.3379C5.07628 28.3455 9.84402e-05 23.2694 0 17.0078C7.52492e-05 10.7462 5.07627 5.67011 11.3379 5.66992H11.6836ZM21.7803 0C22.7373 3.14502 25.1928 5.6499 28.3311 6.71582C25.1924 7.78171 22.7372 10.2881 21.7803 13.4336C20.8234 10.2884 18.3689 7.78176 15.2305 6.71582C18.3686 5.64986 20.8233 3.14492 21.7803 0Z" fill="#27AE60"/>
          </svg>
      <p className='text-[#1E1E1E] text-[12px] font-semibold1' >Ai</p>
    </div>
    <div className=' lg:hidden flex-col gap-1 items-center'>
    <CiDiscount1 size={29} />
      <p className='text-[#1E1E1E] text-[12px] font-semibold' >Offers</p>
    </div>
    <div className=' lg:hidden flex-col gap-1 items-center '>
     
    <IoCartOutline size={29}/>
    <p className='text-[#1E1E1E] text-[12px] font-semibold1'>Cart</p>

    </div>
    <div className='w-[20px] h-[20px] rounded-full
     bg-[#E74C3C] flex lg:hidden justify-center items-center  absolute top-55 left-3
      text-white'>
      1
      </div>
    </div>
        </div>

      </div>
    </>
  )
}

export default Header