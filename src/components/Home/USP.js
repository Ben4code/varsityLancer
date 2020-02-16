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
          <h2>Enjoy risk free outsourcing</h2>
          <p>Payments on our platform are carried out using a thrid party Escrow service to ensure payments are only made when both parties are satisfied.</p>
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
          <h2>Manage your business with ease acroass all devices</h2>
          <p>This is 2020 and we know that you are on the go so we have made our app available on multiple devices.</p>
        </div>
      </div>

    </section>
  )
}

export default USP;