import { NextRequest } from "next/server";
import jwt  from "jsonwebtoken";

// ssh-keygen -t rsa -b 4096

// cat ~/.ssh/id_rsa.pub

export const getDataFromToken = (request: NextRequest) => {
    try{
        const token = request.cookies.get('token')?.value || ''

        const decodedToken: any = jwt.verify(token, process.env.TOKEN_SECRET! )

        return decodedToken.id
    }
    catch(error: any){
        throw new Error(error.message)
    }
}