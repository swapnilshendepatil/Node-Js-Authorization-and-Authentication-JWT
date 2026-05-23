const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const JWT_SECRET='swapnilshendeapekshachavanandweareswashaaaaa'

const userData = [];
const signupHandler = (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  userData.push({
    userName: userName,
    password: password,
  });
  res.json({
    message: "User signup successfully..!",
  });
};

const signinHandler = (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;

  const validation = userData.find((user) => {
    return user.userName === userName && user.password === password;
  });
  if (validation) {
    const token=jwt.sign({
        userName
    },JWT_SECRET)

    res.json({
        messgae:'User Signin successfully..',
        token:token
    })
  }else{
    res.status(403).json({
        message:'Invalid Username and password'
    })
  }
};

const meHandler=(req,res)=>{
    const token=req.headers.token;
    const isValidToken=jwt.verify(token,JWT_SECRET);
    if (isValidToken) {
        res.json({
            message:'User Authentication Successfully'
        })
    }else{
        res.status(403).json({
            message:'Unauthorized to access'
        })
    }
}

app.post("/signup", signupHandler);
app.post("/signin", signinHandler);
app.get("/me",meHandler);

app.listen(3000);
