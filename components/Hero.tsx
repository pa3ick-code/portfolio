import { FaLocationArrow } from "react-icons/fa6";
import { 
  Spotlight,
   GridAndDots, 
   TextGenerateEffect,
   MagicButton
  } from "./ui";


export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight fill="white" className="-top-40 -left-10 md:-left-32 md:-top-10 h-screen"/>
        <Spotlight fill="purple" className="top-10 left-full h-[80vh] w-[50vw]"/>
        <Spotlight fill="blue" className="top-28 left-80 h-[80vh] w-[50vw]"/>
      </div>
      <GridAndDots />
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              I love what I do
          </h1>

          <TextGenerateEffect 
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Self-taught Front End Developer,  School-taught Software Engineer"
          />

          <p className="text-center text-sm md:text-lg lg:text-2xl mb-4 md:tracking-wider">
              I&apos;m Patrick, NextJs developer based in Lagos, Nigeria.
          </p>

          <MagicButton 
            text="Explore My Portfolio"
            icon={ <FaLocationArrow/> }
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
}
