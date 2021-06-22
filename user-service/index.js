const express = require("express");
const app = express();
const PORT = process.env.PORT_ONE || 7070;
const mongoose = require("mongoose");
const User = require("./model/User");
const jwt = require("jsonwebtoken");

mongoose.connect("mongodb+srv://kapongoarnaud:shadowhearts77@cluster0.w5i3q.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log(`Àuth-service DB connected`);
});

app.use(express.json());

app.post("/auth/login", async(req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email });

    if(!user) {
        return res.json({ message: "User doesn't exist"});
    } else {

        if(password !== user.password) {
            return res.json({ message: "Password Incorrect"});
        }

        const payload = {
            email,
            name: user.name
        };
        jwt.sign(payload, "secret", (err, token) => {
            if (err) console.log(err);
            else {
                return res.json({ token });
            }
        });
    }
});

app.post("/auth/register", async (req, res) => {

    const { email, password, name } = req.body;
    const userExists = await User.findOne({ email });
    if(userExists) {
        return res.json({ message: "User already exists"});
    } else {
        const newUser = new User({
            name,
            email,
            password,
        });
        newUser.save();
        return res.json(newUser);
    }
});

app.post("/auth/register/admin", async (req, res) => {

    const { email, password, name, role } = req.body;

    const userExists = await User.findOne({ email });
    if(userExists) {
        return res.json({ message: "User already exists"});
    } else {
        
        const newUser = new User({
            name,
            email,
            password,
            role: !role
        });
        newUser.save();
        return res.json(newUser);
    }
});

app.listen(PORT, () => {
    console.log(`Àuth-Service at ${PORT}`);
});
