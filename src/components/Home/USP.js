import React from 'react'
import altBg from '../../imgs/altBg.png'
import piggy from '../../imgs/piggy.png'
import deviceMgt from '../../imgs/deviceMgt.png'

const USP = () => {
  const imgBg = {
    width: "100%",
    height: "auto",
    backgroundImage: `url(${altBg})`,
    backgroundSize: 'cover',
  }
  return (
    <section className="usp" style={imgBg}>

      <div className="usp__1">
        <div className="usp__1--content">
          <h2>Getting started is easier than you think.</h2>
          <p>We have made our onboarding process tailored to suit your needs by ensuring you get your value for time and money.</p>
        </div>
        <div className="usp__1--img">
          <img src={piggy} alt="" />
        </div>
      </div>
      
      <div className="usp__2">
        <div className="usp__2--img">
          <img src={deviceMgt} alt="" />
        </div>
        <div className="usp__2--content">
          <h2>Getting started is easier than you think.</h2>
          <p>We have made our onboarding process tailored to suit your needs by ensuring you get your value for time and money.</p>
        </div>
      </div>

    </section>
  )
}

export default USP;