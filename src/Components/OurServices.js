import React from 'react'
import line from '../Assets/Line 2.svg'

const OurServices = () => {
  return (
    <section className="companyServices">
        <div className="container">
            <h4 className="content-header">Our Services</h4>
            <h3>We provide the best<br/> service for consulting
            </h3>
            <div className="stacks-showcase">
                <a className="squares-button" href="">
                    <img src={line} alt=""/>
                    <h4>Business Advice</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="icon-square">
                        <i className="fa-light fa-arrow-right"></i>
                    </div>
                </a>
                <a className="squares-button" href="">
                    <img src={line} alt=""/>
                    <h4>Startup Business</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="icon-square">
                        <i className="fa-light fa-arrow-right"></i>
                    </div>
                </a>
                <a className="squares-button" href="">
                    <img src={line} alt=""/>
                    <h4>Financial Advice</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                    <div className="icon-square">
                        <i className="fa-light fa-arrow-right"></i>
                    </div>
                </a>
                <a className="squares-button" href="">
                    <img src={line} alt=""/>
                    <h4>Business Advice</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis in nam possimus.</p>
                        <div className="icon-square">
                            <i className="fa-light fa-arrow-right"></i>
                        </div>
                </a>
            </div>
                <div className="singleButton">
                    <a className="btn-transparent-mid" href="#">Browse Services <i className="fa-solid fa-arrow-up-right"></i></a>
                </div>   
        </div>

        
    </section>
  )
}

export default OurServices
