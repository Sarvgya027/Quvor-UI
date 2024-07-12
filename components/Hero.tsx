import Image from "next/image";

export default function Hero() {
  return (
    <div className="bg-secondary w-full h-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:pl-8 py-12 md:pt-32">
        <div className="flex flex-col lg:pl-16 lg:flex-row lg:justify-between items-center lg:items-start">
          <div className="flex flex-col gap-y-8 mb-12 lg:mb-0 w-full lg:w-5/12">
            <p className="text-primary text-center lg:text-left font-bold">Welcome</p>
            <div className="flex flex-col gap-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight sm:leading-[1.2] lg:leading-[90px] text-neutral text-center lg:text-left">
                Best Learning <br className="hidden sm:inline" /> Opportunities
              </h1>
              <p className="text-[#737373] text-lg sm:text-xl max-w-[300px] mx-auto lg:mx-0 text-center lg:text-left">
                Our goal is to make online education work for everyone
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn bg-primary px-[40px] py-[15px] rounded-md text-white w-full sm:w-auto">
                Join Us
              </button>
              <button className="btn bg-transparent border border-primary px-[40px] py-[15px] text-primary rounded-md w-full sm:w-auto">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 max-w-2xl lg:max-w-none">
            <Image 
              className="-mt-8 lg:-mt-16 lg:ml-14 w-full h-auto object-contain"
              src='/hero-cover-1.png' 
              alt="hero image" 
              width={900} 
              height={882}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}