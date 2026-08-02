"use client";

import { useEffect, useState } from "react";

export default function IndexPage() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [result, setResult] = useState<string>("Waiting...");

  const move = (e: KeyboardEvent) => {
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
    window.addEventListener("keydown", move);
    return () => window.removeEventListener("keydown", move);
  }, []);

  useEffect(() => {
    setInterval(() => {
      const countdown = window.setTimeout(move);
    }, 1000);
  }, []);

  if (!isGameStarted)
    return (
      <div className="p-3">
        <button
          className="cursor-pointer bg-sky-600 hover:bg-sky-700 text-white rounded-md p-2 active:scale-95"
          onClick={() => setIsGameStarted(true)}
        >
          Почати
        </button>
      </div>
    );
  else if (isGameStarted) {
    return <div className="grid grid-cols-12 grid-rows-12">{result}</div>;
  }
}
