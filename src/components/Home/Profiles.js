import React from 'react'
import profileImg from '../../imgs/users.svg'


const Profiles = () => {
  return (
    <section className="profiles">
      
      <div className="profiles__body">
        <div className="profiles__content">
        <h2>We help you find all top rated freelancers </h2>
         <p>Select from a wide range of well vetted and highly ranked student freelancers.</p> 
        </div>
        <div className="profiles__img">
          <img src={profileImg} alt=""/>
        </div>
      </div>
    </section>
  )
}

export default Profiles;