import React, { createContext, useEffect, useState } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../style/Nav.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import LogoPic from '../pics/job.jpg';
import Crouselpic from '../pics/lowcode.jpg';
import CrouselPic2 from '../pics/people-networking.jpg';
import CrouselPic3 from '../pics/connected-busines-scaled-1.jpg';
import card1 from '../pics/terms- and-condtions.jpg';
import card2 from '../pics/lookandfindjob.png';
import card3 from '../pics/non-profit.jpg';




import Carousel from 'react-bootstrap/Carousel';

function Navb() {



    return (
        <>
            <Navbar expand="lg" className="navbar" >
                {/* <Container> */}
                <div id="maindiv">
                    <div id="bcase">

                        <h1>SP</h1>

                    </div>
                    <div id="navName">
                        <Navbar.Brand id="webname" href="/home">StintPurveyor.com</Navbar.Brand>
                        <Navbar.Brand id="aboutUs" href="/home">Home</Navbar.Brand>
                        <Navbar.Brand id="aboutUs" href="/jobListings">Job Listings</Navbar.Brand>
                        <Navbar.Brand id="aboutUs" href="/postAjob">Post a job</Navbar.Brand>

                        <Navbar.Brand id="aboutUs" href="/aboutus">About Us</Navbar.Brand>
                        <Navbar.Brand id="graph" href="">Graph</Navbar.Brand>
                        {/* <Navbar.Brand id="contact" href="#home">Contact</Navbar.Brand> */}
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* ============= btns ============== */}
                    <div className="btns">
                        <Navbar.Collapse id="basic-navbar-nav">

                            <Nav className="me-auto">
                                <Nav.Link href="/signup">
                                    <input type="button" value="Signup" class="btn1" />
                                </Nav.Link>
                                <Nav.Link href="/login">
                                    <input type="button" value="Login" class="btn1" />
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </div>

                </div>
                {/* </Container> */}
            </Navbar>
            <Carousel data-bs-theme="dark" id="crousel">
                <Carousel.Item>
                    <img
                        className="crousel"
                        src={Crouselpic}
                        alt="First slide"
                    />
                    <Carousel.Caption id="skills">
                        <h3>Showcase Your Skills -  
                            <br></br>Find Jobs that Align with Your Expertise.</h3>
                        <br></br>
                        <br></br>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="crousel"
                        src={CrouselPic2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <div>
                            <h3>Jobs Near You -
                                <br></br><b>Discover Opportunities in Your City.</b></h3>
                            <br></br>
                            {/* <br></br> */}
                            {/* <br></br> */}

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="crousel" src={CrouselPic3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <div id="skills2">
                            <h3><b>
                                <br></br>
                                Skill-Centric Roles -     <br></br>
                                Find Jobs Tailored to<br></br>
                                Your Unique Abilities
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br>
                                <br></br><br></br><br></br>
                                <br></br><br></br><br></br>

                            </b></h3>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            {/* ===================== CARDS =================================== */}
            <div className="conatiner">
                <div id="card">
                    <Card id="rcard" style={{ width: '20rem', height: '25rem', backgroundColor: "#f0f5f5" }}>
                        <Card.Img style={{ width: 'inherit', height: '12rem', padding: "10px 10px 10px 10px" }} variant="top" src={card1} />
                        <Card.Body>
                            <Card.Title>Important Note</Card.Title>
                            <Card.Text>
                                By accessing and using website [StintPurveyor.com],
                                user is solely responsible
                                for actions and any consequences that may arise.
                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div id="card">
                    <Card id="rcard" style={{ width: '20rem', height: '25rem', backgroundColor: "#f0f5f5" }}>
                        <Card.Img style={{ width: 'inherit', height: '12rem', padding: "10px 10px 10px 10px" }} variant="top" src={card2} />
                        <Card.Body>
                            <Card.Title>About SP</Card.Title>
                            <Card.Text>
                                Explore a diverse range of job listings tailored to your expertise.<br></br><br></br>
                                Employers can seamlessly post job openings and connect with top talent.
                                {/* ✨ Personalized job recommendations for job seekers and advanced recruitment tools for employers. */}

                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>
                <div id="card">
                    <Card id="rcard" style={{ width: '20rem', height: '25rem', backgroundColor: "#f0f5f5" }}>
                        <Card.Img style={{ width: 'inherit', height: '12rem', padding: "10px 10px 10px 10px" }} variant="top" src={card3} />
                        <Card.Body>
                            <Card.Title></Card.Title>
                            <Card.Text>
                                As a non-profit organization, we
                                are dedicated to connecting individuals
                                with impactful opportunities while supporting
                                causes that matter. Join us in making
                                a difference through your skills and passions.

                            </Card.Text>
                            {/* <Button variant="primary">Go somewhere</Button> */}
                        </Card.Body>
                    </Card>
                </div>

            </div>

        </>
    )
}
export default Navb;                    