import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { FaLaptop, FaEye } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";
import { GoGoal } from "react-icons/go";
import { GiLightningSpanner } from "react-icons/gi";

const page = () => {
  return (
    
    <div>
        <Header/>
        

        <div className='p-6 my-6'>

          <div className='border rounded relative p-5'>


              <div className='pt-4'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <FaLaptop className='text-orange-500' size='60'/>
                  <p className='text-2xl text-black font-medium'>Responsive Design</p>
                </span>
                <p className='italic'>
                "MIS a highly innovative software & technology solutions provider, established in the form of a hardware solution provider in 2002 with the aim of providing a leading edge intelligent technical solutions on the hardware & software aspects of a business's enterprise.<br/>
                 By 2013 MIS moved into offering customized software solutions along with hardware solutions, and with the progress of time by 2018 the company moved away from hardware solutions, to offer exclusive and bespoke software related information / solutions based upon specific needs and requirements."
                </p>

              </div>


              <div className='pt-8'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <BsLightningFill className='text-orange-500' size='60'/>
                  <p className='text-2xl text-black font-medium'>Innovative Ideas</p>
                </span>
                <p className='italic'>
                  "Over the years, MIS has worked with a vision to create & devise the easiest way& means for a customer to be able to access their data and information at any point of time, from anywhere, in a secure and safe manner.<br/>
                  Our specialists have expertise in the creation of tailor made software's which helps in providing specialized customized and specifically suited products, IT services and customer based end to end solutions for our clients all across the Delhi-NCR region.
                  MIS as a company addresses the client's needs, deeply understanding clients' businesses and delivering optimized IT solutions from the initial phase of scoping the requirements, up to the final delivery, along with maintenance and continuous upgrade."
                </p>

              </div>


              <div className='pt-8'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <GoGoal className='text-orange-500' size='60'/>
                  <p className='text-2xl text-black font-medium'>Mission</p>
                </span>
                <p className='italic'>
                  "MIS mission is to enhance the business operation of its clients by developing and/or implementing premium IT products and services.<br/>

                  MIS mission includes:<br/>

                  1. Providing high quality software development services, professional consulting and development outsourcing that would improve our customers' operations;<br/>
                  2. Making access to information easier and securer (Enterprise Business);<br/>
                  3. Improving communication and data exchange (Business to Business);<br/>
                  4. Providing our customers with a Value for Money and<br/>
                  5. Providing our employees with meaningful work and advancement opportunities."<br/>
                </p>

              </div>

              <div className='pt-8'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <FaEye className='text-orange-500' size='60'/>
                  <p className='text-2xl text-black font-medium'>Vision</p>
                </span>
                <p className='italic'>
                  "Infinite Solutions is a leading IT company for Consulting Services and Deployment of best of breed Business Solutions to top tier domestic and international customers."
                </p>

              </div>


              <div className='pt-8'>
                <span className='flex justify-center items-center gap-x-3 pb-3'>
                  <GiLightningSpanner className='text-orange-500' size='60'/>
                  <p className='text-2xl text-black font-medium'>Technical Skills</p>
                </span>
                <p className='italic'>
                  "MIS has full time employees responsible for business development and deployment of IT solutions and IT infrastructure, hardware maintenance and application development and support. The team is comprised of experienced IT experts and young but reach in knowledge IT professionals.<br/>

                  MIS has expertise and experience in the following areas:<br/>
                  • Software & Solution: Computer Associates software products, Transport Management Solution, Warehouse Management Solution, College Management Solution<br/>
                  • Data Bases: MYSQL, Oracle<br/>
                  • System Software: MS Windows, Linux<br/>
                  • Hardware: Intel Servers, Storage, PC, Notebooks, Pocket PC, Network Equipment, Peripherals<br/>
                  • Consultancy / Business consulting: ERP, Business Process Management, Document Management, Supply Chain Management , Inventory Management System.<br/>
                  • Industry Knowledge Solutions: Warehouse Management, Data Management, Mobile Working, Customer Relationship Management, Transport Management, School & College Management."<br/>
                </p>

              </div>


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