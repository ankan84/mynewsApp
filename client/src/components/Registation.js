import React, { useState,useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
export default function Login() {
    const [name,setName]=useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const history=useHistory();


   
    return (<>
       <Navbar></Navbar>

        <div className="container my-5">
         
        <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">N</span>
                <input type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" onChange={(event) => {
                    setName(event.target.value);
                }} />
            </div>
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
                axios.post('/admin/signup',{
                    name,email,password
                }).then((response)=>{
                    if(response.status===200){
                        alert('Success Login now')
                        history.push("/");    
                    }else{
                        alert('Error')
                        history.push("/admin/signup");
                    }
                }).catch(()=>{
                    alert('Error')
                    history.push('/admin/signup');
                })
            }}>Submit</button>

        </div>
    </>
    )
}
