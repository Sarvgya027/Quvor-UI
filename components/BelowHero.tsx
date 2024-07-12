import { FaArrowRight } from "react-icons/fa";
import SingleCard from "./UI/SingleCard";

export default function BelowHero() {
  return (
    <div className="lg:flex ">
      <div className="flex flex-col  lg:block space-y-8 items-left px-8 my-20 lg:px-28 lg:my-44 ">
        <div className="bg-[#e74040] w-[94px] h-[7px] "></div>
        <h1 className="text-4xl font-bold ">
          Approdable Packages
        </h1>
        <p className="text-[#737373] lg:max-w-[500px]">Problems trying to resolve the conflict between
          the two major realms of Classical physics:
          Newtonian mechanics </p>

        <button className="btn lg:bg-transparent border-none text-primary group">
          Learn More
          <FaArrowRight className="inline-block transition-transform group-hover:translate-x-1.5" />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-y-8 lg:flex-row lg:gap-x-8 lg:my-44">
        <SingleCard imageSRC="/012-blackboards.svg" title="Certified Teacher" text="The gradual accumulation of information about" />
        <SingleCard imageSRC="/013-telescope-1.svg" title="Expert Instruction" text="The gradual accumulation of information about" />
      </div>


    </div>
  )
}