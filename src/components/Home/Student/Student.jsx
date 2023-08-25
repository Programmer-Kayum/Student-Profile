import React from 'react';

const Student = () => {
    return (
        <div className='rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10'>
<h1 className='text-center font-bold text-4xl  '>At a glance HSTU</h1>
<div className="divider mb-4"></div> 
    <div className="stats shadow lg:h-48 lg:w-52  w-72 mb-2  pt-4 ">
    <div className="stat">
    <div className="stat-value px-10">23 </div>
    <div className="stat-title font-bold">Degrees</div>
    </div>
    </div>    


    <div className="stats shadow lg:h-48 mx-4 my-2 lg:w-52 w-72 pt-4 ">
    <div className="stat">
    <div className="stat-value mx-4">11203</div>
    <div className="stat-title font-bold">Students</div>
    </div>
    </div>       

    <div className="stats shadow lg:h-48 mx-4 my-2 lg:w-52 w-72 pt-4 ">
    <div className="stat">
    <div className="stat-value mx-8">383</div>
    <div className="stat-title font-bold">Teachers</div>
    </div>
    </div>

    <div className="stats shadow lg:h-48 mx-4 my-2 lg:w-52 w-72 pt-4 ">
    <div className="stat">
    <div className="stat-value mx-8">9</div>
    <div className="stat-title font-bold">Faculties</div>
    </div>
    </div>

    <div className="stats shadow lg:h-48 mx-4 my-2 lg:w-52 w-72 pt-4 ">
    <div className="stat">
    <div className="stat-value px-8">45</div>
    <div className="stat-title font-bold">Departments</div>
    </div>
    </div>

    

</div>
    );
};

export default Student;



