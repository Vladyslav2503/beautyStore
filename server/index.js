const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const PORT = process.env.PORT || 5000
const cors = require('cors')


const app = express()

app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
 

const start = async () => {
    try {
       // await mongoose.connect('mongodb://127.0.0.1:27017/auth_roles')
       await mongoose.connect(`mongodb+srv://soStore:soStore@sostore.cvylfq2.mongodb.net/?retryWrites=true&w=majority`);
  
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e) 
    } 
}  
  
start()