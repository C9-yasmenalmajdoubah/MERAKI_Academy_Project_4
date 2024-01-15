import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h2>NEW COLLECTION</h2>
        <div>
        <div className='new'> 
        <p>it's new</p>
        <img src ="https://i.pinimg.com/236x/6d/c7/db/6dc7dbde9ed8a95d6d54ae3a17ce51b8.jpg" alt="new"/>
        </div>  
        <p>NEW ARRIVED</p>
<p>FOR YOU LADY</p>
</div>
<div className='hero-last'>
<div> lastest COLLECTION</div>
<img src ="https://www.shutterstock.com/image-vector/vector-banner-new-collection-decorative-260nw-1767276965.jpg" alt="new"/>
</div>
</div>
<div className='hero-right'>
<img src ="https://images.alwatanvoice.com/news/large/9998876307.jpg" alt="new"/>
            </div>
    </div>
    
  )
}

export default Hero;
