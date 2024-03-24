"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Bounce, Fade } from "react-awesome-reveal";
import { TypeAnimation } from "react-type-animation";

const START_BOUNCE_TIME = 2000;

export default function Home() {
  const [doBounce, setDoBounce] = useState(true);

  const startBounce = () => {
    setTimeout(() => {
      setDoBounce(false);
    }, START_BOUNCE_TIME);
    setTimeout(() => {
      setDoBounce(true);
    }, START_BOUNCE_TIME + 1000);
  };

  return (
    <main className="text-white">
      <section>
        <div>
          <Image src="/shakil.jpg" alt="Shakil Khan" width={200} height={200} />
        </div>
        <div className="text-center">
          <h1 className="text-7xl font-medium">Welcome!</h1>
          <div className="text-center leading-normal md:text-xl lg:text-5xl my-7">
            I am &#160;
            <TypeAnimation
              speed={40}
              deletionSpeed={70}
              sequence={["Shakil Khan", 2000, "a Web Developer", 2000]}
              style={{ textShadow: "1px 1px black", color: "#c49b66" }}
              repeat={Infinity}
            />
          </div>
          <AnimatePresence>
            {doBounce && (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -500 }}
                transition={{ duration: 3, type: "spring", mass: 2 }}
              >
                <p> I a Web Developer</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Bounce cascade damping={0.5}>
        <p>I will animate only the first time you see me</p>
      </Bounce>
      <Fade cascade>
        <p>I enter first...</p>
        <p>...then comes my turn...</p>
        <p>...and finally you see me!</p>
      </Fade>
      <Fade cascade damping={0.1}>
        <p>I enter first...</p>
        <p>...then comes my turn...</p>
        <p>...and finally you see me!</p>
      </Fade>
    </main>
  );
}
