import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux'
import { userLoginLifeCycle } from '../store/userLoginSlice';
import { useNavigate } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

function SignIn() {

    let dispatch = useDispatch();

    let { register, handleSubmit, formState: { errors } } = useForm()
    let { userObj, isSuccess, isError, errMessage } = useSelector(state => state.userLogin);

    let formSubmit = (userCredObj) => {
        let actionObj = userLoginLifeCycle(userCredObj)
        dispatch(actionObj);
    }
    let navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            // navigate(`/productList/${userObj.username}`)
            navigate(`/addProduct/${userObj.username}`)
        }
    }, [isSuccess, isError])



    return (
        <>
            <div className="conatiner">
                <div className="text-center display-3 text-dark">Sign In</div>

                <div className="container w-50 m-auto mt-5">
                    <div className='Signup pb-5'>
                        <div className='container  shadow-lg rounded p-3 form-wrapper mb-5' style={{ background: "rgb(43 53 68 / 39%)" }} >

                            {/* invalid username and password msg */}
                            {isError === true && <Alert className='text-center' variant="danger" >{errMessage}</Alert>}

                            {/* form */}
                            <form className='form text-left' onSubmit={handleSubmit(formSubmit)}>
                                {/* username */}
                                <div className="mb-3">
                                    <label htmlFor="username" placeholder='Username' className="form-label fw-semibold text-white">Username</label>
                                    <input type="text" id="username" placeholder='UserName' className="form-control" {...register("username", { required: true, minLength: 4 })}></input>

                                    {/* <div class="col-3 input-effect">
                                        <input class="effect-16" type="text" placeholder="" />
                                        <label>First Name</label>
                                        <span class="focus-border"></span>
                                    </div> */}


                                    {/* validation error message */}
                                    {errors.username?.type === 'required' && <p className='text-danger mt-1'>Username is required</p>}
                                    {errors.username?.type === 'minLength' && <p className='text-danger mt-1'>Minimum length should be 4</p>}
                                </div>

                                {/* password */}
                                <div className='mb-4'>
                                    <label htmlFor='password' className='form-label fw-semibold text-white'>Password</label>
                                    <input type='password' id='password' placeholder='Password' className='form-control' {...register("password", { required: true })}></input>
                                    {/* validation error message */}
                                    {errors.password?.type === 'required' && <p className='text-danger mt-1'>Password is required</p>}
                                </div>

                                {/* submit button */}
                                <div className='container text-center'>
                                    <button type='submit' className='btn btn-success  text-center'>Sign In</button>
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