import React from 'react'
import NavbarHigh from '../Components/NavbarHigh'
import NewsArticleshead from '../Components/NewsArticleshead'
import ArticleNews from '../Components/ArticleNews'
import FooterPart from '../Components/FooterPart'
import CopyRight from '../Components/CopyRight'
import LongArticleNews from '../Components/LongArticleNews'

const Sevices = () => {
  const backgroundColor1 = '#F0EFE9';
  return (
    <>
    
      <NavbarHigh/>
      <NewsArticleshead/>
      <LongArticleNews/>
      <ArticleNews backgroundColor={backgroundColor1}/>
      <FooterPart/>
      <CopyRight/>
      

    </>
  )
}

export default Sevices