import { BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Signup from './Mainpage/Signup';
import Navb from './Mainpage/Navb';
import Container from 'react-bootstrap/Container';
// import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Login from './Mainpage/Login';
import Client from './Mainpage/Client';
import Provider from './Mainpage/Provider';
import ProfileClient from './Profile/Profile_client';
import ProviderProfile from './Profile/Profile_provider';
import React, { useEffect, useState } from "react";
import Customer from './CostomerOrClient/Cutomer';
import FindServiceProvider from './CostomerOrClient/FindServiceProvider';
import FindClient from './CostomerOrClient/FindClient';
import AdminDsah from './admin/Admin Dash';
import AllUsers from './admin/AllUsers';
import AllClients from './admin/AllClients';
import AllProviders from './admin/AllProviders';
import ModalProviders from './CostomerOrClient/modalServiceP';
import AboutUs from './Mainpage/AboutUs';
import JobListings from './Mainpage/jobListings';
import postAjob from './Mainpage/postAjob';
function Router() {

    // useEffect(() => {
    //     const token = localStorage.getItem("token");
    //     if (token) {
    //         // const dutoken = webToken.decode(token, process.env.sec_key);
    //         // alert("token");            
    //         // alert(token);
    //     }
    // }, [])

    // function directLogin() {
    //     const token = localStorage.getItem("token");

    //     if (token) {
    //         // alert(token);

    //     }
    // }            

    return (

        <BrowserRouter>
            <Routes>
            <Route path='/' element={<Navb />}></Route>

                <Route path='/navbar' element={<Navb />}></Route>
                <Route path='/home' element={<Navb />}></Route>
                <Route path='/jobListings' element={<JobListings />}></Route>
                <Route path='/postAjob' element={<PostAjob />}></Route>



                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/clientDash' element={<Client />}></Route>
                <Route path='/providerDash' element={<Provider />}></Route>
                <Route path='/profileClient' element={<ProfileClient />}></Route>
                <Route path='/profileProvider' element={<ProviderProfile />}></Route>
                <Route path='/customerReq' element={<Customer />}></Route>
                <Route path='/findServicesProvider' element={<FindServiceProvider />}></Route>
                <Route path='/findClient' element={<FindClient />}></Route>
                <Route path='/admindash' element={<AdminDsah />}></Route>
                <Route path='/allusers' element={<AllUsers />}></Route>
                <Route path='/allclients' element={<AllClients />}></Route>
                <Route path='/allproviders' element={<AllProviders />}></Route>
                <Route path='/modalproviders/:email' element={<ModalProviders />}></Route>
                <Route path='/aboutus' element={<AboutUs />}></Route>


            </Routes>
        </BrowserRouter>
    )
}
export default Router;


