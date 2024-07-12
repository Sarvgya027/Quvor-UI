import Image from "next/image"

interface SingleCardProps {
  imageSRC: string;
  title: string;
  text: string;
}

function SingleCard({imageSRC, title, text}: SingleCardProps) {
  return (
    <div className="bg-white w-[249px] h-[292px] drop-shadow-xl flex flex-col items-start p-8 gap-y-4">
      <div className="bg-primary w-[70px] h-[76] px-[22px] py-[19px] rounded-md">
        <Image src={imageSRC} alt="hero image" width={32} height={32} />
      </div>

      <h1 className="font-bold text-neutral">{title}</h1>

      <div className="bg-[#e74040] w-[50px] h-[2px]"></div>

      <p className="text-[#737373]">{text}</p>
      
    </div>
  )
}

export default SingleCard
