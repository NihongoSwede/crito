import React from 'react'
import logo from '../Assets/Logo.svg'


const NavbarHigh = () => {
  return (
    <header>
            
            <div className="container">
                <img src={logo} alt="crito-logotype"/>
                <button className="menu-bars"><i class="fa-solid fa-bars-staggered"></i></button>
                <div className="menu">
                    <div className="top-menu">
                        <div className="contact-information">
                            <div className="content-box">
                                <i className="fa-light fa-phone-volume"></i>
                                +46 (8) 121 427 50
                            </div>
                            <div className="content-box">
                                <i className="fa-light fa-envelope-dot"></i>
                                info@crito.com
                            </div>
                            <div class="content-box last">
                                <i className="fa-sharp fa-light fa-location-dot"></i>
                                Sveavägen 31, 111 34 Stockholm
                            </div>
                        </div>
                        
                        <div class="social-media">
                            <a href="https://www.facebook.com/" target="_blank"><i className="fa-brands fa-facebook"></i></a>
                            <a href="https://twitter.com/?lang=sv" target="_blank"><i className="fa-brands fa-square-x-twitter"></i></a>
                            <a href="https://www.instagram.com/mate_lc/" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/feed/" target="_blank"><i className="fa-brands fa-linkedin"></i></a>
                        </div>  
                    </div>
                    <div className="main-menu">
                        <nav>
                            <a href="index.html">Home</a>
                            <a href="#">Service</a>
                            <a href="#">News</a>
                            <a href="index1.html">Contact</a>
                        </nav>
                        <a className="btn-yellow" href="#">Login <i className="fa-solid fa-arrow-up-right"></i></a>
                    </div> 
                </div>   
            </div>
    </header>
  )
}

export default NavbarHigh