import Image from "next/image";
import { Card, CardDescription } from "../ui/card";
import { ResizablePanel, ResizablePanelGroup } from "../ui/resizable";
import { motion } from "framer-motion";
import { once } from "events";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const SkillCard = ({ name, image, index }: any) => {
  return (
    <motion.div
      className="rounded-lg bg-[#f1f1ef] text-card-foreground shadow-sm w-[18%] h-[3%]"
      variants={fadeInAnimationVariants}
      initial="initial"
      animate="animate"
      whileInView="animate"
      viewport={{ once: true }}
      custom={index}
    >
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
    </motion.div>
  );
};
