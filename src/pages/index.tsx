import { ProjectCarousel } from "@/components/project-carousel";
import { TextArea } from "@/components/text-area";
import Image from "next/image";
import { NavigationBar } from "@/components/navigation-bar";
import { CardTitle } from "@/components/ui/card";
import { SkillCard } from "@/components/skill-card";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Footer } from "@/components/footer";

export default function Home() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const carouselAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      carouselAnimation.start("visible");
    }
  }, [inView]);

  return (
    <div className="bg-notion">
      <NavigationBar></NavigationBar>
      <div className="flex flex-col items-center gap-16 py-36">
        <div className="flex flex-row md:gap-56 gap-8 justify-center items-center w-3/4">
          <TextArea />
          <div>
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <Image
                  src={"/avatar.png"}
                  width={425}
                  height={425}
                  alt="EL"
                ></Image>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex flex-row w-3/4 items-center justify-center gap-4">
          <SkillCard name="NextJS" image="/nextjs.jpg" index={1}></SkillCard>
          <SkillCard
            name="TailwindCSS"
            image="/tailwind.png"
            index={2}
          ></SkillCard>
          <SkillCard name="Python" image="/python.png" index={3}></SkillCard>
          <SkillCard name="C++" image="/c++.png" index={4}></SkillCard>
          <SkillCard name="MySQL" image="/mysql.png" index={5}></SkillCard>
        </div>
      </div>
      <div
        ref={ref}
        className="flex flex-col justify-items-center content-center items-center w-full py-8"
      >
        <CardTitle className="text-left text-5xl pb-8">Recent Works</CardTitle>
        <AnimatePresence>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            animate={carouselAnimation}
            initial="hidden"
            transition={{ duration: 1, delay: 0.35 }}
          >
            <ProjectCarousel></ProjectCarousel>
          </motion.div>
        </AnimatePresence>
      </div>{" "}
      <Footer></Footer>
    </div>
  );
}
