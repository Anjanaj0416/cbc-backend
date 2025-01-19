import User from "../models/user.js";
import bcrypt from "bcrypt"; 
import jwt from "jsonwebtoken";

export function createUser(req,res){

    const newUserData = req.body

    newUserData.password = bcrypt.hashSync(newUserData.password,10)

    const user = new User(req.body)

    user.save().then(
        ()=>{ res.json({
            message : "User created"
        })
    })
        .catch(()=>{
            res.json({
                message:"user snot created"
            })
        })
}

export function loginUser(req,res){
    User.find({email:req.body.email}).then(
        (users)=>{
            if (users.length == 0){
                res.json({
                    message : "user not created"
                })
            }else{
                const user = users[0]

                const isPasswordCorrect = bcrypt.compareSync(req.body.password,user.password)

                if(isPasswordCorrect){
                    const token = jwt.sign({
                        email :user.email,
                        password: user.password,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        isBlocked : user.isBlocked,
                        type : user.type,
                        profilePicture: user.profilePicture
                    },"cbc-secret-key-111")
                    res.json({
                        message :"user created",
                        Token : token
                    })
                    
                }else{
                    res.json({
                        message : "User not logged in"
                    })
                }
            }
        })
}
    