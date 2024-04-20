import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MdPhoneEnabled, MdOutlineMyLocation } from "react-icons/md";
import { IoMdMail } from "react-icons/io";


const page = () => {
  return (
    <div>
        <Header/>
        
        <div className='mb-6'>

        <div className='container relative p-3 space-y-4 md:space-y-2'>

            <div className='md:grid grid-cols-3 shadow rounded p-3 mt-8 bg-white'>
                 <div className='col-span-1 text-center p-3  space-y-2'>
                    <p className='flex justify-center w-full '><MdPhoneEnabled className='text-orange-500' size='30'/></p>
                    <p className='text-md text-black font-medium'>Contact number</p>
                    <p className='text-sm text-gray-500'>(+91) 9810073129</p>

                </div>

                <div className='col-span-1 text-center p-3 md:border-l md:border-r border-t border-b md:border-t-0 md:border-b-0 space-y-2'>
                    <p className='flex justify-center w-full '><IoMdMail className='text-orange-500' size='30'/></p>
                    <p className='text-md text-black font-medium'>Our Mail Box</p>
                    <p className='text-sm text-gray-500'>info@mascotitsolutions.com</p>

                </div>

                <div className='col-span-1 text-center p-3  space-y-2'>
                    <p className='flex justify-center w-full '><MdOutlineMyLocation className=' text-orange-500' size='30'/></p>
                    <p className='text-md text-black font-medium'>Our Location</p>
                    <p className='text-sm text-gray-500'>Metro Pillar Number 564, 14/3, Mathura Rd, Sector 31, Faridabad, Haryana 121003</p>

                </div>

            </div>  


            <div className='md:p-8 '>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9707408062827!2d77.3053371745963!3d28.450298392334414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce75ddba6a5a1%3A0xacbea403a04c004a!2sMetro%20Pillar%20Number%20564%2C%20NH-19%2C%20Sector%2032%2C%20Faridabad%2C%20Haryana%20121003!5e0!3m2!1sen!2sin!4v1702643318751!5m2!1sen!2sin" 
                    width="100%" height="450" 
                    
                    className='border rounded shadow' 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
               

            </div>


            {/* <div className='container text-center p-3 border rounded bg-white'>
                <span className='md:text-lg text-md text-black font-semibold block'>May I help you!</span>
                <span className='text-sm text-orange-500 font-normal block'>Fill in the form below so that our executives can contact you</span>

                <div className='md:grid grid-cols-3 grid-rows-6 mt-8 gap-x-5 gap-y-2 space-y-2 md:space-y-0'>
                    <div className='col-span-2 md:w-2/3'>
                        <span className='bg-white '><input type='text' name='fullname' className=' form-control rounded w-full  outline-none border-0 border-gray-200 focus:border-orange-500 text-sm' style={{height: '40px'}} placeholder='Full name*'/></span>
                       
                   </div>
                   <div className='col-span-2 md:w-2/3'>
                        <span className='bg-white'><input type='text' name='fullname' className=' form-control rounded w-full h-9 outline-none border-0 border-gray-200 focus:border-orange-500 text-sm' style={{height: '40px'}} placeholder='E-mail*'/></span>
                       
                   </div>
                   <div className='col-span-2  md:w-2/3'>
                        <span className='bg-white'><input type='text' name='fullname' className=' form-control rounded w-full h-9 outline-none border-0 border-gray-200 focus:border-orange-500 text-sm' style={{height: '40px'}} placeholder='Contact*'/></span>
                       
                   </div>
                   <div className='col-span-2 md:w-2/3'>
                        <span className='bg-white'><input type='text' name='fullname' className=' form-control rounded w-full h-9 outline-none border-0 border-gray-200 focus:border-orange-500 text-sm' style={{height: '40px'}} placeholder='Subject'/></span>
                       
                   </div>
                   <div className='row-span-2 col-span-2 '>
                        <span className='bg-white'><input type='text' name='fullname' className=' form-control rounded w-full h-full outline-none border-0 border-gray-200 focus:border-orange-500 text-sm' style={{}} placeholder='Message*'/></span>
                       
                   </div>


                </div>

            </div> */}
            
                  


        </div>



        <img
        class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[30%]"
        src="https://themewagon.github.io/pinwheel/images/banner-shape.svg"
        alt=""
        />

        </div>
        
        
        <Footer/>
        </div>
  )
}

export default page