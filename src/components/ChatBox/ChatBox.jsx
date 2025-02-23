import React from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'

const ChatBox = () => {
  return (
    <div className='chat-box'>
    <div className="chat-user">
        <img src={assets.profile_img} alt="Profile" />
        <p>Richar <img className='dot' src={assets.green_dot} alt="" /></p>
        <img src={assets.help_icon} className='help' alt="" />
    </div>
    <div className="chat-msg">
    <div className="s-msg">
    <img className='msg-img' src={assets.pic1} alt="" />
    <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div>
        <img src={assets.profile_img} alt="Profile" />
        <p>2.00 AM</p>
    </div>
    </div>

    <div className="r-msg">
    <p className="msg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <div>
        <img src={assets.profile_img} alt="Profile" />
        <p>2.00 PM</p>
    </div>
    </div>
    </div>
    <div className="chat-input">
    <input type="text" placeholder='Send a message' />
    <input type="file" id='image' accept='image/png, image/jpeg' hidden />
    <label htmlFor="image">
        <img src={assets.gallery_icon} alt="gallery Icon" />
    </label>
    <img src={assets.send_button} alt="Send Button" />
    </div>
    </div>
  )
}

export default ChatBox
