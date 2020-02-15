import React from 'react'
import logo from '../../imgs/vl-logo.png'


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__secondary">
        <div className="footer__secondary--links">
          <img src={logo} width="80" alt="" />
          <p>
            Varsity Lancer is a subsidiary of <a href="https://webenlist.com">Webenlist</a> Limited
        </p>
        </div>
        <div className="footer__secondary--links">
          <h4>Categories</h4>
          <ul>
            <li><a href="/">Graphics Design</a></li>
            <li><a href="/">Software Development</a></li>
            <li><a href="/">Animation</a></li>
            <li><a href="/">Web Design</a></li>
          </ul>
        </div>
        <div className="footer__secondary--links">
          <h4>Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Freelancer Sign up</a></li>
            <li><a href="/">Client Sign up</a></li>
          </ul>
        </div>
        <div className="footer__secondary--links">
          <h4>Site map</h4>
          <ul>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Cookie Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <ul className="social">
              <li><a href="/"><i className="fa fa-twitter"></i></a></li>
              <li><a href="/"><i className="fa fa-facebook"></i></a></li>
              <li><a href="/"><i className="fa fa-instagram"></i></a></li>
            </ul>
          </ul>
        </div>
      </div>
      
      <div className="footer__primary">
        <p>
          Copyright &copy; {new Date().getFullYear()} Varsity Lancer.
        </p>
      </div>
    </footer>
  )
}
