const express = require('express');
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 4500;
const Redis = require("ioredis")

const redis = new Redis({
    port: 13881,
    host: 'redis-13881.c301.ap-south-1-1.ec2.cloud.redislabs.com',
    password: 'iuIcoRFsH3WwAlScP2KkuBM9CpNGhKTu'
});


const app = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.sendFile(path.join(_dirname,'/index.html'));
})











app.listen(PORT,async()=>{

    try {
        await connection
        console.log("Connected to DB")
        console.log(`Server running at http://localhost:${PORT}`);
    } catch (error) {
        console.log(error)
    }
    
})