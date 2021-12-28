require('dotenv').config();

const express = require('express');
const path = require('path');
const ejs = require('ejs');

const port = process.env.PORT || 8080;

const theme = process.env.theme || 'default';

const app = express();

app.set("view engine", "ejs");
app.use(express.static('static'));

app.get("/",async (req,res)=>{

    const tpl = await ejs
    .renderFile(path.join(__dirname, "templates/index.ejs"), {
      base_url:process.env.base_url,
      theme:theme
    })

    res.send(tpl);
});


app.listen(port,()=>{
    console.log(`listening on ${port}`)
})