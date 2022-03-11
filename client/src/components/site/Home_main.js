import React, { useState } from 'react'
import { useEffect } from 'react';
import { Card_8,Card_2,Card_4 } from '../style/Contain';
import axios from 'axios';
import Navbar from '../Navbar';
import Loader from '../style/Loader';

export default function Home_main() {
    const[apidata,setApiData]=useState();

    useEffect(()=>{
        axios.post('/').then((response)=>{
                setApiData(response.data);
               
                
        }).catch(()=>{
            console.log("error");
        })
    },[])
  return (
    <><Navbar></Navbar>
    <section className="container-fluid">
      
      {apidata?(
      <div className="row">
    
        <Card_8 apiData={apidata.articles[0]}></Card_8>
        <Card_4 apiData={apidata.articles[1]}></Card_4>
        {
          apidata.articles.map((ele,index)=>{
              return(
                <>{
                  index>1?(
                
                <Card_2 key={index} apiData={ele}></Card_2>
                  ):(<></>)
                }
                </>
                );
          })
        }


      </div>
      ):(<Loader></Loader>)
      }
    
    </section>
    </>
  )
}
