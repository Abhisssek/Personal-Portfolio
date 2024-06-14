import React from 'react'
import {Navbar} from "./Navbar"
import {Footer} from "./Footer"
import {Link} from "react-router-dom"

export const Services = ({full}) => {
  const servicesData = [
    { id: 1, title: 'Web Development', description: 'Building responsive and modern web applications.' },
    { id: 2, title: 'Mobile Development', description: 'Creating user-friendly mobile applications for iOS and Android.' },
    { id: 3, title: 'UI/UX Design', description: 'Designing intuitive and engaging user interfaces.' },
    { id: 4, title: 'SEO Optimization', description: 'Improving website ranking and visibility on search engines.' },
    { id: 5, title: 'Content Creation', description: 'Producing high-quality content for websites and blogs.' },
  ];

  const pricingPlans = [
    { id: 1, name: 'Standard', price: '49.99', features: ['Basic Website', '1 Developer', '1 Month Support', 'Source Code Included', 'Private Repository'] },
    { id: 2, name: 'Premium', price: '99.99', features: ['E-commerce Website', '2 Developers', '3 Months Support', 'Source Code Included', 'Private Repository'] },
    { id: 3, name: 'Platinum', price: '149.99', features: ['Custom Application', '3 Developers', '6 Months Support', 'Source Code Included', 'Private Repository'] },
  ];
  return (
    <>
      <Navbar/>
      {/* {full && (
        <div className="space">
          
        </div>
      )} */}
    <div className='container'>
      <section className="services-hero" style={{marginTop:"50px"}}>
        <div className="hero-content" style={{display:'flex',flexDirection:'column',gap:'10px',alignItems: 'center'}}>
          <h1>Our Services</h1>
          <h3>Offering a range of services to meet your development needs.</h3>
          <hr />
        </div>
      </section>

      <section className="services-overview">
        <div className="services-text">
        <h1>What You Can Expect From Me</h1>
        <h3>I understand that every client is unique, and I work closely with you to understand <br /> your specific needs and preferences.
        My goal is to create solutions that not <br /> only meet your technical requirements but also align with your business <br />objectives. I use only the highest quality tools and frameworks to ensure <br /> that your applications are robust and scalable.
        I also offer a wide range <br /> of support and maintenance options to suit your budget and requirements.</h3></div>
        <section className="services-list">
        <h1>What Services I Offer</h1>
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h2>{service.title}</h2>
            <h3>{service.description}</h3>
          </div>
        ))}
      </section>
      </section>

      

      <section className="pricing-plans">
        <h2>Find the Best Pricing Plan for Your Needs</h2>
        <hr style={{marginBottom:'35px', marginTop:'-29px', marginLeft:'45%'}} />
        <div className="plans">
          {pricingPlans.map((plan) => (
            <div key={plan.id} className="plan-card">
              <h1>{plan.name}</h1>
              <ul className='plan-list'>
                {plan.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                  ))}
              </ul>
                <h2 className="price">${plan.price}</h2>
                <div className="service-button">
              <button className="service-plan secondary-btn">Book Now</button>
              <Link to="/contact"><button className="service-plan secondary-btn">Contact Us</button></Link></div>
            </div>
          ))}
        </div>
      </section>
    </div>
      <Footer/></>
  )
}
