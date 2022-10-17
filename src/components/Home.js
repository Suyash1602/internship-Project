import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    let navigate = useNavigate();
    const navigateToSignUp = () => {
        navigate('/signup')
    }
    const navigateToSignIn = () => {
        navigate('/signin')
    }
    const navigateToProductList = () => {
        navigate('/productList')
    }
    return (
        <>
            <div className="conatiner " >
                <div className="text-center display-3 text-dark">Home</div>
                <div className="container my-3 ">
                    <h1 className='text-center' >Project Name : <span className="display-5 fw-semibold ">Add Products website</span></h1>
                    <p style={{ fontSize: "1.2rem" }} className='text-center'>This website is the project given to us during our internship period.</p>
                    <p style={{ fontSize: "1.2rem" }} className='text-white border-bottom border-white text-center w-25'>How to use this website.</p>
                    <ol className='list-group list-group-numbered opacity-75' style={{ fontSize: "1.2rem" }} >
                        <li className='list-group-item' >You will find all the products in <span className="text-primary navi" onClick={navigateToProductList} >Product List </span>section.To add product into list you need to login in first. </li>
                        <li className='list-group-item' >Create your accout in <span className="text-primary navi" onClick={navigateToSignUp} > Sign Up </span> section.</li>
                        <li className='list-group-item'>If you already have an account. Login to the account in
                            <span className='text-primary navi' onClick={navigateToSignIn} > Sign In </span> section.
                        </li>
                        <li className='list-group-item'>After you login you will see the one new sections.
                            <dl>
                                <dd>Add Product</dd>
                            </dl>
                            <p> <span className='text-danger'>Note: </span> This page are only accessable when you are loged in.</p>
                        </li>
                        <li className='list-group-item'>In Add Product you will be able to add the new products.</li>
                        <li className='list-group-item'>All the added products will be visible in <span className="text-primary navi" onClick={navigateToProductList} >Product List </span> page</li>
                    </ol>
                </div>

            </div>
        </>
    )
}

export default Home