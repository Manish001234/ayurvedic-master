import React from 'react'
import SayingAboutus from './SayingAboutus'

const AboutUs = () => {
  return (
    <>
      {/* ======= About Section ======= */}
      <section id="about" className="about" style={{paddingTop:"120px"}}>
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>About Us</h2>
          <p>
            Learn More <span>About Us</span>
          </p>
        </div>
        <div className="row gy-4">
          <div
            className="col-lg-7 position-relative about-img"
          
            data-aos="fade-up"
            data-aos-delay={150}
          >
         <img src="https://iili.io/HvoLOEF.png" alt="" />
          </div>
          <div
            className="col-lg-5 d-flex align-items-end"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="content ps-0 ps-lg-7">
            <div className="call-us ">
              <h4>THE INOVATOR</h4>
              <p>Name of Director : Mr.Vijay Sagar</p>
              <p>Establishment Year : 2006</p>
              <p>Nature Of Business : Manufacturer,Exporter & Suplier</p>
              <p>Market Covered : Worldwide</p>

            </div>
              {/* <div className="position-relative mt-4">
                <img
                  src=""
                  className="img-fluid"
                  alt=""
                />
                <a
                  href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  className="glightbox play-btn"
                />
              </div> */}
            </div>
          </div>
        </div>
      </div>

 
    </section>

    {/* <div className="card mb-3" >
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src="https://iili.io/Hv7mY5x.png" className="card-img" alt="..." />
    </div>
    <div className="row-d-flex" >
      <div className="card-body">
        <h5 className="card-title">India's largest Manufacturers of Ayurvedic Mushroom Product, An ISO 9001:2008 Certified Company with more than 50 Lac satisfied costumers </h5>
        <p className="card-text" style={{fontWeight:"bold"}}>
        Mushroom World Ayurved & Food Private Limited
        </p>
        <p className="card-text">
        is a Registered Private Limited Company registered under the Companies act 1956. Mushroom World Ayurved & FoodÂ  Private Limited is also registered with the Sales Tax Authority. Mushroom World Ayurved & Food  Private Limited has obtained Manufacturing License from the office of the Drug Controller (Indian System of Medicines & Homeopathy) Madhya Pradesh. The licensing authority has granted a large number of products of herbal origin to manufacture and sell. The Company has also obtained Drug License to purchase & sales Scheduled Drugs. The Company is managed by a Team of Experienced Professionals in the field of the Pharmaceutical industry. The Company has redefined the pharmaceutical marketing concept and Anticipate this concept will overshade all the existing Marketing strategies. The Mushroom WorldÂ  Marketing Concept will ensure freedom in working to work as per independent plan with lifetime earning possibilities. The DMC is designed for The business associates to enjoy earnings with establishing their Professional and Personnel relations with other people. Mushroom World Ayurved & Food  Private Limited manufacture and represent a range of Quality Products that include health care and personal care. At Mushroom World. we have identified therapeutic values of Natural occurring Drugs, Vitamins & Minerals for the Prevention & Treatment of various ailments. We also have identified values of Essential Amino-acids, Nutrients, Minerals, and co-factors for health & fitness. We welcome you in Mushroom World Ayurved & Food  Private Limited. We are committed to providing a Profitable Business Opportunity and a Secured Financial Future. Mushroom World’s  Mission is to contribute to society by developing Exceptional Products of High Therapeutic Value with Established Safety. Daymark’s Vision is to build a profitable endless relationship with business Associates and wishing a healthier tomorrow for all.
Mushroom World Ayurved & Food Pvt. Ltd. was incorporated in the year 2009 at Lal Ghati, Bhopal (Madhya Pradesh). Under the spirited headship of our Owner, Mr. Sameer Sagar, the company has been scaling new heights in its endeavor. Moreover, the company is the prime Mushroom Medicines, Mushrooms, Mushroom Pickle, Mushroom Chyawanprash, Mushroom Herbal Tea, Mushroom Face Cream, and Herbal Face Pack Manufacturer, Exporter, and Supplier in India. The following are some of the salient features of the company that set it apart in comparison to its rivals: Infrastructure
We have a sound state-of-the-art infrastructure, which is well furnished with various kinds of modern machines and equipment, necessary for the production. Our infrastructure also enables us in bringing forth cost-effective products that are high in quality, 100% pure, and contamination-free.
Quality Management
        </p>
      </div>
    </div>
  </div>
</div> */}


    <SayingAboutus/>
    {/* End About Section */}
    </>
  )
}

export default AboutUs