"use client";

import { useEffect } from "react";

export default function Page() {
  const handleKey = (e: KeyboardEvent) => {
    if (e.key == "ArrowUp") console.log("Up");
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return "Jesus is LORD";
}
