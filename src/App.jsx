// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Login from './pages/Login/Login'
// import Chat from './pages/Chat/Chat'
// import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate'
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App = () => {
//   return (
//     <>
//     <ToastContainer />
//       <Routes>
//       <Route path='/' element={<Login />} />
//       <Route path='/Chat' element={<Chat />} />
//       <Route path='/profile' element={<ProfileUpdate />} />

//       </Routes>
//     </>
      
    
//   )
// }

// export default App


import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Chat from './pages/Chat/Chat';
import ProfileUpdate from './pages/ProfileUpdate/ProfileUpdate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<ProfileUpdate />} />
      </Routes>
    </Router>
  );
};

export default App;
