import express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World NLW 04")
})

app.post("post", (req, res) => {
    
})

app.listen(5000, () => {console.log('Server is running!')})