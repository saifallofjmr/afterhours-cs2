import Image from "next/image";
import Link from "next/link";


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

    //recent events or news
    5v5
    wingman 2v2 sharkboys
    

    </div>
  );
}

