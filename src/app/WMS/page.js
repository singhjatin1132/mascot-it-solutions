import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MdToggleOn } from "react-icons/md";

const page = () => {
  return (
    <div>
        <Header/>

            <div className='p-5 my-6'>

                <div className='container relative'>

                    <div className='md:grid grid-cols-3 border p-3 py-5 rounded'>
                        <div className='col-span-2 p-3'>
                            <span className='text-orange-500 text-3xl font-semibold '>Warehouse Management System (WMS)</span>
                            <span className='w-full flex justify-center'><img className=' shadow  mt-7 mb-8 rounded' src='assests/images/warehouse.jpg'  /></span>
                            <p className='text-black mt-5 text-md text-sm leading-10'>
                                        <span className='font-semibold pt-2'>Warehouse Management system (WMS)</span> is the process that allows organizations to manage the daily supplies and deliveries of warehouse operations. A typical warehouse system deals with services related to inventory management, inbound and outbound operations, inventory tracking, demand forecasting, processing orders and shipments, order processing, shipping, receiving, inventory cycle counts, inventory turnover, picking processes, put-away, and auditing.<br/>
                                        <span className='font-semibold'>Features of warehouse management:</span><br/>
                                        You should consider the following points in your warehouse management software so that you can choose the right WMS tool for your business:
                                        <br/> <span className='font-semibold'>• Inventory Control-</span>WMS software allows companies to track inventory levels by enabling the use of advanced tracking systems. It makes use of various functionalities like barcode scanners to make sure that goods can be searched whenever they are required to move.
                                        <br/> <span className='font-semibold'>• Real-time capabilities-</span> To enable real-time inventory processing, the products can be included through integrated hardware and software programs. This feature allows for receiving real-time information.
                                        <br/><span className='font-semibold'>• Serial Number Tracking –</span>The items which are received can be assigned individual serial numbers and across warehouses and shipments that serial number can be tracked with serial number tracking functionality.
                                        <br/> <span className='font-semibold'>• Picking Management- </span> In a great deal, you can improve the efficiency of your warehouse with the help of the advanced picking management feature. You can experience active picking paths along with paperless order picking with this characteristic. It offers you a variety of picking techniques.
                                        <br/> <span className='font-semibold'>• Mobile readiness –</span>The managers and warehouse staff can perform the tasks effectively through mobile devices and tablets. Users can have access from mobile devices and tablets.
                                        <br/><span className='font-semibold'>• Warehouse Modeling -</span> The users can create a warehouse workflow change and can have the report card metrics through warehouse modelling functionality. The warehouse managers can shift workflows so that they can boost efficiency. This feature can proactively advise optimizations.
                            </p>

                        </div>
                        <div className='col-span-1  p-5 '>
                                <div className='rounded bg-white p-3 shadow-lg md:mt-14'>
                                    <span className='text-black font-medium text-lg md:px-3 '>Special Features</span>

                                    <div className='flex justify-between items-center md:px-3 mt-2'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Item Inventory</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>  

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Item Inbound/Outbond</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Item Tracking</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Supplier Managment</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Client Managment</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Warehouse Managment</p>
                                    <MdToggleOn className='text-green-500' size={35}/>

                                    </div>

                                    <div className='flex justify-between items-center md:px-3'>
                                    <p className='text-sm hover:text-orange-500 hover:underline'>-Lables Managment</p>
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