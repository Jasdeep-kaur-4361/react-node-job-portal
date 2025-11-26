import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import { getUserService } from '../services/user';
import Card from 'react-bootstrap/Card';
import Pic1 from '../pics/find-1.jpg';
import Pic2 from '../pics/provider-profile.png';
import Pic3 from '../pics/logout.jpg';
import Pic4 from '../pics/find-5.jpg';

import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import '../style/Provider.css';


function Client()
{
    var [emailid, setEmail] = useState("");
    const navigate = useNavigate();
    
    function gotoProfile(){
        alert();
        navigate("/profileProvider");
    }
    function searchClients(){
        alert("Search Clients");
        navigate("/findServicesProvider");
    }function Logout(){
        alert("logout");
        localStorage.clear("active_user");
        navigate("/");
    }
    const token = localStorage.getItem("token");
    const getUser = async () => {
        try {
            // alert("***");
            // const resp = await axios.getUserService();
            const resp = await getUserService();

            alert();
            alert(resp.data.status);

            // if (resp.data.status === true) {
            //     // alert("**************");
            //     // alert(JSON.stringify(resp.data.user));
            //     setFullObj(resp.data.user);
            // }
            // else {
            //     alert(resp.data.message);
            // }
        } catch (err) {
            console.log(err);
        }
    }
    function gotoProfile(){
        alert();
        navigate("/profileClient");
    }
    function postTask(){
        alert("postTask");
        navigate("/customerReq");
    }
    function searchClients(){
        alert("Search");
        // localStorage.clear("active_user");
        // navigate("/");
    }
    function Logout(){
        alert("logout");
        localStorage.clear("active_user");
        navigate("/");
    }
    useEffect(() => {
        // alert("heeeyyyy");

        setEmail(localStorage.getItem("active_user"));
        if (token) {
            getUser();
            // alert("yes token");
        }
        // alert(emailid);

    }, []);
    return(
        <>
            <center>
                {/* <h3>{"Client Dash"}</h3> */}
            </center>
            {/* <hr></hr> */}
            <div id="welcome">
                <h1>Welcome : {emailid}</h1>
            </div>
            {/* <hr></hr> */}
            {/* {
                    JSON.stringify(fullObj)
                } */}
            <div id="cards">
                {/* ---------CARD 1 ------------- */}
                <Card id="cards1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pic2} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Button variant="primary" onClick={gotoProfile}>Your Profile</Button>
                    </Card.Body>
                </Card>
                {/* ---------CARD 2 ------------- */}
                <Card id="cards1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pic1} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Button variant="primary" onClick={postTask}>Post Task</Button>
                    </Card.Body>
                </Card>
                {/* ---------CARD 3 ------------- */}
                <Card id="cards1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pic4} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Button variant="primary" onClick={searchClients}>Search</Button>
                    </Card.Body>
                </Card>
                {/* ---------CARD 4 ------------- */}
                <Card id="cards1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pic3} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Button variant="primary" onClick={Logout}>Logout</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
export default Client;