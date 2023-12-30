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

export default function About() {
  return (
    <>
      <NavigationBar />
      <Card className="w-full bg-notion">
        <CardHeader className="gap-4">
          <CardTitle>What I do?</CardTitle>
          <CardDescription className="text-lg">
            I'm currently studying Statistics & Computer Science at UIUC. I love
            being involved with 🌎 Hack4Impact, 👩🏻‍💻 Crowd Dynamics Lab, and 🌟 CS
            STARS.
          </CardDescription>
        </CardHeader>
      </Card>

      <Card className="w-full bg-notion">
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
    </>
  );
}
