import Image from "next/image";
import { Card, CardDescription } from "../ui/card";
import { ResizablePanel, ResizablePanelGroup } from "../ui/resizable";

export const SkillCard = ({ name, image }: any) => {
  return (
    <div className="rounded-lg bg-[#f1f1ef] text-card-foreground shadow-sm w-[18%] h-[3%]">
      <CardDescription className="flex flex-row p-8 items-center justify-center object-center gap-8">
        <span className="font-semibold text-[1.2vw]">{name}</span>
        <Image
          src={image}
          alt="logo"
          width={40}
          height={40}
          className="rounded-md object-contain w-[3vw] h-[3vw]"
        ></Image>
      </CardDescription>
    </div>
  );
};
