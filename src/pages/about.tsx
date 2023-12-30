import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { NavigationBar } from "@/components/navigation-bar";
import { ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col">
        <Card className="w-full bg-notion">
          <CardHeader className="gap-4">
            <CardTitle>How did I get interested in Computer Science?</CardTitle>
            <CardDescription className="text-lg">
              Studying computer science is a way for me to understand how my
              favorite games/websites are created and expand upon my creativity
              to build out amazing products built upon user-friendliness.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full">
          <CardHeader className="gap-4">
            <CardTitle>Projects</CardTitle>
            <CardDescription className="text-lg">
              Operation Code -{" "}
              <Link
                href={"https://uiuc.hack4impact.org/"}
                className="text-[#337ea9]"
              >
                🌎 Hack4Impact (Fall 2023)
              </Link>
            </CardDescription>
            <CardDescription className="text-lg">
              NLP Voice - State Farm (Summer 2023)
            </CardDescription>
            <CardDescription className="text-lg">
              ClearpathNYC -{" "}
              <Link
                href={"https://uiuc.hack4impact.org/"}
                className="text-[#337ea9]"
              >
                🌎 Hack4Impact (Spring 2023)
              </Link>
            </CardDescription>
            <CardDescription className="text-lg">
              Hate Speech Data Visualization - Crowd Dynamics Lab (Spring 2023)
            </CardDescription>
            <CardDescription className="text-lg">
              Kotahi by Coko -{" "}
              <Link
                href={"https://uiuc.hack4impact.org/"}
                className="text-[#337ea9]"
              >
                🌎 Hack4Impact (Fall 2022)
              </Link>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="flex flex-row">
        <Card className="bg-notion w-full flex">
          <CardHeader className="w-1/2 gap-4">
            <CardTitle>These are a few of my favorite things!</CardTitle>
            <CardDescription className="text-lg">
              ༅ laying outside in a soft breeze <br />
              🎤 singing & playing to Taylor Swift on acoustic guitar
              <br /> 🍰 strawberry cake <br /> 🎧 listening to new music styles
            </CardDescription>
          </CardHeader>
          <CardHeader className="w-1/2 gap-4">
            <CardTitle>My go-to music for coding</CardTitle>
            <iframe
              className="rounded-2xl"
              src="https://open.spotify.com/embed/playlist/1nLA2q4iTvK0xP6NOlUZLm?utm_source=generator"
              width="500"
              height="500"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
