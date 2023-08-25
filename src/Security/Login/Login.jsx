import React from 'react';

const Login = () => {
    return (
        <div className='my-4'>
          <div className="hero py-8 bg-base-200 rounded-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 lg:py-16">
 
    
    <div className="card lg:w-[30%]   shadow-2xl bg-base-100">
    <h1 className="text-4xl text-center pt-2  font-bold">Login now!</h1>
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-bold font-serif">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  font-bold font-serif">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover  font-bold font-serif">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>
      
    );
};

export default Login;