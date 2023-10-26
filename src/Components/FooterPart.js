import React from 'react'
import '../App.css'
import bottomlogo from '../Assets/Logo (1).svg'

const FooterPart = () => {
  return (
    <section className="bottom-section1">
        <div className="container">
            <div className="picture-text-div">
                <img src={bottomlogo} alt=""/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat obcaecati voluptas voluptates! Voluptates laborum nam ratione minus necessitatibus, iure praesentium.</p>
            </div>

            <div className="rightPartsec">
                
                
                    
                        
                    <div className="divStack">
                        <h4>Company</h4> 
                        <a href="">About</a>
                        <a href="">Features</a>
                        <a href="">Work</a>
                        <a href="">Career</a>
                    </div>
    
                    
                    <div className="divStack">
                        <h4>Help</h4>
                        <a href="">Customer Support</a>
                        <a href="">Delivery Details</a>
                        <a href="">Terms & Conditions</a>
                        <a href="">Privacy & Policy</a>
                    </div>
                    
                    
                   
                    <div className="divStack">
                        <h4>Resources</h4>
                        <a href="">Free eBooks</a>
                        <a href="">Development Tutorial</a>
                        <a href="">How to -Blog</a>
                        <a href="">Youtube Playlist</a>
                    </div>
                
    

                   <div className="divStack">
                        <h4>Link</h4>
                        <a href="">Free eBooks</a>
                        <a href="">Development Tutorial</a>
                        <a href="">How to -Blog</a>
                        <a href="">Youtube Playlist</a>
                    </div>

                    

                

            </div>
                

        </div>
          
    </section>
  )
}

export default FooterPart
