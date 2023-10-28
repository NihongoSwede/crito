import React from 'react'
import pic1 from '../Assets/articles-news-pic/Image (10).png'
import pic2 from '../Assets/articles-news-pic/Image (11).png'
import pic3 from '../Assets/articles-news-pic/Image (12).png'
import dots from '../Assets/DotsIMG/dot(1) (1).svg'
import { useEffect, useState } from 'react'
const url = "https://win23-assignment.azurewebsites.net/api/articles"

const ArticleNews = () => {
    const [results, setResults] = useState([]);
    const controller = new AbortController();

    useEffect(() =>{

        async function getData(){
            const response = await fetch(url, {signal: controller})
            const data = await response.json();
            setResults(data);
        }

        getData();

        console.log(results, "results")
    
        return () => {
            controller.abort();
        };

    } ,[])
    
    

  return (
    

    <section className="articles-news">
        <div className="container">
            <h4 className="article-header">Article & News</h4>
            <div className="top-art-head">
                <h3>Get Every Single Article & News</h3>
                <a className="trn-btn-art-sec" href=""><span>Browse Articles</span> <i className="fa-solid fa-arrow-up-right"></i></a>
            </div>

            <div className="article-showcase">
                <div className="article-stack">
                    <div className="img-yellow-stack">
                        <img src={pic1} alt=""/>
                        <div className="yellow-box">
                            <h5>25</h5>
                            <p>Mar</p> 
                        </div>
                    </div>
                    <div className="experiment">
                        <p>Business</p>
                        <h3 className="newsInfo">How To Use Digitalization in the classroom</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>

                <div className="article-stack">
                    <div className="img-yellow-stack">
                        <img src={pic2} alt=""/>
                        <div className="yellow-box">
                            <h5>17</h5>
                            <p>Mar</p> 
                        </div>
                    </div>
                    <div className="experiment">
                        <p>Business</p>
                        <h3 className="newsInfo">How To Implement Chat GPT In Your Projects</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
        

                

                <div className="article-stack">
                    <div className="img-yellow-stack">
                        <img src={pic3} alt=""/>
                        <div className="yellow-box">
                            <h5>13</h5>
                            <p>Mar</p> 
                        </div>
                    </div>
                    <div className="experiment">
                        <p>Business</p>
                        <h3 className="newsInfo">The Guide To Support Modern CSS Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto sed hic libero.</p>
                    </div>
                </div>
                
            </div>
            <div className="img-article-dots-container">
                <img src={dots} alt=""/>
            </div>         
        </div>
    </section>
  )
}

export default ArticleNews
