const express=require("express");
const app=express();
const axios=require("axios");

// let url=`https://newsapi.org/v2/everything?q=${searchResult}&apiKey=f5953fdedda743018342829317f94933`;
const port=8080;
// static files

app.use(express.static("public"));
app.use("/css",express.static(__dirname+"/public/css"));
app.use("/img",express.static(__dirname+"/public/img"));


// setting view engine

app.set("view engine","ejs");

// listen on port 8080

app.listen(port,()=>{
    console.log(`app is listening to port ${port}`);
})

// routes



        app.get("/",async(req,res)=>{
        
            try{
                let searchResult="india";
                let finalUrl=`https://newsapi.org/v2/everything?q=${searchResult}&apiKey=f5953fdedda743018342829317f94933`;
                let result=await axios.get(finalUrl);
                let {data}=result;  
                // destructuring data object which is present in result object which we got from axios.get("url");
                console.log(data.articles);
                let articles=data.articles;
                res.render("news.ejs",{articles});
                }
            catch(err){
                console.log(err);
            }
        })

        app.get("/search",async(req,res)=>{
            let {searchResult}=req.query;
            let finalUrl=`https://newsapi.org/v2/everything?q=${searchResult}&apiKey=f5953fdedda743018342829317f94933`;
            let result=await axios.get(finalUrl);
            let {data}=result;  
            // destructuring data object which is present in result object which we got from axios.get("url");
            console.log(data.articles);
            let articles=data.articles;
            res.render("news.ejs",{articles});

            
        })

