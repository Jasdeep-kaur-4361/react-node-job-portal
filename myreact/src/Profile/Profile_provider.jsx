import { useState, useEffect } from 'react';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";

function ProviderProfile() {

    const extractEmail = localStorage.getItem("active_user");

    useEffect(() => {
        // alert(extractEmail);
        doFetch();
        localStorage.clear("active_user");
        localStorage.clear("token");
        // setUpload(true);
        // if (upload == false) {
        //     setModify(true);
        // }
        // else {
        //     setModify(false);
        // }
    }, [])

    const [obj, updateObj] = useState({
        email: extractEmail, name: "", contact: "",
        address: "", city: "", idproof: "",
        category: "", expertin: "", experience: "",
        workaddress: "", otherInfo: ""
    });
    const [previewUrl2, setPreviewUrl2] = useState("");
    const [upload, setUpload] = useState(true);
    const [modify, setModify] = useState(false);


    var callUpdateObj = (e) => {
        // alert("6724/815");
        var { name, value } = e.target;
        // alert(name + "---" + value);
        updateObj({ ...obj, [name]: value });

    }

    async function doFetch() {
        var url = "http://localhost:3003/user/profile-form-provider-fetch";
        // return;
        var mydata = { email: obj.email };
        var response = await axios.post(url, mydata);
        alert("Fetched Data =>                 " + JSON.stringify(response.data));
        const newData = {
            name: response.data.name, mobile: response.data.mobile,
            address: response.data.address, city: response.data.city,
            idproof: response.data.idproof, category: response.data.category,
            expertin: response.data.expertin, experience: response.data.experience,
            workaddress: response.data.workaddress, otherInfo: response.data.otherInfo
        };
        // alert("idpath     "+obj.idproof);
        // Update the obj state with the new data
        updateObj(prevState => ({
            ...prevState, ...newData
            // ...obj, ...newData 
        }));
        if (response.data == null) {
            alert("profile does not exist !!");
            setUpload(true);
            setModify(false);
        }
        else {
            setUpload(false);
            setModify(true);
        }
        if (response.data.idpath) {
            const imageUrl = `http://localhost:3003/uploads/${response.data.idpath}`;
            alert(imageUrl);
            setPreviewUrl2(imageUrl);
            // alert(imageUrl);
        }
        else {
            alert("no pic");
        }
    }

    async function doModify() {
        alert("WWWWWW");

        var url = "http://localhost:3003/user/provider-profile";

        var formdata = new FormData();
        for (var x in obj) {
            formdata.append(x, obj[x]);
        }
        const response = await axios.post(url, formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
        alert(JSON.stringify(response.data));
    }
    function doUpdateIDproof(e) {
        alert(e);
        const file = e.target.files[0];
        if (file) {
            updateObj({ ...obj, ["idproof"]: file });
            const reader = new FileReader();
            reader.onload = () => {
                setPreviewUrl2(reader.result);
            };
            reader.readAsDataURL(file);
        }
        else {
            updateObj({ ...obj, ["idproof"]: null });
            setPreviewUrl2("");
        }
    }
    async function doUpload() {
        alert();
        // updateObj();
        var url = "http://localhost:3003/user/profile-provider-form-with-pic";
        var formData = new FormData();
        for (var x in obj) {
            formData.append(x, obj[x]);
            // alert(x);
        }
        var response = await axios.post(url, formData, { headers: { 'Content-Type': 'multipart/form-data' } });

        alert(JSON.stringify(response.data));
        setUpload(false);
        setModify(true);

    }

    return (
        <>
            
            <center><h1><b><i>Provider Profile</i></b></h1> </center>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='email'
                    // readOnly
                    value={obj.email}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='name'
                    value={obj.name}

                />
                <InputGroup.Text id="basic-addon1">Contact No.</InputGroup.Text>
                <Form.Control
                    placeholder="Contact"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='contact'
                    value={obj.contact}

                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='address'
                    value={obj.address}

                />
                <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    onChange={callUpdateObj}
                    name='city'
                    value={obj.city}

                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">ID Proof</InputGroup.Text>
                {/* <input type='file' onChange={doUpdateIDproof} name='idproof' ></input> */}

                <input type="file" onChange={doUpdateIDproof} accept="image/*" />
                {previewUrl2 && (
                    <div className="preview-box">
                        <img className="imagekuch"
                            id="idproof"
                            src={previewUrl2}
                            alt="No pic uploaded"
                            style={{ width: '100px', height: '100px' }}

                        />
                    </div>
                )}
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                <Form.Select onChange={callUpdateObj} value={obj.category} name='category' >
                    <option>Select </option>
                    <option value="Plumber">Plumber</option>
                    <option value="Cleaner">Cleaner</option>
                    <option value="Gardener">Gardener</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Electrician">Electrician</option>

                </Form.Select>
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Expert In</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='expertin'
                    value={obj.expertin}

                />
                <InputGroup.Text id="basic-addon1">Experience</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    onChange={callUpdateObj}
                    name='experience'
                    value={obj.experience}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Shop/Office Address</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={callUpdateObj}
                    name='workaddress'
                    value={obj.workaddress}
                />

            </InputGroup>
            <br></br>

            <h6>Other Information</h6>
            <Form.Control as="textarea" aria-label="With textarea" onChange={callUpdateObj} name='otherInfo' value={obj.otherInfo} />
            <br></br>
            <br></br>

            {/* -----------Buttons---------------- */}


            <center>
                {upload && (
                    <input type="submit" value="UPLOAD DATA" class="btn btn-secondary" onClick={doUpload} />
                )}
                {" "}
                {modify && (
                    <input type="button" value="MODIFY" class="btn btn-secondary" onClick={doModify} />

                )}

            </center>



        </>
    );
}

export default ProviderProfile;