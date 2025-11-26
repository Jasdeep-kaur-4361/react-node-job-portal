import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { useEffect,useState } from 'react';

function AllProvider() {

    async function doFetchAllProvider() {
        var url = "http://localhost:3003/user/admin-all-provider";

        var response = await axios.post(url);
        alert(JSON.stringify(response));
        var fetchedArray = [{email:"" ,pwd:"",userType:""}];

        response.data.map((kuch) => {
            // alert(JSON.stringify(kuch.email));
            fetchedArray.push(JSON.stringify(kuch));

            // updateObj(obj => ({
            //     ...obj, email: kuch.email,
            //     // password: kuch.password,
            //     // userType: kuch.userType

            // }));

        })
        // alert("fetched Arry " + fetchedArray);
        // alert("obj "+JSON.stringify(obj));
        // console.log(obj);
        // alert(JSON.stringify(obj));

    }
  return (
    <>
    <h1>
       Clients
    </h1>
   <input type='button' onClick={doFetchAllProvider} value="fecthClients"></input></>
  );
}

export default AllProvider;