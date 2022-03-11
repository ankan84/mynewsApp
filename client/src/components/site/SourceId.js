import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Card_2, Card_8, Card_4 } from '../style/Contain'
import Navbar from '../Navbar';
import Loader from '../style/Loader';


function SourceId() {
  const param = useParams();
  const [data, setData] = useState();

  useEffect(() => {
    axios.post(`/source/${param.id}`).then((response) => {
      setData(response.data);
      
    }).catch(() => {
      console.log("error")
    })
  }, [param])
  return (
    <>
    <Navbar></Navbar>
    <section className="container-fluid">
      
      { data?(
        
        <div className="row">

         { 
           
            data.articles[0] != null ? (
              <Card_8 apiData={data.articles[0]}></Card_8>
            ) : (<></>)
          }
          {
            data.articles[1]!= null? (
              <Card_4 apiData={data.articles[1]}></Card_4>
            ) : (<></>)


          }
          {
            data.articles.map((ele, index) => {
              return(
              index > 1 ? (
               
                <Card_2 key={index} apiData={ele}></Card_2>
              ) : (<></>)
              )
            })
          }

        </div>
      ):(<Loader></Loader>)
      }
     
      
    </section>
    </>
  )
}


export default SourceId