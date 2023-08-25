import React from 'react';

const Signin = () => {
  return (
    <div className='lg:my-10 my-2'>
      
      <div class="lg:flex">
  
  <div class="flex-initial lg:w-[30%] mt-4  rounded-lg bg-cyan-500 shadow-lg shadow-cyan-500/50 ">
   <h1 className='text-2xl lg:pt-10 p-2 text-center font-bold font-serif'>Registration Your Personal Information:</h1>
  </div>
  <div class="lg:p-10 p-4 flex-initial lg:w-[70%] mt-4 border-2  
  border-indigo-500 lg:mx-4 bg-indigo-500 shadow-lg shadow-indigo-500/50 rounded-lg">
  
{/* first section */}

  <div class="grid lg:grid-cols-2 gap-4">
  <div>
   <h1 className='text-xl font-bold font-serif'> First Name:</h1>
            <input className='lg:w-[80%] w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="text" name="" id="" />
  </div>
  <div>
   <h1 className='text-xl font-bold font-serif'> Last Name:</h1>
            <input className='lg:w-[80%] w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4' type="text" name="" id="" />
  </div>
  <div>
   <h1 className='text-xl font-bold font-serif'> Email:</h1>
            <input className='lg:w-[80%] w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="email" name="" id="" />
  </div>
  <div>
   <h1 className='text-xl font-bold font-serif'> Phone:</h1>
            <input className='lg:w-[80%] w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="number" name="" id="" />
  </div>

 
</div>


{/* faculty Department Name:  */}

<div className='my-2'>
<div>
   <h1 className='text-xl font-bold font-serif'> Faculty Name:</h1>
            <input className='w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="text" name="" id="" />
  </div>
  <div className='my-2'>
   <h1 className='text-xl font-bold font-serif'> Department Name:</h1>
            <input className='w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="text" name="" id="" />
  </div>
</div>

{/* Semester info: */}

<div class="grid lg:grid-cols-3 lg:w-[90%] gap-4">
<div>
   <h1 className='text-xl font-bold font-serif'> Session:</h1>
            <input className='lg:w-[80%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4' type="text" name="" id="" />
  </div>
 <div>
 <div>
   <h1 className='text-xl font-bold font-serif'> Level:</h1>
            <input className='lg:w-[80%]  h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4' type="text" name="" id="" />
  </div>
 </div>
  <div>
  <div>
   <h1 className='text-xl font-bold font-serif'> Semester:</h1>
            <input className='lg:w-[80%]  h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4 ' type="text" name="" id="" />
  </div>
  </div>
</div>


{/* Address Info:  */}

<div>
<div className='my-2'>
   <h1 className='text-xl font-bold font-serif'> Your Present Address:</h1>
            <input className='lg:w-[80%] w-[90%] h-16 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="text" name="" id="" />
  </div>

  <div>
  <div className='my-2'>
   <h1 className='text-xl font-bold font-serif'> Your Permanent Address:</h1>
            <input className='lg:w-[80%] w-[90%] h-16 rounded-md  hover:bg-sky-200 font-semibold pl-4'  type="text" name="" id="" />
  </div>
  </div>
</div>

{/* Password info:  */}
<div className='grid lg"grid-cols-2 gap-2 lg:mt-4'>
<div>
   <h1 className='text-xl font-bold font-serif'> Password:</h1>
            <input className='lg:w-[80%] w-[90%] h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4' type="password" name="" id="" />
  </div>
 <div>
 <div>
   <h1 className='text-xl font-bold font-serif'> Confirm Password:</h1>
            <input className='lg:w-[80%] w-[90%]  h-8 rounded-md  hover:bg-sky-200 font-semibold pl-4' type="password" name="" id="" />
  </div>
 </div>
  <div>
  
  </div>
</div>

<div>
<button className="btn btn-wide lg:w-[70%] lg:mx-10 lg:mt-10 bg-gradient-to-r from-green-400 to-blue-500 
hover:from-pink-500 hover:to-yellow-500 subpixel-antialiased">Submit</button>
</div>



</div>
</div>

    </div>
  );
};

export default Signin;

