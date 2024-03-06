const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const uri = `${process.env.MONGODB_URL}`



const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }))             //! KeyPoint


const PORT = process.env.PORT || 8080;




//*********** database connection

mongoose.set("strictQuery", false)
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to the database")
    })
    .catch((err) => {
        console.log("Some error Occured", err)
    })



//*********** */ Creating the Schema 
const usersSchema = mongoose.Schema({
    firstName: String ,
    middleName: String ,
    lastName: String ,
    email: {
        type: String,
        unique: true,
    },
    password: String ,
    confirmPassword: String ,
})




//********** Creating the Model :- 
const userModel = mongoose.model("user", usersSchema)








//*********** API:-
app.get("/", (req, res) => {
    res.send("Server is Running Here......")
})



app.post("/signup", async (req, res) => {                         //! Keypoint
    console.log(req.body)
    const {email } = req.body;
    
    const existingUSer = await userModel.findOne({email : email})
    if(existingUSer) {
        return res.status(400).json({ message: "Email already exists" , alert: false});
    }else{
        const data = await userModel(req.body)
        const save = data.save();
        res.send({message : "Succesfully sign up"  , alert: false})
    }
})


app.listen(PORT, () => console.log(`Server is running on PORT num:- ${PORT}`))