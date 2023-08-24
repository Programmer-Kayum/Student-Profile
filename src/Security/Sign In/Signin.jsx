import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='my-8'>
        <div className="hero py-10 bg-base-200 rounded-lg bg-gradient-to-r
         from-violet-500 to-fuchsia-500 ">

  
  <div className="card lg:w-[30%]   shadow-2xl bg-base-100">
  <h1 className="lg:text-4xl text-2xl text-center pt-4  font-bold">Sign Up now!</h1>
    <div className="card-body">
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" className="input input-bordered" />
      </div>

      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" placeholder="email" className="input input-bordered" />
      </div>


      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type="text" placeholder="password" className="input input-bordered" />
        <label className="label">
          <h1  className="label-text-alt ">Forgot password?
          <Link to="/login" className='link link-hover pl-4 font-bold'>Log In</Link>
          </h1>
        </label>
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </div>
  </div>
</div>
</div>
    );
};

export default Signin;