import React from 'react'
import pic1 from '../Assets/GlobalProj/Image (5).png'
import pic2 from '../Assets/GlobalProj/Image (6).png'
import pic3 from '../Assets/GlobalProj/Image (7).png'
import pic4 from '../Assets/GlobalProj/Image (8).png'

const GlobalProjects = () => {
  return (
    <section className="global-projects">
        <div className="container">
            <div className="top-global">
                <h3>Project & Case Studies</h3>
                <h4>Let’s Looks Our Global Projects</h4>
            </div>

            <div className="global-projects-box">
                
                <a className="box-container" href="#"> 
                    <img src={pic1} alt=""/>
                    <h4>Grow your business</h4>
                    <div className="linkB">
                        <span>Read more</span> 
                        <i className="fa-light fa-arrow-up-right"></i>
                    </div>
                </a>

                <a className="box-container" href="#"> 
                    <img src={pic2} alt=""/>
                    <h4>Why your client needs a responsive website
                    </h4>
                    <div className="linkB">
                        <span>Read more</span> 
                        <i className="fa-light fa-arrow-up-right"></i>
                    </div>
                </a>

                <a className="box-container" href="#"> 
                    <img src={pic3} alt=""/>
                    <h4>Educate your employees to get better results
                    </h4>
                    <div className="linkB">
                        <span>Read more</span> 
                        <i className="fa-light fa-arrow-up-right"></i>
                    </div>
                </a>

                <a className="box-container" href="#"> 
                    <img src={pic4} alt=""/>
                    <h4>Business Insights is a important piece of your business</h4>
                    <div className="linkB">
                        <span>Read more</span> 
                        <i className="fa-light fa-arrow-up-right"></i>
                    </div>
                </a>

            </div>
            <a className="btn-black-btm" href="#"><span>All recent projects</span> <i className="fa-solid fa-arrow-up-right"></i></a>
        </div>
    </section>
  )
}

export default GlobalProjects
