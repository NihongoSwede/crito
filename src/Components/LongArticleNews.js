import React from 'react';
import largepic from '../Assets/largepic.svg';
import quotationmark from '../Assets/quotationmark.svg';
import oval1 from '../Assets/Oval.svg';
import oval2 from '../Assets/Oval Copy.svg';

const LongArticleNews = () => {
    return (
        <section className="LongArticleNews">
            <div className="container">
                <div className="articleContainer">
                    <h3>How To Use Digitalization <br/> In The Classroom </h3>
                    <div className="articleGroupsheader">
                        <div className="articlepart1">
                            <p>Mar 25, 2023</p>
                            <img src={oval1} alt="Date oval" />
                            <p>Business</p>
                            <img src={oval2} alt="Category oval" />
                            <p>Kimberly Hansen</p>
                        </div>
                        <div/>
                        <img src={largepic} className="largepicArticle" alt="Large article image" />
                        <div className="articleLongtext">
                            <div className="articleLongtextSection">
                                {[...Array(4)].map((_, index) => (
                                    <div key={index} className="paragraphformat">
                                        {index === 0 && (
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                            </span>
                                        )}
                                        {index === 1 && (
                                            <span>
                                                Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                            </span>
                                        )}
                                        {index === 2 && (
                                            <span>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                                            </span>
                                        )}
                                        {index === 3 && (
                                            <span>
                                                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="quotationbox">
                                <div className="flexquotation">
                                    <img src={quotationmark} alt="Quotation mark" />
                                </div>
                                <div className="quotationtext">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas <br/> porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, <br/> purus lectus malesuada libero, sit amet commodo magna eros quis urna.
                                </div>
                            </div>
                            <div className="paragraphformat">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
                            </div>
                            <div className="buttonStack">
                                {['Digitalization', 'School', 'IT', 'Design', 'Design', 'work', 'Tech'].map((text, index) => (
                                    <div key={index} className="button-unit">
                                        <button className="grey-btn-article">
                                            <div className="button-text">{text}</div>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sideContainer">
                    <form className="searchbox">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Type of search"/>
                    </form>
                    <div className="recent-posts">
                        <div className="innercontainer">
                            <h2><u>Rece</u>nt posts</h2>
                            {['How To Blow Through Capital At An Incredible Rate', 'How To Blow Through Capital At An Incredible Rate', 'How did we get 1M+ visitors in 30 days without anything!', 'Figma On Figma: How We Built Our Website Design System'].map((post, index) => (
                                <React.Fragment key={index}>
                                    <h3>{post}</h3>
                                    <div className="border-div">
                                        <p>Jan 14, 2020</p>
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                    <div className="categories">
                        <div className="innercontainer">
                            <h3><u>Cate</u>gories</h3>
                            {['Technology - 20 Posts', 'Freelancing - 07 Posts', 'Writing - 16 Posts', 'Marketing - 11 Posts', 'Business - 35 Posts', 'Education - 14 Posts'].map((category, index) => (
                                <div key={index}>
                                    <p>
                                        <span className="spanclass">{category}</span>
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LongArticleNews;
