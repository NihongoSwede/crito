import React, { useEffect, useState } from 'react';
import pagination from '../Assets/Pagination.svg';

const url = "https://win23-assignment.azurewebsites.net/api/articles";

const OurNewsPlusArticles = () => {
    const [results, setResults] = useState([]);
    const controller = new AbortController();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url, { signal: controller.signal });
                const data = await response.json();
                setResults(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const limitedResults = results.slice(0, 9); 

    return (
        <section className="articles-news">
            <div className="container">
                <h4 className="article-header">Article & News</h4>
                <div className="top-art-head">
                    <h3>Get Every Single Article & News</h3>
                    <a className="trn-btn-art-sec" href="">
                        <span>Browse Articles</span> <i className="fa-solid fa-arrow-up-right"></i>
                    </a>
                </div>

                <div className="article-showcase">
                    {limitedResults.map((article, index) => {
                        const unixTimestamp = Math.floor(new Date(article.published).getTime() / 1000); // Convert to Unix timestamp
                        const date = new Date(unixTimestamp * 1000); // Convert Unix timestamp to milliseconds
                        const dayOfMonth = date.getDate();

                        function getThreeLetterMonth(month) {
                            const months = [
                                "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
                            ];
                        
                            if (month >= 1 && month <= 12) {
                                return months[month - 1];
                            }
                        
                            return "";
                        }

                        return (
                            <div className="article-stack" key={index}>
                                <div className="img-yellow-stack">
                                    <img src={article.imageUrl} alt={article.title} />
                                    <div className="yellow-box">
                                        <h5>{dayOfMonth}</h5>
                                        <p>{getThreeLetterMonth(date.getMonth() + 1)}</p> 
                                    </div>
                                </div>
                                <div className="experiment">
                                    <p>{article.category}</p>
                                    <h3 className="newsInfo">{article.title}</h3>
                                    <p>{article.content}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="img-article-dots-container">
                    <img src={pagination} alt="" />
                </div>
            </div>
        </section>
    );
}

export default OurNewsPlusArticles;