const express = require('express')
const cors = require("cors")
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()


const uri = `${process.env.MONGODB_URL}`



const app = express();
app.use(cors());
app.use(express.json({ limit: "100mb" }))             //! KeyPoint


const PORT = process.env.PORT || 8080;




//************ database connection :- 

mongoose.set("strictQuery", false)
mongoose.connect(uri)
    .then(() => {
        console.log("Connected to the database")
    })
    .catch((err) => {
        console.log("Some error Occured", err)
    })



//************ Creating the Schema :- 
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








//*********** Routing  :- 
app.get("/", (req, res) => {
    res.send("Server is Running Here......")
})



//*********** API settings :- 
//* signUp API
app.post("/signup", async (req, res) => {
    const { email } = req.body;

    try {
        const existingUser = await userModel.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists", alert: false });
        } else {
            const newUser = new userModel(req.body);
            await newUser.save();
            res.send({ message: "Successfully signed up", alert: false });
        }
    } catch (error) {
        console.error("Error signing up:", error);
        return res.status(500).json({ message: "Internal server error", alert: false });
    }
});


//* login API
app.post("/login", async (req, res) => {
    console.log(req.body)
    const { email , password } = req.body;
    console.log(`password from client ${password}`)

    try {
        const existingUser = await userModel.findOne({ email: email });
        const userPassword  = await userModel.findOne({$and : [{email: email} , {password : password}]})
        console.log(userPassword)
        if (existingUser ) {
            if(userPassword){
                res.send({ message: "Logged in", alert: true , data: req.body});
            }else{
                return res.status(404).json({ message: "Password didn't match", alert: false });
            }
        } else {
            return res.status(404).json({ message: "User is not signed up", alert: false });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        return res.status(500).json({ message: "Internal server error", alert: false });
    }
});




app.listen(PORT, () => console.log(`Server is running on PORT num:- ${PORT}`))