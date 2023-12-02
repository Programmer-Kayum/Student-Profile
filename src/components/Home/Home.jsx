import React from 'react';

import Carousel from './Carousel/Carousel';
import Facultys from './Facultys/Facultys';
import Student from './Student/Student';
import Excercise from './Excercise/Excercise';

import Speed from './Speed/Speed';
import Quiz from './Quiz/Quiz';
import Money from './Money/Money';
import News from './News/News';
import Library from './Library/Library';



const Home = () => {


    return (
        <div>
                <div className='mt-2'><Carousel></Carousel></div>  
                <progress className="progress "></progress>
                <div className='mt-2'> <Facultys></Facultys></div> 
                <progress className="progress "></progress>
                <div className='mt-2'> <Library></Library> </div> 
                <progress className="progress "></progress>
                <div className='mt-2'> <Speed></Speed> </div> 
             
                <progress className="progress "></progress>
                <div className='mt-2'> <Quiz></Quiz> </div> 
                <progress className="progress "></progress>
                <div className='mt-2'> <Excercise></Excercise></div> 
                <progress className="progress "></progress>

                <div className='mt-2'> <Money></Money> </div> 
                <progress className="progress "></progress>

                <div className='mt-2'> <News></News></div> 
                <progress className="progress "></progress>

                <div className='my-2 items-center text-center'><Student></Student></div>
        </div>

    );
};

export default Home;



