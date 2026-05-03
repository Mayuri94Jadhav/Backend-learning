    // Handling Requests
const express = require("express");
const app = express();

// Middleware to log the path of every request
app.use((req, res, next) => {
    console.log('Request path:', req.path);
    next();
});
// console.dir(app);

let port = 3000;
app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
})

// parsing
// app.use((req,res) => {
    // console.log(req); // return the object
    // console.log("request received");

    // ....text format 
    // res.send("this ia a basic response");

    //..object form
    // res.send({
    //     name:"mayuri",
    //     rollno:"01",
    // });

    //Html format
    // app.use((req,res) => {
        // console.log("request received");
        // let code ="<h1>Student</h1> <ul><li> mayuri</li></ul>";
        // res.send(code);
    // })

// });



// Routing

app.get("/about",(req,res) => {
    res.send("Undergraduate student , ECE branch");
});

app.get("/skills",(req,res) => {
    res.send("known frontend tech");
});



app.post("/",(req,res)=> {
    res.send("u send post request to root ");
});


//.......Path Parameter......
app.get("/user/:username",(req,res)=>{
    console.log(req.params);
  res.send("Hello " + req.params.username);
});


// ...... Query String(sending reponse from server).......
app.get("/search",(req, res) =>{
    let {q}= req.query;
    res.send(`search result for query:${q}`);
});

// app.get("*splat",(req,res) => {  // custom error define 
//     res.send("this file not there ");
// });