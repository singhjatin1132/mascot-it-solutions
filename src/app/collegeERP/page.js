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
            <span className='text-orange-500 text-3xl font-semibold '>College Enterprise Resource Planning (ERP)</span>
            <span className='w-full flex justify-center'><img className=' shadow  mt-7 mb-8 rounded' src='assests/images/collegeERP.png'  /></span>
            <p className='text-black mt-5 text-md text-sm leading-10'>
                    Mascot college management software is a comprehensive web-based software with a responsive design mobile app. This helps colleges and universities to save time, money and resources. Software allows you to manage the entire academic and administrative processes hassle free. The software and solution for universities and colleges is a compelling value proposition which makes it as one of the most versatile college management system you can have for your college, university or institute. The automated notification system allows you to seamlessly connect Teachers, Students, Administrators and Parents and keep them informed in real-time on all aspects of the institution.
                <br/>It manage online admission, student enrollment, students’ attendance, online fees, grades, assignments, library books, etc. It can also generate online results, marksheet, students’ performance reports, etc and it is totally customized which make it simplify the hassles of faculty and college administrative activity.    
            </p>

        </div>
        <div className='col-span-1  p-5 '>
                <div className='rounded bg-white p-3 shadow-lg md:mt-14'>
                    <span className='text-black font-medium text-lg md:px-3 '>Special Features</span>

                    <div className='flex justify-between items-center md:px-3 mt-2'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Enrollment Managment</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>  

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Course Finder</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Fees Management System</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Communication Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-e-Learning</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Online Classes</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Attendance Management System</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div> 

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Examination Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div> 

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-ID Card Generator</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Library Management System</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Inventory Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Transport Management System</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Space Management</p>
                    <MdToggleOn className='text-green-500' size={35}/>

                    </div>

                    <div className='flex justify-between items-center md:px-3'>
                    <p className='text-sm hover:text-orange-500 hover:underline'>-Noticeboard Management</p>
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