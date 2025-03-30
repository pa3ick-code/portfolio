'use client';

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { 
  Spotlight,
   GridAndDots, 
   TextGenerator,
   MagicButton
  } from "./ui";
import { stack } from "@/data";


export default function Hero({getRef}: {getRef: any}) {
  return (
    <div className="pb-20 pt-20">
      <GridAndDots />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Hello 👋🏽, I&apos;m Patrick
          </h1>

          <TextGenerator word="Building Seamless Digital Experiences with Precision & Passion." />

          <p className="text-center text-sm md:text-lg lg:text-2xl mb-7 md:tracking-wider">
              I&apos;m a Software Engineer, based in Lagos, Nigeria.
          </p>

          <div className="flex items-center justify-center gap-4 mb-7">
              {stack.map(({id, img})=>(
                <div key={id} >
                  <Image src={img} alt="stack icon" width={35} height={35}  className="rounded-lg opacity-80"/>
                </div>
              ))}
          </div>

          <MagicButton 
            text="Explore My Portfolio"
            icon={ <FaLocationArrow/> }
            iconPosition="right"
            handleClick={()=>{
              getRef.current?.scrollIntoView({behavior: 'smooth'})
            }}
          />
        </div>
      </div>
    </div>
  );
}
