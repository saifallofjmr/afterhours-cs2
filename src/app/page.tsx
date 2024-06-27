"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//CARD COMPONENT FOR LATEST NEWS
const Card = ({
  name,
  image,
  content,
  href,
}: {
  name: string;
  image: string;
  content: string;
  href?: string;
}) => {
  return (
    <a href={href} className="">
      <div className="news max-w-sm overflow-hidden rounded shadow-lg">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt="latest news image"
          className="w-full rounded-lg"
        />
        <div className="px-6 py-4 text-center">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="font-medium text-secondary">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Home() {
  const words = ["COMPETITION", "STANDARDS", "COMEBACKS", "CHALLENGES"];
  const [wordsIndex, setWordsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordsIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      <div className="relative flex h-[720px] items-center justify-center">
        <video
          src="/assets/looped-clip.mp4"
          autoPlay
          loop
          muted
          className="opacity-50"
        ></video>
        <div className="absolute flex flex-col items-center justify-center">
          <AnimatePresence mode="popLayout">
            <h1 className="poppins mb-10 w-[834px] whitespace-nowrap text-6xl font-bold text-white">
              DEFINING THE{" "}
              <motion.span
                key={wordsIndex}
                className="relative text-lightblue"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0 }}
              >
                {words[wordsIndex]}
              </motion.span>
            </h1>
          </AnimatePresence>

          <button className="poppins m-7 mx-auto h-10 w-40 rounded-lg bg-primary text-lg font-medium text-white shadow-xl hover:bg-accent hover:text-bg">
            <Link
              href="https://discord.com/invite/afterhourscs2"
              target="_blank"
            >
              DISCORD
            </Link>
          </button>
        </div>
      </div>

      <div className="mt-48 flex flex-col items-center justify-center">
        <h3 className="text-bluegray">LATEST</h3>
        <h1 className="poppins border-b-2 text-center text-5xl font-bold text-bluegray">
          NEWS
        </h1>
        <div className="circle m-10 rounded-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80">
          {/* CHANGE NAME/CONTENT/IMAGE FOR NEW CONTENT */}
          <Card
            name="After Hours Season 2"
            image="/assets/cash-cup.png"
            content="Summer Break Cash Cup ($1000 USD)"
            href="/news"
          />
        </div>
      </div>
    </div>
  );
}
