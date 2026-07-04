const mongoose = require('mongoose') ; require('dotenv').config();


const connectdb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URl)
    console.log("mongoosDB connected")
    }//try

    catch(error){console.log(error)}//catch

}//connectdb function 



module.exports= connectdb;