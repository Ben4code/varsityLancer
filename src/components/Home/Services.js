import React from 'react'
import animation from '../../imgs/animation.svg'
import website from '../../imgs/Website.svg'
import code from '../../imgs/Code.svg'
import design from '../../imgs/design.svg'


const Services = () => {
  return (
    <section className="services">
      <h2>Looking to get any of these tasks outsourced?</h2>
      <div className="services__body">
        <div className="services__card">
          <div className="services__card--img">
            <img src={design} className="reduce" alt="" />
          </div>
          <div className="services__card--title">
            <h3> Graphics Design</h3>
          </div>
          <div className="services__card--body">
            Get the right help developing your graphic designs by posting your job requirements on our platform. You can be assurd that you get the best value for money.
          </div>
        </div>


        <div className="services__card">
          <div className="services__card--img">
            <img src={code} alt="" />
          </div>
          <div className="services__card--title">
            <h3> Software Development</h3>
          </div>
          <div className="services__card--body">
            Outsource freelancers to build bespoke software solution with efficient functionallty and an industry leading user experience for your business. Sign up now let's make make your idea a rality.
          </div>
        </div>

        <div className="services__card">
          <div className="services__card--img">
            <img src={animation} alt="" />
          </div>
          <div className="services__card--title">
            <h3> Animations</h3>
          </div>
          <div className="services__card--body">
            Content creation is at the heart of today's internet success. Just communicate your needs and the platform will expose your task with the most reated freelancer who will do the rest.
          </div>
        </div>

        <div className="services__card">
          <div className="services__card--img">
            <img src={website} alt="" />
          </div>
          <div className="services__card--title">
            <h3> Website Design</h3>
          </div>
          <div className="services__card--body">
            <p>
              We have the right talent onboard our platform to help implement intelligent and proven design best practices tailored to your niche industry to ensure you achieve your desired outcome.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Services;