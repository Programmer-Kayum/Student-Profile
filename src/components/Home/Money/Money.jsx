import React from 'react';
import money from'../../../photos/money.png'

const Money = () => {
    return (
        <div className='rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 py-10'>
        <h1 className='text-center font-bold text-4xl  '>Money Master...!!!</h1>
        <div className="divider mb-4"></div> 
       
        <div className="grid grid-cols-2 ml-10 mx-2">

        
        <div className="card   mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4  py-2">
                  <img src={money} alt="Shoes" className="rounded-xl" />
              </figure>
         </div>

         <div className="card mx-4  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <div className='text-center'>
        <a target='_blank' href="https://lucent-starlight-1a40dd.netlify.app/"><button className=" pt-32  font-bold text-4xl">Let's Check Your Money.... !!!</button></a> 
        
        </div>
         </div>

       
       
       
        </div>

       
        </div>
    );
};

export default Money;