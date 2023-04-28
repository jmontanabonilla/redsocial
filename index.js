const connection = require ("./database/connection");
const express = require("express");
const cors = require("cors");


connection();

const app = express();
const puerto = 3900;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const followRoutes = require("./routes/followRoutes");
const publicationRoutes = require("./routes/publicationRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/api", followRoutes);
app.use("/api", publicationRoutes);
app.use("/api", userRoutes);



app.listen(puerto, ()=>{
    console.log("Servidior node ok con puerto", puerto);
});