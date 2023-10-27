import React from 'react'
import '../App.css';
import NavbarHigh from '../Components/NavbarHigh';
import ShowCase from '../Components/ShowCase';
import AboutCompany from '../Components/AboutCompany';
import FooterPart from '../Components/FooterPart';
import CopyRight from '../Components/CopyRight';
import CompanyShowcase from '../Components/CompanyShowcase';
import Features from '../Components/Features'

const Home = () => {
  return (
    <div>
      <NavbarHigh/>
      <ShowCase/>
      <CompanyShowcase/>
      <Features/>
      <AboutCompany/>
      <FooterPart />
      <CopyRight/>
      
    </div>
  )
}

export default Home