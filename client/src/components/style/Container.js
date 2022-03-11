import React,{useEffect,useState} from 'react';
import {Card_8,Card_4,Card_2,Card_6} from './Contain.js';
import axios from 'axios';
import Navbar from '../Navbar.js';
import Loader from './Loader.js';
export default function Container() {
 const[apidata,setData]=useState();

 
  useEffect(()=>{
    axios.post('/top-headline').then((response)=>{
      setData(response.data);

    }).catch(()=>{
      console.log("error");
    })
  
  },[])

  return <>
   {/* top-headings */}
   <Navbar></Navbar>
  
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
      ):(<Loader>somthings error</Loader>)
      }
    
    </section>
    


  </>;
}