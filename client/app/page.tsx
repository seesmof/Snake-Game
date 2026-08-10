"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useEffect, useState } from "react";

export enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT,
}

export default function IndexPage() {
  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [direction, setDirection] = useState<Direction>(Direction.UP);

  const move = (e: KeyboardEvent) => {
    if (e.key == "ArrowUp") {
      setDirection(Direction.UP);
    } else if (e.key == "ArrowDown") {
      setDirection(Direction.DOWN);
    } else if (e.key == "ArrowLeft") {
      setDirection(Direction.LEFT);
    } else if (e.key == "ArrowRight") {
      setDirection(Direction.RIGHT);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", move);
    return () => window.removeEventListener("keydown", move);
  }, []);

  useEffect(() => {
    setInterval(() => {
      console.log("Jesus is KING");
    }, 1000);
  }, []);

  return (
    <div className="bg-sky-50 min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="font-bold text-2xl">Грай в змійку</CardTitle>
          <CardDescription>Це простенька гра в змійку</CardDescription>
        </CardHeader>
        <CardContent>
          {isGameStarted ? (
            <>
              <div className="grid grid-cols-5 grid-rows-5 gap-1">
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>

                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>

                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>

                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>

                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
                <div className="bg-stone-100 rounded-md p-1 aspect-square"></div>
              </div>

              <Button
                className="mt-4"
                variant="outline"
                onClick={() => setIsGameStarted(false)}
              >
                Зупинити
              </Button>
            </>
          ) : (
            <Button onClick={() => setIsGameStarted(true)}>Почати</Button>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
