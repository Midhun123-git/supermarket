import React from 'react'
import Logo from "../assets/FooterLogo.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    
    <div className='w-full bg-[#27AE60] px-6 py-12'>

        
         <div className='max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12'>

            {/* LEFT SECTION */}
            <div className='flex flex-col gap-6'>

                 
                 <img 
                   src={Logo} 
                   alt="Footer Logo" 
                   className='w-[250px] md:w-[320px] h-auto object-contain'
                 />

                 <div className='flex gap-5 mt-2'>
                   <FaInstagram size={22} className='text-white cursor-pointer hover:scale-110 transition'/>
                   <FaFacebookF size={22} className='text-white cursor-pointer hover:scale-110 transition'/>
                   <BsTwitterX size={22} className='text-white cursor-pointer hover:scale-110 transition'/>
                   <FaLinkedinIn size={22} className='text-white cursor-pointer hover:scale-110 transition'/>
                 </div>

                
                 <p className='text-white text-sm md:text-base mt-4'>
                   © 2025 Pokak Technologies Pvt Ltd
                 </p>
            </div>


            
            <div className='flex flex-col sm:flex-row gap-12'>

                {/* Quick Links */}
                <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-lg text-white mb-2'>
                          Quick Links
                        </p>

                    
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Home</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Orders</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Track Order</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Offers</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Cart</p>
                </div>

                {/* Customer Care */}
                <div className='flex flex-col gap-3'>
                        <p className='font-semibold text-lg text-white mb-2'>
                          Customer Care
                        </p>

                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Help Center</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>FAQ</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Contact Support</p>

                        
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>
                          Cancellation & Refund Policies
                        </p>

                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Terms & Conditions</p>
                        <p className='text-sm md:text-base text-white hover:underline cursor-pointer'>Privacy Policies</p>
                </div>

            </div>

         </div>

    </div>
  )
}

export default Footer
