import React, { useState,useEffect } from 'react';
import axios from "axios";

function Extra() {

    useEffect(()=>{
        // alert("***");
        var token=localStorage.getItem("kuchToken");
        if (token!=null)
        {
            alert(token);
        }
        else{
            alert("token expired");
        }
    },[])

    const [text, setText] = useState({ kuchText: "" });
    function dotext(event) {
        var { name, value } = event.target;
        // alert(name);
        // alert(value);
        setText({ [name]: value });
        // alert(JSON.stringify(text));
    }

    const doExtra = async () => {
        alert(JSON.stringify(text));
        var url = "http://localhost:3003/user/doextra";
        var resp = await axios.post(url, text);
        alert(JSON.stringify(resp));
        // alert(JSON.stringify(resp.data.token));

        localStorage.setItem("kuchToken", resp.data.token);

        var kuchData = localStorage.getItem("kuchToken");
        alert(kuchData);


    }

    return (
        <>
            <h1>11111</h1>
            <input type="text" name="kuchText" onChange={dotext} />
            {" "}

            <input type="button" value="Extra" class="btn btn-primary" onClick={doExtra} />



        </>
    )
}
export default Extra;
