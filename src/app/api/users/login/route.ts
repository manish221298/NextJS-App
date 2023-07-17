import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest){
    try{
        const requestBody = await request.json()
        const { email, password } = requestBody

        const user = await User.findOne({email})

        if(!user){
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        // check if password is correct
        const validatePassword = await bcryptjs.compare(password, user.password)

        if(!validatePassword){
            return NextResponse.json({error: "Invalid Email or Password"}, {status: 401})
        }

        // create token data
        const tokenData = {
            id: user._id,
            email: user.email,
            username: user.username
        }

        // create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1d"})

        const response = NextResponse.json({message: "Login Successfully", success: true, status: 200})

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    }
    catch(error: any){
        return NextResponse.json({error: error.message }, {status: 500})
    }
}