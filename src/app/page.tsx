"use client";

import Image from "next/image";
import { Bounce, Fade } from "react-awesome-reveal";

export default function Home() {
  return (
    <main className="text-white">
     
      <Bounce triggerOnce>
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
