"use client";

import { useEffect, useState } from "react";

export default function IndexPage() {
  const [result, setResult] = useState<string>("Waiting...");

  const handleKey = (e: KeyboardEvent) => {
    if (e.key == "ArrowUp") {
      setResult("/\\");
    } else if (e.key == "ArrowDown") {
      setResult("\\/");
    } else if (e.key == "ArrowLeft") {
      setResult("<");
    } else if (e.key == "ArrowRight") {
      setResult(">");
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return <div className="p-3">{result}</div>;
}
