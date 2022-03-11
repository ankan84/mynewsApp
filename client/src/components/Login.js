import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history=useHistory();


    const checkUser=()=>{
        axios.post('/admin/signin',{
            email,password
        }).then((response)=>{
           if(response.status===200){
              
               history.push("/admin_home");
           }
        }).catch(()=>{
            alert('invalid user!')
            history.push("/admin/signin");
        })
    }

    return (<>
       <Navbar></Navbar>
        <div className="container my-5">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">@</span>
                <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" onChange={(event) => {
                    setEmail(event.target.value)
                }} />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">P</span>
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1" onChange={(event) => {
                    setPassword(event.target.value);
                }} />
            </div>

            <button type="button" className="btn btn-success" onClick={()=>{
                checkUser();
            }}>Submit</button>

        </div>
    </>
    )
}
