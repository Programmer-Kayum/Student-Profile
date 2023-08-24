import React from 'react';

import Carousel from './Carousel/Carousel';
import Facultys from './Facultys/Facultys';
import Student from './Student/Student';



const Home = () => {


    return (
        <div>
                <div className='my-8'><Carousel></Carousel></div>  
                <progress className="progress "></progress>
                <div className='my-8'> <Facultys></Facultys></div> 
                <progress className="progress "></progress>
                <div className='my-8 items-center text-center'><Student></Student></div>
        </div>

    );
};

export default Home;



