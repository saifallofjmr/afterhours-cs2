import Link from "next/link";
import Image from "next/image";

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
    <a href={href}>
      <div className="max-w-sm overflow-hidden rounded shadow-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80 bg-[#212930]">
        <Image
          src={image}
          width={10000}
          height={10000}
          alt="latest news image"
          className="max-h-80 rounded-lg object-cover"
        />
        <div className="px-6 py-4 text-center">
          <h5 className="mb-2 text-xl font-bold text-[#fafafae8]">{name}</h5>
          <p className="text-secondary font-medium">{content}</p>
        </div>
      </div>
    </a>
  );
};

export default function Tourney() {
  return (
    <div className="">
      <div className=" text-center text-white shadow-lg mx-auto background-animate h-screen w-full bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] ">
        <h3 className="pt-10">CURRENT</h3>
        <h1 className="poppins text-5xl font-semibold">TOURNEYS</h1>
        <p className="montserrat m-10 mx-auto w-[38%] text-xl">
          Sharpen your aim and dominate Counter-Strike 2 in our FACEIT Hub! Join
          the community for skilled matches and climb the leaderboards.
        </p>
        <div className=" flex m-10 items-center justify-center rounded-lg">
          {/* CHANGE NAME/CONTENT/IMAGE FOR NEW CONTENT */}
          <Card
            name="SharkBoyz x AfterHours"
            image="/assets/tournament.webp"
            content="[2v2]"
            href="https://www.faceit.com/en/championship/deb428dc-be6a-4a05-ad65-06280ae388eb/After%20Hours%20Season%202%20-%20Summer%20Break%20Cash%20Cup%20%5B1000%20USD%5D"
          />
        </div>
      </div>
    </div>
  );
}
