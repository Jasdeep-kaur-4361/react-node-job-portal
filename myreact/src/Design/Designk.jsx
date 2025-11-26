import React, { useState } from 'react'
// import Nav from '../Mainpage/Nav';
import Signup from '../Mainpage/Signup';
import Nav from '../App';
import Profile from '../Profile/Profile_client';


function Design() {
    const [NavShow,updateNav]=useState(true);

    return (
        <>
            {NavShow && <Nav></Nav>}
            
           

        </>
    )
}

export default Design;

