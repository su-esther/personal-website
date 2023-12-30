import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="bg-notion">
      <NavigationBar></NavigationBar>
      <div className="flex flex-row p-10 justify-center items-center md:gap-52 gap-8">
        <TextArea />
        <div>
          <Image src={"/avatar.png"} width={300} height={300} alt="EL"></Image>
        </div>
      </div>
      <Card>
        <div className="flex flex-col justify-items-center content-center items-center w-full">
          <CardTitle className="text-left pt-10">Recent Works</CardTitle>
          <ProjectCarousel></ProjectCarousel>
        </div>
      </Card>
    </div>
  );
}
