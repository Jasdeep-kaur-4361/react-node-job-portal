import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from "react";
import { getUserService } from '../services/user';
import Card from 'react-bootstrap/Card';
import Pic1 from '../pics/find-1.jpg';
import Pic2 from '../pics/provider-profile.png';
import Pic3 from '../pics/logout.jpg';
import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import '../style/Provider.css';


function Provider() {
    const navigate = useNavigate();

    var [emailid, setEmail] = useState("");
    var [fullObj, setFullObj] = useState({});

    useEffect(() => {
        // alert("heeeyyyy");

        setEmail(localStorage.getItem("active_user"));
        if (token) {
            getUser();
            // alert("yes token");
        }
        // alert(emailid);

    }, []);
    // const token = localStorage.getItem("token");

    // const getUser = async () => {
    //     try {
    //         // alert("***");
    //         const resp = await axios.get("http://localhost:3003/user/currentuser", { headers: { 'Authorization': token } });
    //         // alert(resp.data.status);

    //         if (resp.data.status === true) {
    //             // alert("**************");
    //             // alert(JSON.stringify(resp.data.user));
    //             setFullObj(resp.data.user);
    //         }
    //         else {
    //             alert(resp.data.message);
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    function gotoProfile() {
        alert();
        navigate("/profileProvider");
    }
    function searchClients() {
        alert("Search Provider");
        navigate("/findClient");
    }
    function Logout() {
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

            if (resp.data.status === true) {
                // alert("**************");
                // alert(JSON.stringify(resp.data.user));
                setFullObj(resp.data.user);
            }
            else {
                alert(resp.data.message);
            }
        } catch (err) {
            console.log(err);
        }
    }
    // useEffect(() => {
    //     if (token)
    //         getUser();
    // }, [])

    return (
        <>
        <br></br>
            <center>
                {/* <h2>{"Provider Dash"}</h2> */}
            </center>
            {/* <hr></hr> */}
            <div id="welcome">
                <h1>Welcome : {emailid}</h1>
            </div>
            {/* <hr></hr> */}
            {/* {
                    JSON.stringify(fullObj)
                } */}
                {/* {"cwefc"} */}
            <div id="cards">
                {/* ---------CARD 1 ------------- */}
                <Card id="cards1" style={{ width: '18rem'  }}>
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
                        <Button variant="primary" onClick={searchClients}>Search Clients</Button>
                    </Card.Body>
                </Card>
                {/* ---------CARD 3 ------------- */}
                <Card id="cards1" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={Pic3} />
                    <Card.Body>
                        {/* <Card.Title>Card Title</Card.Title> */}
                        <Button variant="primary" onClick={Logout}>Logout</Button>
                    </Card.Body>
                </Card>
            </div>
            {/* <Button variant="secondary" onClick={getUser}>Login</Button> */}

        </>
    );
}
export default Provider;