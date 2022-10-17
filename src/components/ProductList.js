import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ProductList() {


    let [allProducts, setAllProducts] = useState([])

    let productData = async () => {
        let res = await axios.get("/product/getProducts")
        setAllProducts(res.data.payload)
    }

    useEffect(() => {
        productData();
    }, [])

    return (
        <div className="conatiner">
            <div className="text-center display-3 text-dark">Products List</div>
            <div className="container mt-4" >
                {allProducts === undefined || allProducts.length === 0 ? <>
                    <p className="display-3 text-danger p-3 opacity-75 text-center bg-dark fw-semibold">Empty product list. Add some by login as user. </p>
                </> :
                    <>


                        <table className='table table-bordered p-2 text-center '
                            style={{ background: "rgb(166 213 242 / 72%)" }}>

                            <thead className="bg-dark text-white" >
                                <tr>
                                    <th>Product Name</th>
                                    <th>Product Category</th>
                                    <th>Creation Date</th>
                                    <th>Expiry Date</th>
                                    <th>MRP</th>
                                </tr>
                            </thead>
                            <tbody className='fw-semibold' >
                                {
                                    allProducts?.map((product, i) => (
                                        <tr key={i}>
                                            <td >{product.productname}</td>
                                            <td>{product.productcategory}</td>
                                            <td>{product.creation}</td>
                                            <td>{product.expiry}</td>
                                            <td>&#8377; {product.mrp}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                    </>
                }
            </div>
        </div>
    )
}

export default ProductList