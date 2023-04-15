import React from 'react'
import Slider from 'react-slick';

const BrandPresenter = () => {
    const Ambassadors = [{
        img: "https://iili.io/HvalZKl.md.png"
    },
    {
        img: "https://iili.io/Hva0BHP.md.png"
    },
    {
        img: "https://iili.io/Hva05UN.md.png"
    },
    {
        img: "https://iili.io/Hva0vWb.md.png"
    },
    {
        img: "https://iili.io/Hva0rgV.md.png"
    },
    {
        img: "https://iili.io/Hva1Jet.md.png"
    },
    {
        img: "https://iili.io/Hva1B14.md.png"
    },
    {
        img: "https://iili.io/Hva1uIe.md.png"
    }
]
const settings = {

    speed: 10000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow:3,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
      ]
  };
    return (
        <div className='container' style={{marginTop:"28px"}}>
             <div className="section-title">
          <h2>Our Brand's <span style={{color:"#CE1212"}}>Presenter</span></h2>
       
        </div><br />
         <Slider {...settings}>
            {Ambassadors?.map(e =>(
                  <img
                  src={e.img}
                  className="gray img-fluid  "
                  alt=""
                
              />
            ))}
         </Slider>
        </div>
    )
}


export default BrandPresenter
