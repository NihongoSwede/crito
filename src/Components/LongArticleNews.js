import React from 'react'
import largepic from '../Assets/largepic.svg'
import quotationmark from '../Assets/quotationmark.svg'
import oval1 from '../Assets/Oval.svg'
import oval2 from '../Assets/Oval Copy.svg'

const LongArticleNews = () => {
  return (
    <section className='LongArticleNews'>
        <div className='container'>
            <div className='articleContainer'>
                <h3>
                How To Use Digitalization <br/> 
                In The Classroom 
                </h3>

                <div className='articleGroupsheader'>
                    <div className='articlepart1'>
                        <p>
                        Mar 25, 2023        
                        </p>

                        <img src={oval1} />

                        <p>
                        Business
                        </p>

                        <img src={oval2} />

                        <p>
                        Kimberly Hansen 
                        </p>  
                    

                    </div>
                    

                <div/>
                    
                    <img src={largepic} className='largepicArticle' />

                    <div className='articleLongtext'>
                        <div className='articleLongtextSection'>
                            <div className='paragraphformat'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.


                            </div>
                            

                            <div className='paragraphformat'>
                            Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.
                            Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. uspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.

                            </div>

                            <div className='paragraphformat'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci. 
        
                            </div>

                            <div className='paragraphformat'>
                            Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                            Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.
    
                            </div>
                        </div>

                        <div className='quotationbox'>
                            <div className='flexquotation'>
                                <img src={quotationmark} />

                            </div>

                            <div className='quotationtext'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas <br/> porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, <br/> purus lectus malesuada libero, sit amet commodo magna eros quis urna.  
                            </div>

                        </div>

                        <div className='paragraphformat'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna. unc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.    
                        </div>

                        <div className='buttonStack'>
                            
                            <div className='button-unit'>
                                <button className='grey-btn-article'>
                                <div className='button-text'>
                                    Digitalization
                                </div>
                                </button>
                            </div>
                            
                            <div className='button-unit'>
                                <button className='grey-btn-article'>
                                <div className='button-text'>
                                    School
                                </div>
                                </button>
                            </div>
                            
                            <div className='button-unit'>
                                <button className='grey-btn-article'>
                                <div className='button-text'>
                                    IT
                                </div>
                                </button>
                            </div>

                            <div className='button-unit'>
                                <button className='grey-btn-article'> 

                                <div className='button-text'>
                                    Design
                                </div>  
                                </button>
                            </div>

                            <div className='button-unit'>
                                <button className='grey-btn-article'>
                                <div className='button-text'>
                                    Design
                                </div>
                                </button>
                            </div>


                            <div className='button-unit'>
                                <button className='grey-btn-article'>
                                <div className='button-text'>
                                    work
                                </div>
                                </button>
                            </div>

                            <div className='button-unit'>
                                <button className='grey-btn-article'>

                                <div className='button-text'>
                                    Tech
                                </div>
                                </button>
                            </div>

                        </div>


                    </div>


                </div>

            </div>
            
            <div className='sideContainer'>
                <div className="search-container">
                    <div className="search-icon">
                        <i className="fa-light fa-magnifying-glass"></i>
                    </div>
                    <input type="text" className="search-input" placeholder="Type to search..." />
                </div>

                <div className='recent-posts'>
                    <h3>
                    Recent posts
                    </h3>

                    <h3>
                    How To Blow Through Capital At An Incredible Rate
                    </h3>

                    <p>
                    Jan 14, 2020
                    </p>


                    <h3>
                    How To Blow Through Capital At An Incredible Rate
                    </h3>

                    <p>
                    Jan 14, 2020
                    </p>

                    <h3>
                    How did we get 1M+ visitors in 30 days without anything!                    
                    </h3>

                    <p>
                    Jan 14, 2020
                    </p>

                    <h3>
                    Figma On Figma: How We Built Our Website Design System
                    </h3>

                    <p>
                    Jan 14, 2020
                    </p>

                </div>

                <div className='categories'>

                    <p>
                    Technology  -  20 Posts
  
                    </p>

                    <p>
                    Writing  -  16 Posts
  
                    </p>

                    <p>
                    Marketing  -  11 Posts
  
                    </p>

                    <p>
                    Business  -  35 Posts
  
                    </p>

                    <p>
                    Education  -  14 Posts
  
                    </p>

                </div>

                
            </div>
        </div>      
    </section>
  )
}

export default LongArticleNews
