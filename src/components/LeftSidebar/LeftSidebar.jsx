import React from 'react'
import './LeftSidebar.css'
import assets from '../../assets/assets'

const LeftSidebar = () => {
  return (
    <div className='ls'>
    <div className="ls-top">
    <div className="ls-nav">
    <img src={assets.logo} className='logo' alt="Logo" />
    <div className="menu">
        <img src={assets.menu_icon} alt="Menu Icon" />
        <div className="sub-menu">
        <p>Edit Profile</p>
        <hr />
        <p>Logout</p>
        </div>

    </div>

    </div>
    <div className="ls-search">
    <img src={assets.search_icon} alt="Search Icon" />
    <input type="text" placeholder='Search here..' />

    </div>

    </div>
    <div className="ls-list" >
    {Array(12).fill("").map((item,index)=>(
        <div key={index} className="friends">
    <img src={assets.profile_img} alt={"Profile"} />
    <div>
        <p>John Doe</p>         
        <span>Hey there! I am using Whatsapp</span>
        

    </div>

    </div>
    ))}
    </div>
      
    </div>
  )
}

export default LeftSidebar
