import React from 'react'
import bg from '../../imgs/bg.png'
import Button from '@material-ui/core/Button'


export default function Jumbotron() {
  const jumbo__img = {
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundSize: 'cover',

  }
  return (
    <div className="jumbo" style={jumbo__img}>
      <div className="jumbo__content">
        <h1 className="jumbo__content--heading">Hire expert student freelancers <br/> for any job, online.</h1>
        <Button disableRipple variant="contained" size="large" color="secondary" >Get Started</Button>
      </div>
    </div>
  )
}
