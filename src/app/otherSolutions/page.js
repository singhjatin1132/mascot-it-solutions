import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { MdToggleOn } from "react-icons/md";

const page = () => {
  return (
    <div>
        <Header/>

        <div className='p-5 my-6'>

<div className='container relative'>

    <div className='md:grid grid-cols-3 border p-3 py-5 rounded'>
        <div className='col-span-2 p-3'>
            <span className='text-orange-500 text-3xl font-semibold '>Transport Management System (TMS)</span>
            <span className='w-full flex justify-center'><img className=' shadow  mt-7 mb-8 rounded' src='assests/images/otherSoln.jpg'  /></span>
            <p className='text-black mt-5 text-md text-sm leading-10'>
                
            </p>

        </div>
        <div className='col-span-1  p-5 '>
                <div className='rounded bg-white p-3 shadow-lg md:mt-14'>
                    <span className='text-black font-medium text-lg md:px-3 '>Special Features</span>

                    <div className='flex justify-between items-center md:px-3 mt-2'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-QR Code Generation</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>  

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Supplier Mangement</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Kitchen Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Inventory Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                   

                    

                    <button className='mt-10 text-white flex justify-center bg-orange-500 rounded p-2 px-5'>Request Demo</button>                 

                </div>

                

        </div>

    </div>
    

</div>



<img
class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
alt=""/>

</div>


        <Footer/>

    </div>
  )
}

export default page