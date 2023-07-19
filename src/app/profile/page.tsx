"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");

  async function getUserData() {
    const res = await axios.get("/api/users/me");
    console.log("res.data", res.data.data);
    setData(res?.data?.data);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Pages</h1>
      <h2>Manish Kumar</h2>
      <button
        className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-3 rounded"
        onClick={getUserData}
      >
        clickme
      </button>
    </div>
  );
}
