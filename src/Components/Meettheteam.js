import React from 'react'
import pic1 from '../Assets/MeettheTeamPic/Image (9).png'
import pic2 from '../Assets/MeettheTeamPic/Image (10).png'
import pic3 from '../Assets/MeettheTeamPic/Image (11).png'
import pic4 from '../Assets/MeettheTeamPic/Image (12).png'
import dots from '../Assets/DotsIMG/dot(2).svg'

const Meettheteam = () => {
  return (
    <section className="meet-the-team">
    <div className="container">
        <h4>Meet our team</h4>
        <div className="top-header-button">
            <h3>Experience Team Members</h3>
            <a className="btn-black-meet-team" href=""><span>Browse Team</span> <i className="fa-solid fa-arrow-up-right"></i></a>      
        </div>
    

        <div className="team-showcase">
            <div className="employee-box">
                <img className="IMGSHOW" src={pic1} alt=""/>
                <h3>Kristine Palmer</h3>
                <p>Chef operation officer</p>
            </div>

            <div className="employee-box">
                <img className="IMGSHOW" src={pic2} alt=""/>
                <h3>Mark Aubri</h3>
                <p>Senior Consultant</p>
            </div>

            <div className="employee-box">
                <img className="IMGSHOW" src={pic3} alt=""/>
                <h3>Kimberly Hansen</h3>
                <p>Senior Consultant</p>
            </div>

            <div className="employee-box">
                <img className="IMGSHOW" src={pic4} alt=""/>
                <h3>Justin Willoman</h3>
                <p>Senior Tech Consultant</p>
            </div>
        </div>
    <div className="imgpart">
        <img src={dots} alt=""/>       
    </div>
    </div>


</section> 
  )
}

export default Meettheteam
