import React from 'react'
import './RightSidebar.css'
import assets from '../../assets/assets'

const RightSidebar = () => {
  return (
    <div className='rs'>
    <div className="rs-profile">
    <img src={assets.profile_img} alt="" />
    <h3>Richard Sanford <img src={assets.green_dot} classname='dot' alt="" /> </h3>
    <p>Hey, There I am Richard Sanford using chat app</p>
    
    </div>
    <hr />
    <div className="rs-media">
    <p>media</p>
    <div>
        <img src={assets.pic1} alt="" />
        <img src={assets.pic2} alt="" />
        <img src={assets.pic3} alt="" />
        <img src={assets.pic1} alt="" />
        <img src={assets.pic2} alt="" />
        <img src={assets.pic3} alt="" />

    </div>   
    </div>
    <button>Logout</button>  
    </div>
  )
}

export default RightSidebar
