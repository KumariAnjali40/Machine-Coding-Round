const express = require('express');
const cors = require('cors');
const path = require("path");
const PORT = process.env.PORT || 4500;
const Redis = require("ioredis")

const redis = new Redis({
    port: process.env.redis_port,
    host: process.env.redis_host,
    password: process.env.redis_password
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