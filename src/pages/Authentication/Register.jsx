import React from "react"
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
      <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral">Create Account</button>
        </div>
        <small className="text-center text-xs">Already Have An Account ? <Link to='/login' className="text-red-500 link link-hover">Login</Link></small>
      </form>
      
    </div>
  )
};

export default Register;
