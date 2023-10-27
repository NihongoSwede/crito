import React from 'react'

const FormSignup = () => {
  return (
    <section className="SignupForm">
        <div className="container">
            <div className="H3-part">
                <h3>Get News Updates By Signup</h3>
            </div>

            <div className="placeholder-sign">
                <form action=""><input type="email" required placeholder="username@domain.com"/></form>
                <a className="btn-subscribe" href="#"><span>Subscribe</span> <i className="fa-solid fa-arrow-up-right"></i></a>
            </div> 
            
        </div>
        
    </section>
  )
}

export default FormSignup
