import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";

export default function Home() {
  return (
    <div className="bg-notion">
      <div className="flex flex-row p-10 justify-center items-center gap-36">
        <TextArea />
        <Image src={"/avatar.png"} width={300} height={300} alt="EL"></Image>
        {/* <Avatar>
          <AvatarImage src="/profile.png" alt="profile image"></AvatarImage>
          <AvatarFallback>EL</AvatarFallback>
        </Avatar> */}
      </div>
      <div className="flex flex-col p-10 justify-items-center content-center items-center w-full">
        <ProjectCarousel></ProjectCarousel>
      </div>
    </div>
  );
}
