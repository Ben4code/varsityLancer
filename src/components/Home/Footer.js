import React from 'react'
import logo from '../../imgs/vl-logo.png'


export default function Footer() {
  return (
    <section className="footer">
      <footer className="footer__secondary">
        <div className="footer__secondary--links">
          <img src={logo} alt=""/>
        </div>
        <div className="footer__secondary--links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
        <div className="footer__secondary--links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
            <li><a href="/">Home</a></li>
          </ul>
        </div>
      </footer>
      <hr/>
      <footer className="footer__primary">
        <p>
        Varsity Lancer is a subsidiary of <a href="/">Webenlist</a> Limited
        </p>
        <p>
          Copyright &copy; { new Date().getFullYear()} Varsity Lancer.
        </p>
      </footer>
    </section>
  )
}
