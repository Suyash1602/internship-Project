import React, { useState } from 'react'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from "react-router-dom";

function AddProduct() {
    let { register, handleSubmit, formState: { errors } } = useForm()

    let [errMsg, setErrMsg] = useState("")
    let navigate = useNavigate();


    let addProduct = async (productObj) => {
        let res = await axios.post("/product/createProduct", productObj)
        if (res.data.message === "Product created") {
            window.alert("Product added successfully.")
            navigate("/productList")
        } else {
            setErrMsg(res.data.message)
        }
    }
    return (
        <>
            <div className="conatiner">
                <div className="text-center display-3 text-dark">Add Products</div>

                <div className="container w-50 mt-5">
                    <div className='Signup pb-5'>
                        <div className='container  shadow-lg rounded p-3 form-wrapper mb-5' style={{ background: "rgb(43 53 68 / 39%)" }} >

                            {/* Duplicate user message */}
                            {errMsg !== "" && <Alert className='text-center' variant="danger" >Product already exist.</Alert>}

                            {/* form */}
                            <form className='form text-left' onSubmit={handleSubmit(addProduct)}>

                                {/* ProductName */}
                                <div className="mb-3">
                                    <label htmlFor="productname" className="form-label fw-semibold text-white">Product Name</label>
                                    <input type="text" id="productname" placeholder='Product Name' className="form-control" {...register("productname", { required: true })} ></input>
                                    {/* validation error message */}
                                    {errors.productname?.type === 'required' && <p className='text-danger mt-1'>Product Name is required</p>}
                                </div>

                                {/* ProductCategory */}
                                <div className="mb-3">
                                    <label htmlFor="productcategory" className="form-label fw-semibold text-white">Product Category</label>
                                    <input type="text" id="productcategory" placeholder='Product Category' className="form-control" {...register("productcategory", { required: true })} ></input>
                                    {/* validation error message */}
                                    {errors.productname?.type === 'required' && <p className='text-danger mt-1'>Product Category is required</p>}
                                </div>


                                {/* date of Creation */}
                                <div className="mb-3">
                                    <label htmlFor="creation" className="form-label fw-semibold text-white">Creation Date</label>
                                    <input type="date" id="creation" className="form-control" {...register("creation", { required: true })}></input>
                                    {/*validation error message  */}
                                    {errors.creation?.type === 'required' && <p className='text-danger mt-1'>Creation Date is required</p>}
                                </div>

                                {/* date of Expiry */}
                                <div className="mb-3">
                                    <label htmlFor="expiry" className="form-label fw-semibold text-white">Expiry Date</label>
                                    <input type="date" id="expiry" className="form-control" {...register("expiry", { required: true })}></input>
                                    {/*validation error message  */}
                                    {errors.expiry?.type === 'required' && <p className='text-danger mt-1'>Expiry Date is required</p>}
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="mrp" className='form-label fw-semibold text-white' >MRP</label>
                                    <input
                                        type="number"
                                        id="mrp"
                                        className="form-control"
                                        placeholder='Product MRP'
                                        {...register("mrp", { required: true })}></input>
                                    {/*validation error message  */}
                                    {errors.mrp?.type === 'required' && <p className='text-danger mt-1'>MRP  is required</p>}
                                </div>

                                {/* submit button */}
                                <div className='container text-center'>
                                    <button type='submit' className='btn btn-success my-4 text-center'>Add Product </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div >
        </>
    )
}

export default AddProduct