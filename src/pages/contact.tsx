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
import { Linkedin, LinkedinIcon } from "lucide-react";
import LinkedInIcon from "@/components/ui/linkedinicon";

export default function About() {
  return (
    <>
      <NavigationBar />
      <div className="flex flex-col">
        <Card className="w-full bg-notion">
          <Link
            href={"https://www.linkedin.com/in/esther-lee-93651521b/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon className="w-[3rem] h-[3rem] fill-current text-[#c8ccd3] hover:text-accent-foreground transition-colors"></LinkedInIcon>
          </Link>
        </Card>
      </div>
    </>
  );
}
