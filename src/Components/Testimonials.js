import React from 'react'
import firstimage from '../Assets/Testimonials/Ellipse 1.png'
import seccondimage from '../Assets/Testimonials/Ellipse 1 (1).png'
import thirdimage from '../Assets/Testimonials/Ellipse 1 (2).png'
import stars from '../Assets/Star.svg'

const Testimonials = () => {
  return (
    <section className="testimonials">
        <div className="white-box">
            <div className="container">
                <h4 className="topTest"> Testimonials</h4>
                <h3> What Our client says</h3>
            <div className="testimonials-stack">
                <div className="testimonials-column">
                    <img src={stars} alt=""/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="text-img-stack">
                        
                        
                        <img src={firstimage} alt=""/>
                        

                        <div className="text-stack">
                            <h4>Cassandra Warren</h4>
                            <p className="business">Business Manager, Dorfus</p>
                        </div>
                    </div>
                </div>
    
    
                <div className="testimonials-column">
                    <img src={stars} alt=""/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="text-img-stack">
                        
                        <img src={seccondimage} alt=""/>
                        
                        <div className="text-stack">
                            <h4>Amanda Tulling</h4>
                            <p className="business">Senior Developer, Square</p>
                        </div>

                    </div>
                    
                </div>
    
    
                <div className="testimonials-column">
                    <img src={stars} alt=""/>
                    <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                    <div className="text-img-stack">
                        
                        <img src={thirdimage} alt=""/>
                        
                        <div className="text-stack">
                            <h4>Jack McDouglas</h4>
                            <p className="business">Key Account Manager, Gobona</p>
                        </div>
                    </div>
                </div>
                
                
                
            </div>

            <div className="bottom-section">
                <a className="all-reviews-btn" href="#"><span>All Reviews</span> <i className="fa-solid fa-arrow-up-right"></i></a>
            </div>

            
        </div>
        </div>
    </section>
  )
}

export default Testimonials
