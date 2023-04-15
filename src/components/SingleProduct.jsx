import React from 'react'

const SingleProduct = () => {
  return (
    <div>
    <div className="container my-5 py-5" >
        <div className="row">
                 <div className="col-md-6 d-flex justify-content-center mmx-auto product">
                     <img src="https://iili.io/Hv1UIEJ.png" alt="" height="400px"  />
                 </div>   
                 <div className="col-md-6 d-flex flex-column justify-cuntent-center">
                     <h1 className='display-5 fw-bold' >Title</h1>
                     <hr />
                     <h2 className='my-4' >Rs - price</h2>
                     <p className='lead'>desc</p>
                     <button  className='btn btn-outline-primary my-5'>cart</button>
                 </div>
        </div>
    </div>
  
</div>
  )
}

export default SingleProduct
