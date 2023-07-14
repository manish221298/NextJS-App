"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import { axios } from "axios";

interface User {
  username: string;
  email: string;
  password: string;
}

export default function signUp() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSignUp = () => {
    const formData = {
      username: user.username,
      email: user.email,
      password: user.password
    }

    console.log("form data is", formData)
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