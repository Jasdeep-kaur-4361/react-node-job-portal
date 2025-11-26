import "bootstrap/dist/css/bootstrap.min.css";
import './Profile_client.css';
import React from 'react';
import { useState, useEffect } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function Profile_client() {

  const [previewUrl, setPreviewUrl] = useState("");
  const [previewUrl2, setPreviewUrl2] = useState("");

  // Save and Update Button 
  const [saveBtn, setSavebtn] = useState(true);
  const [updateBtn, setUpdatebtn] = useState(false);


  var extractEmail = localStorage.getItem('active_user');
  const [obj, doUpdate] = useState({ email: extractEmail, name: "", mobile: "", address: "", city: "", profilepic: null, idproof: null });

  useEffect(() => {

    doFetch();

  }, [])

  const updateobj = (event) => {
    var { name, value } = event.target;
    doUpdate({ ...obj, [name]: value });

  }
  function updateProfilePic(event) {
    // alert(JSON.stringify(event));//errr
    alert(event);
    const file = event.target.files[0];

    if (file) {
      doUpdate({ ...obj, ["profilepic"]: file });

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result);

      };
      reader.readAsDataURL(file);

    }
    else {
      doUpdate({ ...obj, ["profilepic"]: null });
      setPreviewUrl("");

    }

  }
  function updateIdProof(event) {
    // alert(JSON.stringify(event));
    alert(event);
    // doUpdate({ ...obj, ["idproof"]: event.target.files[0] });

    const file = event.target.files[0];

    if (file) {
      doUpdate({ ...obj, ["idproof"]: file });

      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl2(reader.result);

      };
      reader.readAsDataURL(file);

    }
    else {
      doUpdate({ ...obj, ["idproof"]: null });
      setPreviewUrl2("");

    }
  }
  
  async function doSaveWithPic() {
    var url = "http://localhost:3003/user/profile-form-with-pic";
    var formData = new FormData();
    for (var x in obj) {
      formData.append(x, obj[x]);
    }
    var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));

  }

  async function profileUpdate() {
    var url = "http://localhost:3003/user/profile-form-updation";

    const postData = {
      email: obj.email,
      name: obj.name,
      mobile: obj.mobile,
      address: obj.address,
      city: obj.city,
      profilepic: obj.profilepic,
      idproof: obj.idproof,
    };
    alert(JSON.stringify(postData));

    var formData = new FormData();
    for (var x in postData) {

      formData.append(x, postData[x]);
      // alert(postData[x]);
      // if (postData[x]==null)
      // {
      //   alert("khaliii");
      // }

    }
    const response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });
    alert(JSON.stringify(response.data));

  }

  async function doFetch() {
    var url = "http://localhost:3003/user/profile-form-fetch";
    var mydata = { email: obj.email };
    var response = await axios.post(url, mydata);

    // alert("Fetched Data =>                 "+JSON.stringify(response.data));
    const newData = {
      name: response.data.name, mobile: response.data.mobile,
      address: response.data.address, city: response.data.city,
      profilepic: response.data.profilepic, idproof: response.data.idproof,
    };

    // Update the obj state with the new data
    doUpdate(prevState => ({

      ...prevState, ...newData
      // ...obj, ...newData 

    }));
    if (response.data == null) {
      alert("profile does not exist !!");
      setSavebtn(true);
      setUpdatebtn(false);

    }
    else{
      setSavebtn(false);
      setUpdatebtn(true);
    }
    if (response.data.picpath) {
      const imageUrl = `http://localhost:3003/uploads/${response.data.picpath}`;
      setPreviewUrl(imageUrl);
      // alert(imageUrl);

    }
    if (response.data.idpath) {
      const imageUrl = `http://localhost:3003/uploads/${response.data.idpath}`;
      setPreviewUrl2(imageUrl);
      // alert(imageUrl);
      // alert(response.data.idpath);


    }
    else {
      alert("Fill profile form");
    }

  }

  return (
    <Form>
      <br></br>
      <center>
        <div className="heading">
          <h1>Profile Form</h1>
        </div>
      </center>
      <InputGroup className="mb-3">
        <InputGroup.Text >Email</InputGroup.Text>
        <Form.Control name="email" value={obj.email} readOnly onChange={updateobj} />
        <input type="button" value="Fetch" name="fetch" class="btn btn-secondary" onClick={doFetch} />

      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text >Name</InputGroup.Text>
        <Form.Control name="name" value={obj.name} onChange={updateobj} />
        <InputGroup.Text >Mobile</InputGroup.Text>
        <Form.Control name="mobile" value={obj.mobile} onChange={updateobj} />
      </InputGroup>

      <InputGroup className="mb-3">
        <InputGroup.Text >Address</InputGroup.Text>
        <Form.Control name="address" value={obj.address} onChange={updateobj} />

        <Form.Select name="city" value={obj.city} onChange={updateobj}>
          <option>Select City</option>
          <option value="Bathinda">Bathinda</option>
          <option value="Chandigarh">Chandigarh</option>
          <option value="Jalandhar">Jalandhar</option>
        </Form.Select>
      </InputGroup>


      {/*                profile pic                */}


      <InputGroup className="mb-3">
        <InputGroup.Text className="labelProfile">profile pic</InputGroup.Text>
        <input type="file" className="chooseProfile" onChange={updateProfilePic} accept="image/*" />
        {/* <img id="imagePreview" src="#" alt="Image Preview" ></img> */}
        {/* {obj.profilepic} */}

        {previewUrl && (
          <div className="preview-box" >
            {/* <p>Selected File: {JSON.stringify(obj.profilepic)}</p> */}
            <img className="imagekuch"
              id="profileImage"
              src={previewUrl}
              alt="No profile pic"
              style={{ width: '100px', height: '100px' }}
            />
            {/* <img src={src1} alt="No Profile-Pic Uploaded yet" style={{width:'20%',height:'10%'}}/> */}
          </div>
        )}
        {/* <br></br> */}
      </InputGroup>

      <InputGroup className="mb-3">

        <InputGroup.Text>Id proof</InputGroup.Text>{"  "}
        <input type="file" onChange={updateIdProof} id="profilephoto" accept="image/*" />
        {previewUrl2 && (
          <div className="preview-box">
            <img className="imagekuch"
              id="profileImage"
              src={previewUrl2}
              alt="No pic uploaded"
              style={{ width: '100px', height: '100px' }}

            />
          </div>
        )}
      </InputGroup><br></br>
      <center>
        {saveBtn && (
          <input type="button" value="SAVE" class="btn btn-secondary" onClick={doSaveWithPic} />
        )}
        {" "}
        {updateBtn && (
          <input type="button" value="UPDATE" class="btn btn-secondary" onClick={profileUpdate} />
        )}
        {' '}
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}


      </center>
    </Form>
  );
}

export default Profile_client;