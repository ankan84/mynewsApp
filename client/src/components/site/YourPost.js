import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
import { Card_2,Card_8,Card_4 } from '../style/Contain';
import axios from 'axios';
import Navbar from '../Navbar';
import Loader from '../style/Loader';
export default function YourPost() {
   const [data,setData]=useState();
   const history=useHistory();
    useEffect(() => {
        axios.get('/admin_home').then((response) => {
            if (response.status === 200) {
                history.push('/admin-allpost');
            } else {
                history.push('/');
            }
        }).catch(() => {
            history.push('/');
        })
    }, [])

    useEffect(()=>{
        axios.get('/admin-allpost').then((response) => {
           setData(response.data);
        
        }).catch(() => {
            alert('Error! reload the page')
        })
    },[])
  return (<>
  <Navbar></Navbar>
    <section className="container-fluid">
      
    {data?(
    <div className="row">
  

      {
        data.map((ele,index)=>{
            return(
                <Card_2 apiData={ele.articles} ></Card_2>
              );
        })
      }


    </div>
    ):( <>
      <Loader></Loader>
       
     </>)


    }
   
  </section>
  </>
  )
    
}  
