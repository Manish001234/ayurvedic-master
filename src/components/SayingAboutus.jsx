import React from 'react'

const SayingAboutus = () => {
    const params = {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
  return (
  <>
     <div className="section-header" >
         
         <p>
           What Are They <span>Saying About Us</span>
         </p>
       </div>
         <div
         id="carouselExampleAutoplaying"
         class="carousel slide"
         data-bs-ride="carousel"
         style={{width:"66%",margin:"auto",height:"40rem"}}
       >
         <div class="carousel-inner">
           <div class="carousel-item active">
             <img
               src="https://cdn.shopify.com/s/files/1/0552/7211/2212/files/Get-free-gift-02_Desktop_2200x.jpg?v=1679461156"
               class="d-block w-100"
               alt="..."
               height="560px"
             />
           </div>
           <div class="carousel-item">
             <img
               src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/collection_e7978f42-f7cf-479e-be39-d219f634396e_1280x.jpg?v=1676550735"
               class="d-block w-100"
               alt="..."
               height="560px"
             />
           </div>
           <div class="carousel-item">
             <img
               src="https://cdn.shopify.com/s/files/1/0232/1317/8957/files/buy_any_4_website_12d12782-9036-4466-926b-545607e701f9_1660x.jpg?v=1678424225"
               class="d-block w-100"
               alt="..."
               height="560px"
             />
           </div>
         </div>
         <button
           class="carousel-control-prev"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="prev"
         >
           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Previous</span>
         </button>
         <button
           class="carousel-control-next"
           type="button"
           data-bs-target="#carouselExampleAutoplaying"
           data-bs-slide="next"
         >
           <span class="carousel-control-next-icon" aria-hidden="true"></span>
           <span class="visually-hidden">Next</span>
         </button>
       </div>
  </>
  )
}

export default SayingAboutus