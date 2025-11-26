import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MyNav from './Mainpage/Nav';
import Design from './Design/Designk';
import Profile from './Profile/Profile_client';
import Extra from './Design/Designk';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Design></Design> */}

   <App></App>
   {/* <Extra></Extra> */}
   
   {/* <Profile></Profile> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
