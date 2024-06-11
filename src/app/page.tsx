import Image from "next/image";
import Link from "next/link";

const Card = ({ name, image, content }: { name: string; image: string; content: string }) => {
  return (
    <div className="bg-black poppins flex h-[500px] w-[500px] rounded-lg py-6 text-center text-2xl font-semibold text-white shadow-lg flex-col">
      <Image src={image} width={10000} height={10000} alt="counter-strike bot profile picture" className="h-60 w-full rounded-lg"/>
      <h5 className="">{name}</h5>
      <p className="">{content}</p>
    </div>
  );
};

export default function Home() {
  return (
    <div className="">
    <div className="relative flex items-center justify-center">
      <video
        src="/assets/looped-clip.mp4"
        autoPlay
        loop
        muted
        className="opacity-50"
      ></video>
      <div className="absolute flex flex-col">
        <h1 className="poppins z-50 text-6xl font-bold text-white">
          DEFINING THE <span className="text-lightblue">COMPETITION</span>
        </h1>
        <button className="poppins bg-blue m-7 mx-auto h-10 w-40 rounded-lg text-lg text-white shadow-xl">
          <Link href="https://discord.com/invite/afterhourscs2" target="_blank">
            DISCORD
          </Link>
        </button>
      </div>
    </div>

    <div className="flex items-center justify-center mt-20 flex-col">
      <h3 className="text-bluegray">LATEST</h3>
      <h1 className="text-bluegray text-5xl text-center poppins font-bold border-b-2">NEWS</h1>
      <div className="m-10 -z-10 circle rounded-lg border-white border-[1px]">
      <Card name="After Hours Season 2" image="/assets/cash-cup.png" content="Summer Break Cash Cup [1000 USD]" />
      </div>
      <div>

      </div>
    </div>

    

    </div>
  );
}

