import React, { useState } from 'react'

const Contactus = () => {
  const [loading, setLoading] = useState(false)
  const FormSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    fetch("https://formsubmit.co/ajax/093b53d9612e6f2d88f253e0917afc1b", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: e?.target[0]?.value,
        email: e?.target[1]?.value,
        subject: e?.target[2]?.value,
        message: e?.target[3]?.value
      })
    })
      .then(response => response.json())
      .then(data => {
        alert("Contact submitted")
        setLoading(false)
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].value = ""
        e.target[3].value = ""
      })
      .catch(error => console.log(error));
  }
  return (
    <>
   {/* ======= Contact Section ======= */}
   <section id="contact" className="contact" style={{paddingTop:"120px"}}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Contact</h2>
          <p>
            Need Help? <span>Contact Us</span>
          </p>
        </div>
        <div className="mb-3">
        <iframe
      width={1104}
      height={510}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=madhya pradesh lalghati jainnagar mushroom world future &t=&z=10&ie=UTF8&iwloc=&output=embed"
      frameBorder={0}
      scrolling="no"
      marginHeight={0}
      marginWidth={0}
    />
        </div>
        {/* End Google Maps */}
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-map flex-shrink-0" />
              <div>
                <h3>Our Address</h3>
                <p>226 , JAIN NAGAR , BHOPAL , MADHYA PRADESH 462030 </p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>Info@mushroomworldbpl.com</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-telephone flex-shrink-0" />
              <div>
                <h3>Call Us</h3>
                <p>+91 98263 22445   /   7909 444 999</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
          <div className="col-md-6">
            <div className="info-item  d-flex align-items-center">
              <i className="icon bi bi-share flex-shrink-0" />
              <div>
                <h3>Opening </h3>
                <div>
                  <p>24\7</p>
                </div>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        </div>
        <form
         onSubmit={(e)=>FormSubmit(e)}
          className="php-email-form p-3 p-md-4"
        >
          <div className="row">
            <div className="col-xl-6 form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="col-xl-6 form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows={5}
              placeholder="Message"
              required
              defaultValue={""}
            />
          </div>
          <div className="my-3">
            <div className="loading">Loading</div>
            <div className="error-message" />
            <div className="sent-message">
              Your message has been sent. Thank you!
            </div>
          </div>
          <div className="text-center">
            <button type="submit">Send Message</button>
          </div>
        </form>
        {/*End Contact Form */}
      </div>
    </section>
    {/* End Contact Section */}
    </>
  )
}

export default Contactus