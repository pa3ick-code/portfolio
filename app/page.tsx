"use client"

import { useRef } from "react";

import { 
  Hero, 
  Grid, 
  RecentProjects, 
  FloatingNav, 
  Testimonial, 
  Experience,
  Process,
  Footer
} from "@/components";
import { navItems } from "@/data";


export default function Home() {
  const idRef = useRef<HTMLDivElement | null>();
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
        <Hero getRef={idRef} />
        <Grid getRef={idRef} />
        <RecentProjects />
        <Testimonial />
        <Experience />
        <Process />
        <Footer/>
      </div>
    </main>
  );
}
