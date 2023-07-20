"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [data, setData] = useState("nothing");

  const router = useRouter()

  async function getUserData() {
    const res = await axios.get("/api/users/me");
    console.log("res.data", res.data.data._id);

    setData(res?.data?.data._id);
    router.push(`/profile/${res.data.data._id}`)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1>Profile Pages</h1>
      <h2>Manish Kumar</h2>
      {/* <h2 className="bg-gray-300">
        {data === "nothing" ? "Nothing here" : <Link href={`/profile/${data}`}> {data} </Link>}
      </h2> */}
      <button
        className="bg-blue-500 hover: bg-blue-700 text-white font-bold py-2 px-3 rounded"
        onClick={getUserData}
      >
        GetUser Details
      </button>
    </div>
  );
}
