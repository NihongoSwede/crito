import React from 'react'
import NavBarHigh from '../Components/NavbarHigh';
import OurNewsPlusArticles from '../Components/OurNewsPlusArticles';
import FooterPart from '../Components/FooterPart';
import CopyRight from '../Components/CopyRight';
import FormSignup from '../Components/FormSignup';
import NewsArticleshead from '../Components/NewsArticleshead';
// Lägg till mittendelen för artikeln här sedan...

const News = () => {
  return (
    <>
    <NavBarHigh/>
    <NewsArticleshead/>
    <OurNewsPlusArticles/>
    <FormSignup/>
    <FooterPart/>
    <CopyRight/>
    </>
  )
}

export default News