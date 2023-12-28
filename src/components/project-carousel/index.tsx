import * as React from "react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import projects from "../../resources/projects.json";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";
import Image from "next/image";

export function ProjectCarousel() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {projects.projects.map((project, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-left justify-center p-0 flex-col">
                  <Image
                    src={project.image}
                    alt="project image"
                    width={500}
                    height={500}
                    className="bg-[#F4EEEE]"
                  ></Image>{" "}
                  <div className="p-6">
                    <CardFooter className="text-left p-0 text-gray-500">
                      {project.components}
                    </CardFooter>
                    <span className="text-4xl font-semibold text-left">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.name}
                      </a>
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
