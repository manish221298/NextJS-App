"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios  from "axios";

export default function signUp() {

  const router = useRouter()

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = async() => {
  
    try{
      const response = await axios.post("/api/users/signup", user)

      console.log("response data", response.data)
    }
    catch(error: any){
      console.log("error frontend", error.message)
    }

    // console.log("form data is", user)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Signup Page</h1>

      <label className="mt-5">Username</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-2 mt-2 "
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Enter Username"
      />

      <label className="mt-3">Email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 mt-2 "
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Enter Email"
      />

      <label className="mt-3">Password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 mt-2 "
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Enter Password"
      />

      <button onClick={onSignUp} className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus: border-gray-600">
        SIGNUP
      </button>
      <Link href="/login">LOGIN PAGE</Link>
    </div>
  );
}
