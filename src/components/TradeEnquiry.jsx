import React, { useState } from 'react'

const TradeEnquiry = () => {
    const [loading, setLoading] = useState(false)
    const TradeFormSubmit = async (e) => {
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
            phone: e?.target[2]?.value,
            address: e?.target[3]?.value,
            subject: e?.target[4]?.value,
            message: e?.target[5]?.value
          })
        })
          .then(response => response.json())
          .then(data => {
            alert("Trade Enquiry submitted")
            setLoading(false)
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].value = ""
            e.target[3].value = ""
            e.target[4].value = ""
            e.target[5].value = ""
          })
          .catch(error => console.log(error));
      }
  return (
    <>
         {/* ======= Contact Section ======= */}
   <section id="contact" className="contact" style={{paddingTop:"120px"}}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Trade</h2>
          <p>
          Trade <span>Enquiry</span>
          </p>
        </div>
       
        <div className="row gy-4">
        <p>For Trade and whole seller enquiry kindly feel free to call at 98263 22445 or you can fill the below form, our team will call you as soon as possible.</p>
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
            <div className="info-item d-flex align-items-center">
              <i className="icon bi bi-envelope flex-shrink-0" />
              <div>
                <h3>Email Us</h3>
                <p>Info@mushroomworldbpl.com</p>
              </div>
            </div>
          </div>
          {/* End Info Item */}
        
  
        </div>
        <form
         onSubmit={(e)=>TradeFormSubmit(e)}
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
          <div className="row">
            <div className="col-xl-6 form-group">
              <input
                type="number"
                name="Phone"
                className="form-control"
                id="Phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="col-xl-6 form-group">
              <input
                type="text"
                className="form-control"
                name="Address"
                id="Address"
                placeholder="Your Address"
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

export default TradeEnquiry
