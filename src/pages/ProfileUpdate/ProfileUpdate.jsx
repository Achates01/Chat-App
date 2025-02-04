// import React, { useState } from 'react';
// import './profileUpdate.css'
// import assets from '../../assets/assets'


// const ProfileUpdate = () => {

//   const [image,setImage] =  useState(false);



//   return (
//     <div className='profile'>
//     <div className="profile-container">
//       <form>
//         <h3>Profile Details</h3>
//         <label htmlFor="avtar">
//         <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='avtar' accept='.png, .jpg, .jpeg' hidden/>
//         <img src={assets.avatar_icon} alt="" />
//         upload profile image

//         </label>
//         <input type="text" placeholder='Your name' required/>
//         <textarea placeholder='Write profile bio' required></textarea>
//         <button type="submit">Save</button>
//       </form>
//       <img src={assets.logo_icon} alt="" />
//     </div>
      
//     </div>
//   )
// }

// export default ProfileUpdate

// import React, { useState } from 'react';
// import './profileUpdate.css';
// import assets from '../../assets/assets';

// const ProfileUpdate = () => {
//   const [image, setImage] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(URL.createObjectURL(file)); // Create preview URL for selected image
//     }
//   };

//   return (
//     <div className="profile">
//       <div className="profile-container">
//         <form>
//           <h3>Profile Details</h3>

//           <label htmlFor="avatar" className="avatar-label">
//             <input
//               onChange={handleImageChange}
//               type="file"
//               id="avatar"
//               accept=".png, .jpg, .jpeg"
//               hidden
//             />
//             <img src={image || assets.avatar_icon} alt="Profile" className="profile-img" />
//             <span>Upload Profile Image</span>
//           </label>

//           <input type="text" placeholder="Your name" required />
//           <textarea placeholder="Write profile bio" required></textarea>
//           <button type="submit">Save</button>
//         </form>
//         <img className='profile-pic'  src={image? URL.createObjectURL(image): assets.logo_icon} alt="Logo" />
//       </div>
//     </div>
//   );
// };

// export default ProfileUpdate;


import React, { useState, useEffect } from 'react';
import './profileUpdate.css';
import assets from '../../assets/assets';

const ProfileUpdate = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  // Cleanup object URL to prevent memory leaks
  useEffect(() => {
    return () => {
      if (image) {
        URL.revokeObjectURL(image);
      }
    };
  }, [image]);

  return (
    <div className="profile">
      <div className="profile-container">
        <form>
          <h3>Profile Details</h3>

          <label htmlFor="avatar" className="avatar-label">
            <input
              onChange={handleImageChange}
              type="file"
              id="avatar"
              accept=".png, .jpg, .jpeg"
              hidden
            />
            <img src={image || assets.avatar_icon} alt="Profile" className="profile-img" />
            <span>Upload Profile Image</span>
          </label>

          <input type="text" placeholder="Your name" required />
          <textarea placeholder="Write profile bio" required></textarea>
          <button type="submit">Save</button>
        </form>
        <img className="profile-pic" src={image || assets.logo_icon} alt="Logo" />
      </div>
    </div>
  );
};

export default ProfileUpdate;
