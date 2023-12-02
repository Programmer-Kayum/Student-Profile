import React from 'react';
import book1 from'../../../photos/book/book1.jpg'
import book2 from'../../../photos/book/book8.jpg'
import book3 from'../../../photos/book/book3.jpg'
import { Link } from 'react-router-dom';

const Library = () => {
    return (
        <div className='lg:pt-10  pb-4 rounded-md bg-gradient-to-r from-violet-500 to-fuchsia-500'>

            <div className='lg:text-4xl text-3xl  text-center hover:from-yellow-500 hover:to-pink-500 mb-8 '>
                <h1 className=' font-bold text-3xl '>All BOOKS :</h1>
            </div>
            <div className="grid lg:grid-cols-3 lg:ml-10 mx-2 ">
            
            <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={book1} alt="Shoes" className="rounded-xl" />
              </figure>
              
          </div>
            <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={book2} alt="Shoes" className="rounded-xl" />
              </figure>
              
          </div>
            <div className="card lg:w-96  mb-10  bg-gradient-to-r from-cyan-500 to-blue-500 
            hover:from-yellow-500 hover:to-pink-500 shadow-xl">
              <figure className="px-4 pt-2">
                  <img src={book3} alt="Shoes" className="rounded-xl" />
              </figure>
              
          </div>
            </div>

<div className='text-center'>
 <Link to="/library" className='text-yellow-500 text-xl font-bold hover:bg-yellow-200'><button className="btn btn-wide font-bold text-2xl">See All ...</button></Link> 

</div>

        </div>
    );
};

export default Library;