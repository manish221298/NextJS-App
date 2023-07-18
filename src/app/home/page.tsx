"use client"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HomePage() {

    const router = useRouter()

    const logout = async () => {
      const res = await  axios.get("/api/users/logout")
      router.push("/login")
    }

  return (
    <div>
      <h1>Home Page</h1>
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={logout}
      >
        LOGOUT
      </button>
    </div>
  );
}
