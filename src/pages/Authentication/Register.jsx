import React, { useState } from "react"
import { Link } from "react-router-dom";
import PasswordInput from "../../util/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";
import { authApp } from "../../components/Authentication/Context/AuthProvider";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
  const {user} = authApp();
  console.log(user)

  const onSubmit = (data) => {
    console.log(`Email : ${data.email}, Password : ${data.password}, confirm-pass : ${data.confirmPassword}`)
    reset()
  }

  return (
    <>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              
              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
                      message: "Not match email format",
                    },
                  })}
                  type="email" placeholder="email" className="input input-bordered" />
              </div>
              {errors.email && <small className="text-red-500" role="alert">{errors.email.message}</small>}

              {/* Password Field */}
              <PasswordInput
                label='Password'
                isVisible={showPassword}
                toggleVisibility={() => setShowPassword(pre => !pre)}
                registerOptions={register("password", {
                  required: "required",
                  minLength: {
                    value: 6,
                    message: "Min length is 6",
                  },
                  validate: {
                    hasUpperCase: value => /[A-Z]/.test(value) || "Must include at least one uppercase letter",
                    hasLowerCase: value => /[a-z]/.test(value) || "Must include at least one lowercase letter",
                    hasNumber: value => /[0-9]/.test(value) || "Must include at least one number",
                    hasSpecialChar: value => /[!@#$%^&*(),.?\":{}|<>]/.test(value) || "Must include at least one special character",
                  },
                })} />
              {errors.password && <small className="text-red-500" role="alert">{errors.password.message}</small>}

              {/* Confirm Password */}
              <PasswordInput label='Confirm Password' isVisible={showConfirmPassword} toggleVisibility={() => setShowConfirmPassword(pre => !pre)} registerOptions={register("confirmPassword", {
                required: "Confirm password is required",
                validate: value => value === watch("password") || "Passwords do not match"
              })} />
              {errors.confirmPassword && <small className="text-red-500">{errors.confirmPassword.message}</small>}

              {/* Terms Fields */}
              <div className="flex">
                <input {...register("terms", { required: "You must accept the terms and conditions" })} type="checkbox" />
                <label className="label">
                  <small className="pl-1">Accept Term & Conditions</small>
                </label>
              </div>
              {errors.terms && <small className="text-red-500">{errors.terms.message}</small>}

              <div className="form-control mt-3">
                <button className="btn btn-neutral">Create Account</button>
              </div>
              <small className="text-center text-xs">Already Have An Account ? <Link to='/login' className="text-red-500 link link-hover">Log In</Link></small>
            </form>
          </div>
          <div className="hidden lg:flex divider divider-horizontal">OR</div>
          <div>
            <h1 className="font-serif text-center lg:text-start text-2xl lg:text-4xl font-bold pb-5">Create Account!</h1>
            <div className="space-y-2  mx-auto">
              {/* Google button */}
              <button className="btn btn-outline btn-neutral w-full">
                <svg className="w-6 h-6 pr-2" viewBox="-0.5 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>Google-color</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Color-" transform="translate(-401.000000, -860.000000)"> <g id="Google" transform="translate(401.000000, 860.000000)"> <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"> </path> <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"> </path> <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"> </path> <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"> </path> </g> </g> </g> </g></svg>
                Continue with Google</button>
              {/* Facebook Button */}
              <button className="btn btn-outline btn-neutral w-full">
                <svg className="w-7 h-7 pr-2" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="16" cy="16" r="14" fill="url(#paint0_linear_87_7208)"></circle> <path d="M21.2137 20.2816L21.8356 16.3301H17.9452V13.767C17.9452 12.6857 18.4877 11.6311 20.2302 11.6311H22V8.26699C22 8.26699 20.3945 8 18.8603 8C15.6548 8 13.5617 9.89294 13.5617 13.3184V16.3301H10V20.2816H13.5617V29.8345C14.2767 29.944 15.0082 30 15.7534 30C16.4986 30 17.2302 29.944 17.9452 29.8345V20.2816H21.2137Z" fill="white"></path> <defs> <linearGradient id="paint0_linear_87_7208" x1="16" y1="2" x2="16" y2="29.917" gradientUnits="userSpaceOnUse"> <stop stopColor="#18ACFE"></stop> <stop offset="1" stopColor="#0163E0"></stop> </linearGradient> </defs> </g></svg>
                Continue with Facebook</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Register;
