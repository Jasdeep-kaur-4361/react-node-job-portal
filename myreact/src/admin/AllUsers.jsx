import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { useEffect, useState } from 'react';

function AllUsers() {
    const [users, setUsers] = useState([]);

    async function doFetchAllUsers() {
        var url = "http://localhost:3003/user/admin-all-users";

        var response = await axios.post(url);
        // alert(JSON.stringify(response.data));
        setUsers(response.data);
        // alert("fv6ytjh" + JSON.stringify(users));

    }
    return (
        <>
            <center>
                <h1>
                    All Users
                </h1>
                <input type='button' onClick={doFetchAllUsers} value="fecthUsers"></input>
                <p>
                    <b>
                        {/* Welcome: {email} */}
                    </b>
                </p>
                <center><h1>Service-Provider Info</h1></center>
                <br /><br /><br />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr.No</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>UserType</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <td>{index + 1}</td>
                                <td>{user._id}</td>
                                <td>{user.email}</td>
                                <td>{user.userType}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </center>
        </>
    );
}

export default AllUsers;