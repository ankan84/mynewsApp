const express = require('express');
const router = express.Router();
const axios = require('axios');
const { set } = require('mongoose');

// Home page 
router.post('/', (req, res) => {
    const isoDate = new Date().toISOString().substring(0,10); 
    const url = `https://newsapi.org/v2/everything?q=from=${isoDate}&sortBy=popularity&apiKey=4583328f31604630a0ce81abaf0821ab`
 
    axios.get(url).then((response) => {

        res.status(200).send(response.data);
    }).catch(() => {
        res.status(400).send();
    });


})

// source

router.post('/source', (req, res) => {
    
    const isoDate = new Date().toISOString().substring(0,10);
    const url = `https://newsapi.org/v2/everything?q=from=${isoDate}&sortBy=popularity&apiKey=4583328f31604630a0ce81abaf0821ab`;
    axios.get(url).then((response) => {
        const found = response.data.articles.filter((element) => {
            return element.source.id != null;
        });
        const ans = new Set();
        found.filter((ele, index) => {
            ans.add(ele.source.id);
        })
        
        let temp=[];
        ans.forEach((ele)=>{
            temp.push(ele);
        })
        res.status(200).send(temp);


    }).catch(() => {
        res.status(400).send();
    })
})

// source data 

router.post('/source/:id', (req, res) => {
    const isoDate = new Date().toISOString().substring(0,10);
    const postID = `${req.params.id}`;
    const url = `https://newsapi.org/v2/everything?q=-d from=${isoDate}&sources=${postID}&sortBy=popularity&apiKey=4583328f31604630a0ce81abaf0821ab`;
    axios.get(url).then((response) => {
        res.status(200).send(response.data);
    }).catch(() => {
        res.status(400).send();
    })

})

// top-headline

router.post('/top-headline',(req,res)=>{
    const url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=4583328f31604630a0ce81abaf0821ab`;

    axios.get(url).then((response)=>{
        res.status(200).send(response.data);
    }).catch(()=>{
        res.status(400).send();
    })
})

// date wayis 

router.post('/time/:id',(req,res)=>{
    let id=req.params.id;
    const url=`https://newsapi.org/v2/everything?q=Apple&from=${id}&sortBy=popularity&apiKey=4583328f31604630a0ce81abaf0821ab`;
    axios.get(url).then((response)=>{
        res.status(200).send(response.data);
    }).catch(()=>{
       res.status(400).send();
    })
})















module.exports = router;