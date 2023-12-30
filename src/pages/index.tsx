import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import LinkedInIcon from "@/components/ui/linkedinicon";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-notion">
      <NavigationBar></NavigationBar>
      <div className="flex flex-row p-10 justify-center items-center md:gap-56 gap-8">
        <TextArea />
        <div>
          <Image src={"/avatar.png"} width={400} height={400} alt="EL"></Image>
        </div>
      </div>
      <div className="flex flex-col justify-items-center content-center items-center w-full py-8">
        <CardTitle className="text-left text-5xl pb-8">Recent Works</CardTitle>
        <ProjectCarousel></ProjectCarousel>
      </div>
    </div>
  );
}
