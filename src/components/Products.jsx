import React from 'react'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
          {/* ======= Menu Section ======= */}
    <section id="menu" className="menu">
      <div className="container" data-aos="fade-up">
    
      <div className="tab-content" data-aos="fade-up" data-aos-delay={300}>
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="tab-header text-center">
         
              <h3>FEATURED PRODUCTS</h3>
              
            </div>
            <div className="row gy-5">
              <div className="col-lg-4 menu-item">
  
        <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <Link to={"/SingleProduct"}><button className="btn btn-outline-primary">Buy Now</button></Link>
          </div>
        </div>
   
     
      

             
              
               
              </div>
              {/* Menu Item */}
              <div className="col-lg-4 menu-item">
              <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
              </div>
              {/* Menu Item */}
              <div className="col-lg-4 menu-item">
              <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
              </div>
              {/* Menu Item */}
              <div className="col-lg-4 menu-item">
              <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
              </div>
              {/* Menu Item */}
              <div className="col-lg-4 menu-item">
              <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
              </div>
              {/* Menu Item */}
              <div className="col-lg-4 menu-item">
              <div className="card my-5 py-4" style={{ width: " 18rem" }}>
          <img
            src="https://cdn.shopify.com/s/files/1/0244/0934/2033/products/Instaglow_394x.jpg?v=1600326327"
            className="card-img-top"
            alt="img"
          />
          <div className="card-body text-center">
          <p className="ingredients">
                  Lorem, deren, trataro, filede, nerada
                </p>
                <p className="price">$5.95</p>
            <button className="btn btn-outline-primary">Buy Now</button>
          </div>
        </div>
              </div>
              {/* Menu Item */}
            </div>
          </div>
       
    
         
        </div>
      
      </div>
    </section>
    {/* End Menu Section */} 
    </div>
  )
}

export default Products