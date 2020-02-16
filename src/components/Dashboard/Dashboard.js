import React from 'react'
import './dashboard.css'
import avatar from '../../imgs/avi3.png'
import pie from '../../imgs/pieChart.svg'
import progress from '../../imgs/progress.svg'


export default function Index() {
  
  return (
    <div className="dashboard">

      <div className="dashboard__sidebar">
        <img src={avatar} alt="" />

        <div className="dashboard__sidebar--content">
          <h4>Mike Jones</h4>
          <p>Fullstack Developer</p>
          <p>London, United Kingdom</p>
          <p>£20/hr</p>
        </div>
        <div className="dashboard__sidebar--menu">
          <ul>
            <li><a href="/"><i className="fa fa-user"></i> Profile</a></li>
            <li><a href="/"><i className="fa fa-picture-o"></i> Portfolio</a></li>
            <li className="active"><a href="/"><i className="fa fa-tasks"></i> Jobs</a></li>
            <li><a href="/"><i className="fa fa-desktop"></i> My Projects </a></li>
            <li><a href="/"><i className="fa fa-gears"></i> Settings </a></li>
          </ul>
        </div>
      </div>

      <div className="dashboard__header">
        <div className="dashboard__header--search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="dashboard__header--notify">
          <i className="fa fa-bell-o fa-2x"></i><span>1</span>
          <i className="fa fa-envelope-o fa-2x"></i>
        </div>
      </div>

      <div className="dashboard__section">
        <div className="dashboard__section--body">

          <div className="dashboard__section--card">
            <h4>Overall Rating</h4>
            <div className="dashboard__section--stats">
              <img src={progress} alt="" />
              <ul>
                <li> Completed task: 32</li>
                <li>Ratings received: 18</li>
                
                
              </ul>
            </div>
          </div>

          <div className="dashboard__section--card">
            <h4>Jobs Completed</h4>
            <div className="dashboard__section--stats">
              <img src={pie} alt="" />
              <ul>
                <li style={{ color: "#0B66B7" }}> Completed</li>
                <li style={{ color: "#0BACB7" }}>Ongoing</li>
                <li style={{ color: "#660BB7" }}>Started</li>
                <li style={{ color: "#0BB778" }}>Undone</li>
              </ul>
            </div>
          </div>

          <div className="dashboard__section--card">
            <h4>User Summary</h4>
            <p>I  will build a bespoke web application for you in record time.</p>
          </div>

        </div>
      </div>

      <div className="dashboard__main">
        <div className="dashboard__content">

          <div className="dashboard__content--item">
            <h3>Wordpress custom theme development for my business.</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  I will like you to build a custom theme for my ecommerce business. The I have a few ideas that are similar to what I want...
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 5mins ago</li>
                  <li>
                    <span className="dashboard__content--badge">Php</span>
                    <span className="dashboard__content--badge">Wordpress</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£400</span>
            </div>
          </div>

          <div className="dashboard__content--item">
            <h3>Designer need for brand logo and other graphics.</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  We would like a professional logo built for our brand.
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 1hr 33mins ago</li>
                  <li>
                    <span className="dashboard__content--badge">Photoshop</span>
                    <span className="dashboard__content--badge">Illustrator</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£100</span>
            </div>
          </div>


          {/* 
          <div className="dashboard__content--item">
            <h3>Logo design job required!</h3>
            <div className="dashboard__content--meta">
              <div>
                <p className="dashboard__content--desc">
                  Must have good knowledge of Adobe Photoshop. I need a professional logo design for my cab hailing business.
                </p>
                <ul>
                  <li className="dashboard__content--time">Posted 20hrs 5mins ago</li>
                  <li>
                    <span className="dashboard__content--badge">Photoshop</span>
                    <span className="dashboard__content--badge">Illustrator</span>
                  </li>
                </ul>
              </div>
              <span className="dashboard__content--price">£100</span>
            </div>
          </div> */}



        </div>
      </div>
    </div>
  )
}

