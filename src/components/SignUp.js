import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import Alert from 'react-bootstrap/Alert'

function SignIn() {
    let [errMsg, setErrMsg] = useState("")
    let { register, handleSubmit, formState: { errors } } = useForm()
    let navigate = useNavigate();

    let gender = ['male', 'female', 'other']


    let formSubmit = async (userObj) => {
        // http post request
        let res = await axios.post("/user/createUser", userObj)
        if (res.data.message === "User created") {
            // navigate to sign in
            // window.alert("User Created")
            navigate('/signin')
        }
        else {
            setErrMsg(res.data.message)
        }

    }

    return (
        <>
            <div className="conatiner">
                <div className="text-center display-3 text-dark">Sign Up</div>

                <div className="container w-50 mt-5">
                    <div className='Signup pb-5'>
                        <div className='container  shadow-lg rounded p-3 form-wrapper mb-5' style={{ background: "rgb(43 53 68 / 39%)" }} >


                            {/* Duplicate user message */}
                            {errMsg !== "" && <Alert className='text-center' variant="danger" >User already exist chose another username.</Alert>}

                            {/* form */}
                            <form className='form text-left' onSubmit={handleSubmit(formSubmit)}>
                                {/* username */}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label fw-semibold text-white">Username</label>
                                    <input type="text" id="username" placeholder='UserName' className="form-control" {...register("username", { required: true, minLength: 4, maxLength: 6 })}></input>
                                    {/* validation error message */}
                                    {errors.username?.type === 'required' && <p className='text-danger mt-1'>Username is required</p>}
                                    {errors.username?.type === 'minLength' && <p className='text-danger mt-1'>Minimum length should be 4</p>}
                                    {errors.username?.type === 'maxLength' && <p className='text-danger mt-1'>Maximun length should be 6</p>}
                                </div>

                                {/* password */}
                                <div className='mb-4'>
                                    <label htmlFor='password' className='form-label fw-semibold text-white'>Password</label>
                                    <input type='password' id='password' placeholder='Password' className='form-control' {...register("password", { required: true })}></input>
                                    {/* validation error message */}
                                    {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password is required</p>}
                                </div>

                                {/* Email */}
                                <div className='mb-4'>
                                    <label htmlFor='email' className='form-label fw-semibold text-white'>Email</label>
                                    <input type='email' id='email' placeholder='email' className='form-control' {...register("email", { required: true })}></input>
                                    {/* validation error message */}
                                    {errors.email?.type === 'required' && <p className='text-danger mt-1'>Email is required</p>}
                                </div>

                                {/* date of birth */}
                                <div className="mb-3">
                                    <label htmlFor="dob" className="form-label fw-semibold text-white">DOB</label>
                                    <input type="date" id="dob" className="form-control" {...register("dob", { required: true })}></input>
                                    {/*validation error message  */}
                                    {errors.dob?.type === 'required' && <p className='text-danger mt-1'>Date is required</p>}
                                </div>

                                {/* gender */}
                                <div className='mb-3'>
                                    <label htmlFor="gen" className="form-label fw-semibold text-white">Gender</label>
                                    {
                                        gender.map((gen, index) => {
                                            return (
                                                <div className='form-check' key={index}>
                                                    <input type='radio'
                                                        id={gen}
                                                        className='form-check-input'
                                                        value={gen}
                                                        {...register('gender', { required: true })}>
                                                    </input>
                                                    <label htmlFor={gen} className="form-check-label fw-semibold text-white">{gen}</label>
                                                </div>
                                            )
                                        })
                                    }
                                    {errors.gender?.type === 'required' && <p className='text-danger mt-1'>Gender is required</p>}
                                </div>


                                {/* submit button */}
                                <div className='container text-center'>
                                    <button type='submit' className='btn btn-success my-4 text-center'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignIn