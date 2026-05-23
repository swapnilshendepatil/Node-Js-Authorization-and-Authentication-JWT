const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const JWT_SECRET='swapnilshendeapekshachavanandweareswashaaaaa'

const userData = [];

const auth=(req,res,next) => {
  const token=req.headers.token;
  if (!token) {
    res.status(403).json({
        message:'Token not provided'
    })
  }
  try {
    const decode=jwt.verify(token,JWT_SECRET)
    req.user=decode
    next()
  } catch (error) {
    return res.status(403).json({
      message: "x`",
    });
  }
}
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
  res.header('token',token)
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
res.json({
    message: "User Authentication Successfully",
    user: req.user,
  });
}

app.post("/signup", signupHandler);
app.post("/signin", signinHandler);
app.get("/me",auth,meHandler);

app.listen(3000);
