import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { useEffect, useState } from 'react';

function AllClients() {

  const [client, setClients] = useState([]);

  async function doFetchAllClients() {
    var url = "http://localhost:3003/user/admin-all-clients";

    var response = await axios.post(url);
    alert(JSON.stringify(response.data));
    setClients(response.data);
  }
  async function doBlock() {
    alert("block");
    var url = "http://localhost:3003/user/admin-all-clients-block";

    var response = await axios.post(url);
    alert(JSON.stringify(response.data));
  }
  async function doResume() {
    alert("resume");
  }
  return (
    <>
      <h1>
        Clients
      </h1>
      <input type='button' onClick={doFetchAllClients} value="fecthClients"></input>
      <br /><br /><br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr.No</th>
            {/* <th>ID</th> */}
            <th>Email</th>
            <th>Name</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Proof Pic</th>
            <th>Idproof</th>


          </tr>
        </thead>
        <tbody>
          {client.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              {/* <td>{user._id}</td> */}
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.mobile}</td>
              <td>{user.address}</td>
              <td style={{ width: "6%" }}>
                <img src={`http://localhost:3003/uploads/${user.picpath}`} alt="Not Uploaded Yet" style={{ width: "100%", height: "auto" }} />
              </td>
              <td style={{ width: "6%" }}>
                <img src={`http://localhost:3003/uploads/${user.idpath}`} alt="Not Uploaded Yet" style={{ width: "100%", height: "auto" }} />
              </td>
              <th>
                <input type='button' onClick={doBlock} value="Block"></input>
                <input type='button' onClick={doResume} value="Resume"></input>


              </th>
            </tr>
          ))}
        </tbody>
      </Table>

    </>
  );
}

export default AllClients;