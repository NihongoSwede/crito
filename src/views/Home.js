import React from 'react'
import '../App.css';
import NavbarHigh from '../Components/NavbarHigh';
import ShowCase from '../Components/ShowCase';
import AboutCompany from '../Components/AboutCompany';
import FooterPart from '../Components/FooterPart';
import CopyRight from '../Components/CopyRight';
import CompanyShowcase from '../Components/CompanyShowcase';
import Features from '../Components/Features'
import Testimonials from '../Components/Testimonials';
import Meettheteam from '../Components/Meettheteam';
import OurServices from '../Components/OurServices';
import Whychooseus from '../Components/Whychooseus';
import ArticleNews from '../Components/ArticleNews';
import GlobalProjects from '../Components/GlobalProjects';
import FormSignup from '../Components/FormSignup';

const Home = () => {
  return (
    <>
      <NavbarHigh/>
      <ShowCase/>
      <CompanyShowcase/>
      <Features/>
      <AboutCompany/>
      <OurServices/>
      <Whychooseus/>
      <GlobalProjects/>
      <Meettheteam/>
      <Testimonials/>
      <ArticleNews/>
      <FormSignup/>
      <FooterPart />
      <CopyRight/>
      

      
    </>
  )
}

export default Home