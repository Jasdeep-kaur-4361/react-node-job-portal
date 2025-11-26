import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import '../style/admin.css';
import { useState, useEffect } from 'react';
import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom';

// import 'angular.min.js';
// import Pic1 from '../pics/find-1jpg';

function AdminDash() {
    const navigate = useNavigate();

    // const [obj, updateObj] = useState({ email: '', password: "", userType: "" });
    // useEffect(() => {
    //     // doFetchAllUsers();
    //     // alert(JSON.stringify(obj));
    // }, [])
    async function allUsers() {
        navigate("/allusers");
    }
    async function allClients() {
        navigate("/allclients");
    }
     async function allProviders() {
        navigate("/allproviders");
    }
    return (
        <>
            <div id="cards">
                <Card className="text-center" style={{ width: "30rem", height: "20rem" }}>
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <img src='' alt='no image'></img>
                        <Card.Title><h2>Users</h2></Card.Title>

                        <Button variant="primary" onClick={allUsers}>All Users</Button>

                    </Card.Body>
                </Card>
                {/* ================================================ */}
                <Card className="text-center" style={{ width: "30rem", height: "20rem" }}>
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <img src='' alt='no image'></img>
                        <Card.Title><h2>Clients</h2></Card.Title>

                        <Button variant="primary" onClick={allClients}>Clients</Button>

                    </Card.Body>
                </Card>
                {/* ================================================= */}
                <Card className="text-center" style={{ width: "30rem", height: "20rem" }}>
                    {/* <Card.Header>Featured</Card.Header> */}
                    <Card.Body>
                        <img src='' alt='no image'></img>
                        <Card.Title><h2>Service Provider</h2></Card.Title>

                        <Button variant="primary" onClick={allProviders}>Service Provider</Button>

                    </Card.Body>
                </Card>
            </div>

        </>
    );
}

export default AdminDash;