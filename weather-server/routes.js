const { API_URL, API_ENDPOINT, API_KEY,FILE } = require( "./constant");
const axios =require("axios");
const router = require('express').Router();
const fs = require("fs");

let city =  fs.readFileSync(FILE, "utf8", (err) => {
    if (err) { 
        console.log("Error in getting the city data.");
    }
});
city = JSON.parse(city);


router.get('/get-all',async (req,res) =>{

    let cities = "";

    city.List.forEach((c)=>{
        cities+=(c.CityCode+",")
    });

    await axios.get(`${API_URL}${API_ENDPOINT}?id=${cities}&units=metric&appid=${API_KEY}`)
    .then((response)=>{
        res.send(response.data);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).send(error);
    }); 
});



module.exports=router;