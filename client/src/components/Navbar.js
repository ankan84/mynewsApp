import React,{useEffect,useState} from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function Navbar() {

  const [data,setData]=useState();
  const [exits,setExits]=useState();
  const param=useParams()
  const history=useHistory();
  let arr=["nav-link","disable"];
  useEffect(()=>{
      axios.post('/source').then((response)=>{
      
        setData(response.data);
      }).catch(()=>{
        console.log("error");
      })
  },[param]);
  useEffect(()=>{
    axios.get('/admin_home').then((response) => {
      if (response.status === 200) {
         setExits(200);
      } else {
          setExits(400);
      }
  }).catch(() => {
    
  })
  },[])
  return <>
    
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary container-fluid" style={{minWidth:"18rem"}}>
  <div className="container-fluid">
    <a className="navbar-brand">Times Of World</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active" to="/top-headline">Headline</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Source
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
           {
             data?(<>
             {
              data.map((ele,index)=>{
                  return(<li key={index}><NavLink className="dropdown-item" to={`/source/${ele}`} >{ele}</NavLink></li>)
              })
             }
              
              
             </>):(<></>)
           }
            
            
          </ul>
        </li>
        {   exits==200?

          (<>
        <li className="nav-item">
          <NavLink to="/admin_home" className="nav-link  active"  >Create Post</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/admin-allpost" className="nav-link  active"  >Your Post</NavLink>
        </li>
         </>):(<></>)
        }
      </ul>

      {
         exits!=200?
        (
      <form className="d-flex ">
      <NavLink to="/admin/signup" className="btn btn-outline-success btn-light me-2" type="button">Register</NavLink>
      <NavLink to="/admin/signin" className="btn btn-outline-success btn-light " type="button">Login</NavLink>
        
      </form>
      ):(<>
        <NavLink to="/" className="btn btn-outline-danger btn-light " type="button" onClick={()=>{
          axios.post('/top-headline',{}).then((response)=>{
     
          if(response.status===200){
            history.push('/');
          }
}).catch(()=>{
   history.push('/');
})
        }}>Logout</NavLink>
      </>)
      }
    </div>
  </div>
</nav>

{/* ------------- */}

  </>;
}
