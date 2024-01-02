import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SkillCard } from "@/components/skill-card";
import { ResizablePanelGroup } from "@/components/ui/resizable";

export default function Home() {
  return (
    <div className="bg-notion">
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-center gap-16 py-36">
        <div className="flex flex-row md:gap-56 gap-8 justify-center items-center w-3/4">
          <TextArea />
          <div>
            <Image
              src={"/avatar.png"}
              width={425}
              height={425}
              alt="EL"
            ></Image>
          </div>
        </div>
        <div className="flex flex-row w-3/4 items-center justify-center gap-4">
          {/* <ResizablePanelGroup direction="horizontal" className="flex-wrap"> */}
          <SkillCard name="NextJS" image="/nextjs.jpg"></SkillCard>
          <SkillCard name="TailwindCSS" image="/tailwind.png"></SkillCard>
          <SkillCard name="Python" image="/python.png"></SkillCard>
          <SkillCard name="C++" image="/c++.png"></SkillCard>
          <SkillCard name="MySQL" image="/mysql.png"></SkillCard>
          {/* </ResizablePanelGroup> */}
        </div>
      </div>

      <div className="flex flex-col justify-items-center content-center items-center w-full py-8">
        <CardTitle className="text-left text-5xl pb-8">Recent Works</CardTitle>
        <ProjectCarousel></ProjectCarousel>
      </div>
    </div>
  );
}
