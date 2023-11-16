import React from 'react'
import NavBarHigh from '../Components/NavbarHigh';
import ArticleNews from '../Components/ArticleNews';
import FooterPart from '../Components/FooterPart';
import CopyRight from '../Components/CopyRight';
import FormSignup from '../Components/FormSignup';
import NewsArticleshead from '../Components/NewsArticleshead';


const News = () => {
  return (
    <>
    <NavBarHigh/>
    <NewsArticleshead/>
    <ArticleNews sliceNumber={9}/>
    <FormSignup/>
    <FooterPart/>
    <CopyRight/>
    </>
  )
}

export default News