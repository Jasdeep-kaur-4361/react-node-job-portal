import axios from 'axios';

let baseURL="http://localhost:3003";

const publicReq=axios.create({baseURL,});
const privateReq=axios.create({baseURL,});

privateReq.interceptors.request.use((config)=>{
    const token=localStorage.getItem("access_token");
    console.log("/*-+/*-+");
    if (token)
    {
        config.headers.Authorization='Bearer ${token}';
    }
    return config;
})


export {publicReq,privateReq};


