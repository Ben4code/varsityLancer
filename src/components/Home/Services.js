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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore hic dolorem! Beatae suscipit modi ab accusantium animi, pariatur voluptates sed blanditiis, rem assumenda nesciunt architecto dolorum corporis id voluptatem.
            
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore hic dolorem! Beatae suscipit modi ab accusantium animi, pariatur voluptates sed blanditiis, rem assumenda nesciunt architecto dolorum corporis id voluptatem.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore hic dolorem! Beatae suscipit modi ab accusantium animi, pariatur voluptates sed blanditiis, rem assumenda nesciunt architecto dolorum corporis id voluptatem.
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam labore hic dolorem! Beatae suscipit modi ab accusantium animi, pariatur voluptates sed blanditiis, rem assumenda nesciunt architecto dolorum corporis id voluptatem.
          </div>
        </div>

        


      </div>
    </section>
  )
}

export default Services;