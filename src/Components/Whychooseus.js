import React from 'react'
import process from '../Assets/LogosWhyChoose/process.svg'
import strategic from '../Assets/LogosWhyChoose/strategic.svg'
import experience from '../Assets/LogosWhyChoose/experience.svg'
import ai from '../Assets/LogosWhyChoose/ai.svg'
import woman from '../Assets/Image (5).png'

const Whychooseus = () => {
  return (
    <section className="whyChooseUs">
        <div className="container">
            <div className="leftSection">
                    <h3>Why Choose Us</h3>
                    <h4>Why We Are The <br/> Best Business Consulting Agency</h4>
                    
                    
                    
                    <div className="grid-div">

                        <div className="stackIconArg">

                        
                            <img src={process} alt=""/>
                            
                    
                            <div className="text-stack">
                                <h5>Process Excellence</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </div>    
                        </div>
    
                    
    
                        <div className="stackIconArg">
                            
                            <img src={strategic} alt=""/>
                            
                            <div className="text-stack">
                                <h5>Strategic Planning</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </div>    
                        </div>
    
                        <div className="stackIconArg">
                            
                            <img src={experience} alt=""/>
            
                            <div className="text-stack">
                                <h5>Experience Design</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </div>    
                        </div>
    
                        <div className="stackIconArg">
                            
                            <img src={ai} alt=""/>
                            
                            <div className="text-stack">
                                <h5>Artificial Inteligence</h5>
                                <p>Lorem, ipsum dolor sit amet consectetur.
                                </p>
                            </div>    
                        </div>

                    </div>


            </div>
            <div className="rightSection">
                <img src={woman} alt=""/>
                <div className="blueBox"> 
                    
                </div>
            </div>    
        </div>
    </section>
  )
}

export default Whychooseus
