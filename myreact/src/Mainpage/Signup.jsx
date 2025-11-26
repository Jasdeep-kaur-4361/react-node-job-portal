import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link, Route, Routes } from 'react-router-dom';
import axios from "axios";
import Index from "./indexpage";
// import { signupService } from "../services/user";



function Signup() {

  // const [showIndex, setshowIndex] = useState(false);

  const [details, setDetails] = useState({ email: "", password: "", userType: "" });

  const doUpdate = (event) => {
    var { name, value } = event.target;
    setDetails({ ...details, [name]: value });
    // const detailsArray = Object.entries(details);
    // console.log(detailsArray);


  }
  function callTwo() {
    doChkdata();
    doSaveData();
  }
  const doChkdata = async () => {
    alert();
    var url = "http://localhost:3003/user/chkData-with-post";
    var formData = new FormData();
    for (var x in details) {
      formData.append(x, details[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    if (response != null) {
      alert(JSON.stringify(response.data.message));

    }
  }
  const doSaveData = async () => {
    // alert(JSON.stringify(details));
    // const resp=await signupService(details);

    // alert(resp.data.message);

    var url = "http://localhost:3003/user/signup-process-with-post";
    var formData = new FormData();
    for (var x in details) {
      formData.append(x, details[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data.message));
    // setshowIndex(true);
  }


  return (
    <>
      {/* <Form method="post" action="http://localhost:3003/user/signup-process-with-post"> */}
      <Form>
        <center>
          <br></br>
          <h1>Signup page</h1>
          <br></br>

        </center>

        <center>
          <div style={{
            width: '600px', height: '500px',
            borderRadius: "5%", boxShadow: "0px 0px 10px gray"
          }} >
            <br></br><br></br>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div style={{ textAlign: 'left', paddingLeft: '99px', fontSize: "25px" }}><b>Email address</b></div>
              <Form.Control style={{ width: '400px' }} id="signEmail" type="email" name="email" onChange={doUpdate} placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div style={{ textAlign: 'left', paddingLeft: '99px', fontSize: "25px" }}><b>Password</b></div>
              <Form.Control style={{ width: '400px' }} type="password" name="password" onChange={doUpdate} placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}<br></br>
            <p>
              <div style={{ textAlign: 'left', paddingLeft: '99px', fontSize: "25px" }}>
                <b>UserType</b>
              </div>
              <Form.Select aria-label="Default select example" style={{ width: '400px' }} name="userType" onChange={doUpdate}>
                <option>Open this select menu</option>
                <option value="Client">Client</option>
                <option value="Service provider">Service provider</option>
              </Form.Select>

            </p>
            <br></br>
            <br></br>

            <center>
              <input type="button" value="Signup" class="btn btn-secondary" onClick={callTwo} />
            </center>
          </div>
        </center>
        <br></br>



      </Form>
      {/* {showIndex && <Index />} */}
    </>
  );
}

export default Signup;