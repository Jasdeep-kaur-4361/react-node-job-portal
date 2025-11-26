import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Nav from '../App';

import axios from "axios";
// import ProfileClient from "../Profile/Profileclient";****
import ProfileClient from "../Profile/Profile_client";


import CDash from '../Mainpage/Client';
import PDash from '../Mainpage/Provider';
// import { currentUser } from "../../../node/Controllers/Controllers";

// import "react-router-dom";



function Login() {

  const navigate = useNavigate();
  const [obj, setDetails] = useState({ emailLog: "", passwordLog: "" });
  const [profile, profileShow] = useState(false);

  // const [loginButtonDisabled, setLoginButtonDisabled] = useState(false);
  // useEffect(() => {
  //   // Check if the token is present in localStorage
  //   alert("^^^")
  //   const token = localStorage.getItem('token');
  //   alert(token); 
  //   if (token) {
  //     // If token is present, set the login button disabled
  //     setLoginButtonDisabled(true);
  //     return;
  //   }
  // }, []);

  // const [login,loginShow]=useState(true);  

  const Updation = (event) => {
    var { name, value } = event.target;
    setDetails({ ...obj, [name]: value });
    // alert(name);
    // alert(value);

  }

  const doChk = async () => {

    var url = "http://localhost:3003/user/login-process";
    var mydata = { emailLog: obj.emailLog, passwordLog: obj.passwordLog };

    var response = await axios.post(url, mydata);
    alert(JSON.stringify(response.data));

    if (response.data.status === true) {
      // alert("trueeeeee");
      alert(response.data.message);

      localStorage.setItem("active_user", response.data.user.email);
      // alert(response.data.user.email);            //okkkkayy
      localStorage.setItem("token", response.data.token);


      if (response.data.user.userType === "Client")
        navigate("/clientDash");
      else
        navigate("/providerDash");


    }
    else {
      alert("false status ...");
      alert(response.data.message);
    }
    // alert(JSON.stringify(response.data));
    // if (response.data == "Logged in") {
    //   profileShow(true);
    //   // loginShow(false);
    // }
    // else {
    //   profileShow(false);
    // }
  }
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios.get("http://localhost:3003/user/loginMiddleWare", {
      headers: {
        'Authorization': token,
      }
    }).then(resp => {
      if (resp.data.status) {
        // alert(JSON.stringify(resp.data));

        // alert("Logged In as "+resp.data.rep.userType);  
        // alert(resp.data.message);  

        // localStorage.setItem("active_user", resp.data.rep.email);
        if (resp.data.rep.userType === "Client")
          navigate("/clientDash");
        else
          navigate("/providerDash");

      } else {
        localStorage.clear("active_user");
        localStorage.clear("token");

        alert("You are not Logged In...");
      }
    })
      .catch(error => {
        console.error(error);
      });

  }, []);

  return (
    <>
      {/* <Form method="post" action="http://localhost:3003/user/login-process"> */}
      <Form>

        {/* {profile && <ProfileClient />} */}
        {/* {loginShow && <Login/>} */}

        <center>
          <br></br>
          <h1>Login page</h1>
          <br></br>
        </center>
        <center>
          <div style={{
            width: '500px', height: '500px',
            borderRadius: "5%", boxShadow: "0px 0px 10px gray"
          }} >
            <br></br> <br></br>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div style={{textAlign:'left',paddingLeft:'52px',fontSize:"25px"}}><b>Email address</b></div>
              <Form.Control style={{ width: '400px' }} type="email" name="emailLog" onChange={Updation} placeholder="Enter email" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>
            <br></br>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <div style={{textAlign:'left',paddingLeft:'52px',fontSize:"25px"}}><b>Password</b></div>
              <Form.Control style={{ width: '400px' }} type="password" name="passwordLog" onChange={Updation} placeholder="Password" />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <br></br>
      <br></br>
            <center>
              <Button variant="secondary" onClick={doChk}>Login</Button>
            </center>
          </div>
        </center>
      </Form>

    </>
  );
}

export default Login;