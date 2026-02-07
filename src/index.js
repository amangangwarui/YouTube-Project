// import dotenv from "dotenv"
// import connectDB from "./db/db.js";


// dotenv.config({
//     path: './env'
// })

// connectDB()




// import dotenv from "dotenv";
// dotenv.config();

// import connectDB from "./db/db.js";
// import app from "./app.js";

// connectDB();

// app.listen(8000, () => {
//   console.log("Server running on port 8000");
// });



import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/db.js";
import app from "./app.js";

connectDB()

.then(() => {
     app.listen(process.env.Port || 8000, () => {
        console.log(`Server is running at port : ${process.env.PORT}`);
     })
})

.catch((err) => {
    console.log(("MONGO DB connection failed !!! ", err));
})

// app.listen(8000, () => {
//   console.log("Server running on port 8000");
// });








/*
import express from "express"
const app = express()
( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR:", error);
        throw error
       })

       app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
       })

    } catch (error) {
        console.log("ERROR: ", error)
        throw err
    }
})()
 
*/