import React from 'react'
import HowItWorksImg from '../../imgs/onboarding.svg'

export default function HowItWorks() {
  return (
    <section className="works">
      <div className="works__body">
        <div className="works__content">
          <h2>Getting started is easier than you think.</h2>
          <p>We have made our onboarding process tailored to suit your needs by ensuring you get your value for time and money.</p>
        </div>
        <div className="works__img">
          <img src={HowItWorksImg} alt="" />
        </div>
      </div>
      
    </section>
  )
}
