import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import Navbar from '../Navbar';


export default function Admin_Page() {
    const history = useHistory();

    const [name,setName]=useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [urlToImage, setToImage] = useState('');
    const [content, setContent] = useState('');
    const  [description,setDescription]=useState("");


   const submitData=()=>{
   
    axios.get('/admin_home').then((response)=>{
        setName(response.data.name);
       
    }).catch(()=>{
        alert('Error !Reload the page');
    })
       
   
    const articles= 
        {
            source: {
                id:name,
                name:name
    
            },
            author:author,
            title: title,
            description:description,
            url:url,
            urlToImage:urlToImage,
            content: content
        }    


       
       axios.post('/admin/create-post',{
           articles
       }).then((response)=>{
           if(response.status===200){
        
            setAuthor("")
            setTitle("")
            setUrl("")
            setToImage("")
            setContent("")
            setDescription("")
            
        
        }
           alert("Post Created")
         
       }).catch(()=>{
           alert(' Error ! Title must be filled')
       })     
       
       
        
   }
    useEffect(() => {
        axios.get('/admin_home').then((response) => {
            if (response.status === 200) {
                history.push('/admin_home');

            } else {
                history.push('/');
            }
        }).catch(() => {
            history.push('/');
        })


    }, [])

    return (
       <>
       <Navbar></Navbar>
        <div className="container">
            <h1>Create Your Post</h1>
            <div className="row">
                <div className="col-md-4 my-2">
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Author</span>
                        <input type="text" className="form-control" value={author} aria-describedby="addon-wrapping" onChange={(e)=>{
                            setAuthor(e.target.value)
                        }} />
                    </div>
                </div>
                <div className="col-md-4 my-2">

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Title</span>
                        <input type="text" className="form-control" value={title} aria-describedby="addon-wrapping" onChange={(e)=>{
                            setTitle(e.target.value)
                        }} />
                    </div>
                </div>
            </div>

            <div className="col-md-4 my-2">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Url</span>
                    <input type="text" className="form-control" value={url} aria-describedby="addon-wrapping" onChange={(e)=>{
                            setUrl(e.target.value)  }}/>
                </div>
            </div>
            <div className="col-md-4 my-2">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Image Url</span>
                    <input type="text" className="form-control" value={urlToImage} aria-describedby="addon-wrapping" onChange={(e)=>{
                            setToImage(e.target.value)
                        }} />
                </div>
            </div>
            <div className="col-md-4 my-2">
                <div className="input-group flex-nowrap">
                    <span className="input-group-text" id="addon-wrapping">Content</span>
                    <input type="text" className="form-control" value={content} aria-describedby="addon-wrapping" onChange={(e)=>{
                            setContent(e.target.value)
                        }} />
                </div>
            </div>

            <div className="col-md-4 my-2">

                <div className="form-floating">
                    <textarea className="form-control" value={description} placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "100px" }} onChange={(e)=>{
                            setDescription(e.target.value)
                        }}></textarea>
                    <label for="floatingTextarea2">Description</label>
                </div>
            </div>

            <button type="button" className="btn btn-primary btn-lg" onClick={()=>{
                submitData();
            }}>Submit</button>


        </div>

        </>

    )
}
