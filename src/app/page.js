"use client";
import { MyContext } from "@/components/lib/MyContext";
import Navbar from "@/components/Navbar/Navbar";
import OverallLayout from "@/components/OverallLayout/OverallLayout";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  return (
    <div>
      <Navbar />
      <MyContext.Provider value={{ text, setText }}>
        <OverallLayout />
      </MyContext.Provider>
    </div>
  );
}
