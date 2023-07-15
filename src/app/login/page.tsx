"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import  axios  from "axios";

export default function loginPage() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {
    const response = await axios.post("/api/users/login")
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Login Page</h1>

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

      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus: border-gray-600"
      >
        LOGIN
      </button>
      <Link href="/signup">SIGNUP PAGE</Link>
    </div>
  );
}
