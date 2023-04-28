const mongoose = require("mongoose");

const connection = async() => {
    try{    
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_redsocial");
        console.log ("Conexion a la base de datos");
    }catch(error){
        console.log(error);
        throw new Error("No se puede conectar a la base de datos!!");
    }
}

module.exports = connection;