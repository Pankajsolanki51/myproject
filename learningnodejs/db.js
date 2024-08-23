import mongoose from "mongoose"

(async ()=>{
    try{
      await mongoose.connect("mongodb:localhost:27017/gitsetup")
      console.log("DB CONNECTED");

      const onListening = () =>{
        console.log("listning on port 5000");
        
      }

      db.listen(5000,onListening)
      
    }
    catch(error){
        console.error("error",error);
        throw err;
        
    }
})()