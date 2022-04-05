import React from 'react';
import './Bus.css'

const Bus = (props) => {
    const {b_name,b_img_out,b_type,b_seat,b_ticket_price,b_route,b_sp_time,b_counter_no,b_super_no} = props.bus;
    
    return (
        <div>
          
         
           
          <div className="wrapper bg-gray-400 antialiased text-gray-900 rounded-lg">
<div className='img'>
    
    <img src={b_img_out} alt=" random imgee" className="w-full object-center object-cover  rounded shadow-md" />    
    
 <div className="relative px-4 -mt-16  ">
   <div className="bg-white p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        {b_type}
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    {b_seat} Seats  &bull; {b_route}
  </div>  
    </div>
    
    <h4 className="mt-1 text-xl font-semibold uppercase leading-tight truncate">{b_name}</h4>
 
  <div className="mt-1 text-2xl font-bold">
  ৳{b_ticket_price}
    <span className="text-gray-600 text-sm">   /person</span>
  </div>
  <div className="mt-4">
    <span className="text-teal-600 text-md font-semibold">Sherpur: </span>
    <span className="text-sm text-gray-600">{b_sp_time}</span>
    <div className='flex mt-4 text-center justify-center'>
        <a href={"tel:" + b_counter_no} type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>
  Counter
</a>
<a href={"tel:" + b_super_no} type="button" class="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 mr-2 mb-2">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 8l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
</svg>
  Supervisor
</a>
    </div>
  </div>  
  </div>
 </div>
  
</div>
  </div>

        </div>
    );
};

export default Bus;