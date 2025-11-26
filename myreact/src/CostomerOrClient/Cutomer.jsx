import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';

function Customer() {

    const [obj, updateObj] = useState({
        email: "", category: "",
        taskDetails: "", uptodate: "",
        location: "", mobile: ""
    })

    var callUpdateObj = (e) => {
        // alert("6724/815");
        var { name, value } = e.target;
        // alert(name + "---" + value);
        updateObj({ ...obj, [name]: value });
        // alert(name);
        // alert(value);

    }
    async function postReq() {
        var url = "http://localhost:3003/user/post-req";
        var formData = new FormData();
        for (var x in obj) {
            formData.append(x, obj[x]);
        }
        var response = await axios.post(url, formData);
        alert(JSON.stringify(response.data.message));

    }
    return (
        <>
            <InputGroup className="mb-3">
                {/* No primary key */}
                <InputGroup.Text id="basic-addon1">Email</InputGroup.Text>
                <Form.Control
                    placeholder="Userid"
                    aria-label="Username"
                    onChange={callUpdateObj}
                    aria-describedby="basic-addon1"
                    name="email"
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Category</InputGroup.Text>
                <Form.Select onChange={callUpdateObj} value={obj.category} name='category' >
                    <option>Select </option>
                    <option value="one">one</option>
                    <option value="two">two</option>
                    <option value="three">three</option>
                </Form.Select>
                <InputGroup.Text id="basic-addon1">Task Details</InputGroup.Text>

                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="taskDetails"
                    onChange={callUpdateObj}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Up to date</InputGroup.Text>
                <input type='date' placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='uptodate'
                    onChange={callUpdateObj} />
                <InputGroup.Text id="basic-addon1">Location/Site</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name="location"
                    onChange={callUpdateObj}
                />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">Mobile</InputGroup.Text>
                <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    name='mobile'
                    onChange={callUpdateObj}
                />

            </InputGroup>
            <center>
                <input type="submit" value="Post Request" onClick={postReq} class="btn btn-secondary" />

            </center>
        </>
    );
}

export default Customer;