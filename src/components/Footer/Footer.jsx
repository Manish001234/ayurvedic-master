import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
const Footer = () => {
  return (
<>
  {/* Footer */}
  <footer className="text-center text-lg-start bg-light text-muted">
    {/* Section: Social media */}
    <section className="d-flex justify-content-center justify-content-lg-between p-1 border-bottom">
      {/* Left */}
   
      {/* Left */}
      {/* Right */}

      {/* Right */}
    </section>
    {/* Section: Social media */}
    {/* Section: Links  */}
    <section className="">
      <div className="container text-center text-md-start mt-5">
        {/* Grid row */}
        <div className="row mt-3">
          {/* Grid column */}
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            {/* Content */}
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" />
              Mushroom World Group
            </h6>
            <p>
            Mushroom World Ayurved & Food Private Limited is a Registered Private Limited
Comoany reaistered under the Comoanies act 1956. Mushroom World Avurved & FoodÄ Private Limited is also registered with the Sales Tax Authori
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                Mushroom Powder
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Luco-X
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Mushroom Prash
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Pain Relief Oil
              </a>
            </p>
          </div>
          {/* Grid column */}
          {/* Grid column */}
     
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            {/* Links */}
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>226 , JAIN NAGAR</p>
            <p>GUFA MANDIR ROAD,BHOPAL</p>
            <p>MADHYA PRADESH 462030</p>
            <p>CALL 7909 444 999 , 98263 22445</p>
            <div style={{display:'flex',gap:'60px'}}>
        <FacebookOutlinedIcon/>
        <InstagramIcon/>
        <TwitterIcon/>
        <GoogleIcon/>

        
      </div>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
    </section>
    {/* Section: Links  */}
    {/* Copyright */}
    <div
      className="text-center p-4"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
    >
      © All rights are reserved, 
      <span className="text-reset fw-bold" href="">
      Mushroom World Ayurved & Food Pvt Ltd
      </span>
    </div>
    {/* Copyright */}
  </footer>
  {/* Footer */}
</>

  )
}

export default Footer
