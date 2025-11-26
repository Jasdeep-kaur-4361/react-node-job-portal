import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import '../style/modal.css';
import Modal from 'react-bootstrap/Modal';
import { Container, Row, Col, Card } from 'react-bootstrap';

function ViewProfileClient() {
    let { email } = useParams();
    const [emailData, setemailData] = useState([]);

    useEffect(() => {
        // console.log('Em:', email);
        // alert(email);
        getRecord();
    }, [email]);

    const getRecord = async () => {
        try {
            var url = "http://localhost:3003/user/search-email-data";

            var response = await axios.post(url, { "email": email });
            // alert(JSON.stringify(response.data));
            // alert("yooooooo");
            setemailData(response.data);
            // alert("*-+*-+" + JSON.stringify(emailData));
        } catch (error) {
            console.error("Error fetching servant record:", error);
        }
    };

    return (
        <>
            <center>
                {/* <Button onClick={getRecord}>kkkk</Button> */}
                {/* <br></br><br></br> */}
                <div id='outerbox'>
                    <Table className="table-no-border subtle-rounded-table" id='table' style={{ width: "1200px", height: "" }}>
                        <tbody>
                            {emailData.map((user, index) => (
                                <tr key={user._id}>
                                    <center>
                                        <tr>
                                            <img id='idpath' src={`http://localhost:3003/uploads/${user.idpath}`}
                                                alt="Not Uploaded"
                                                style={{ width: "150px", height: "auto" }}></img>
                                        </tr>
                                        <tr id="name">
                                            {user.name}
                                        </tr>
                                    </center>
                                    <div>
                                        <tr id='size'><b>Email : </b> {user.email}</tr>
                                        <tr id='size'>
                                            <b>Mobile : </b> {user.contact}
                                        </tr>
                                        <tr id='size'>
                                            <b>City : </b>{user.city}
                                        </tr>
                                        <tr id='size'>
                                            <b>Address : </b> {user.address}
                                        </tr>
                                        <tr id='size'>
                                            <b>Expert In : </b> {user.expertin}
                                        </tr>
                                        <tr id='size'>
                                            <b>Experience : </b> {user.experince}
                                        </tr>
                                        <tr id='size'>
                                            <b>Expert In: </b>{user.expertin}
                                        </tr>
                                        <tr id='size'>
                                            <b>Worked at : </b> {user.workaddress}
                                        </tr>
                                        <tr id='size'>
                                            <b>Other Information : </b> {user.otherInfo}
                                        </tr>
                                    </div>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            </center>

        </>
    );
}

export default ViewProfileClient;
