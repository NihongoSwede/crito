import React from 'react'
import '../App.css';
import NavbarHigh from '../Components/NavbarHigh';
import ShowCase from '../Components/ShowCase';
import AboutCompany from '../Components/AboutCompany';
import FooterPart from '../Components/FooterPart';
import CopyRight from '../Components/CopyRight';

const Home = () => {
  return (
    <div>
      <NavbarHigh/>
      <ShowCase/>
      <AboutCompany/>
      <FooterPart />
      <CopyRight/>
      
    </div>
  )
}

export default Home