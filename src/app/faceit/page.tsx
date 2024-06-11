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
      <div className="max-w-sm overflow-hidden rounded shadow-lg transition duration-100 ease-in-out hover:-translate-y-4 hover:opacity-80">
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

export default function Faceit() {
  return (
    <div className="bg-darkgray m-10 rounded-lg text-center text-white shadow-lg">
      <h1 className="poppins text-5xl font-semibold">FACEIT</h1>
      <p className="montserrat m-10 mx-auto w-[70%] text-xl">
        Sharpen your aim and dominate Counter-Strike 2 in our FACEIT Hub! Join
        the community for skilled matches and climb the leaderboards.
      </p>
      <div className="m-10 grid grid-cols-2 justify-items-center rounded-lg">
        {/* CHANGE NAME/CONTENT/IMAGE FOR NEW CONTENT */}
        <Card
          name="SharkBoyz x AfterHours"
          image="/assets/shark.jpeg"
          content="[2v2]"
          href="https://www.faceit.com/en/championship/deb428dc-be6a-4a05-ad65-06280ae388eb/After%20Hours%20Season%202%20-%20Summer%20Break%20Cash%20Cup%20%5B1000%20USD%5D"
        />
        <Card
          name="AfterHours x SharkBoyz"
          image="/assets/shark.jpeg"
          content=" [Wing-Man]"
          href="https://www.faceit.com/en/hub/0f41b337-59fc-4476-b97f-a578ed2b55d2/SharkBoyz%20x%20AfterHours%20%5BWing%20Man%5D/requirements"
        />
        <div className="">
        <Card
          name="AfterHours x SharkBoyz"
          image="/assets/shark.jpeg"
          content="[1v1]"
          href="https://www.faceit.com/en/hub/468d7962-a84a-40be-9787-3682e6b2487e/SharkBoyz%20x%20AfterHours%20%5B1v1%5D/requirements"
        />
        </div>
      </div>
      <button className="h-12 w-48 rounded-lg bg-blue">
        <Link href="https://www.faceit.com/en/hub/acc37195-57a0-4149-aa70-d5f545f30411/After%20Hours%20League%20%5B10Man%5D/requirements">
          JOIN
        </Link>
      </button>
    </div>
  );
}
