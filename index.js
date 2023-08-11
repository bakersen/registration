const express = require("express")
const app = express()
require("dotenv").config();
const addUserRoute = require("./routes/addUserRoute")

//Middleware
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/user", addUserRoute);

app.get("/", (req, res)=>{
    res.send("Website running")
});

app.post("/test", (req, res) => {
	console.log(req.body);
    res.send("you have posted");
});

//Server Listening
app.listen(process.env.PORT, ()=> {
    console.log(`Listening on port ${process.env.PORT}`);
});



