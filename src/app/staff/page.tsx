import Image from "next/image";

//CARD COMPONENT FOR STAFF
const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="poppins flex h-60 w-64 flex-col items-center justify-center rounded-lg bg-[#28282B] py-6 text-center text-2xl font-semibold text-white shadow-lg">
      <Image
        src={image}
        width={1000}
        height={1000}
        alt="counter-strike bot profile picture"
        className="h-40 w-40 rounded-full"
      />
      <h5 className="">{name}</h5>
    </div>
  );
};

export default function Staff() {
  return (
    <div className="">
      <h1 className="m-5 text-center text-6xl font-bold text-white border-b-[1px] w-[10%] mx-auto border-accent">STAFF</h1>
      <p className="montserrat text-center text-xl text-white w-1/2 mx-auto">
        Our staff is here to help. We are dedicated to the cause. All of our
        members are actively engaged in the community and working hard for our
        growth!
      </p>
      <div className="w-[60%] mt-10 grid grid-cols-4 gap-10 mx-auto">

        {/* CHANGE NAME/IMAGE FOR NEW CONTENT */}
        <Card image="/assets/ct-pfp.png" name="mousee" />
        <Card image="/assets/ct-pfp.png" name="pink ocean yuki" />
        <Card image="/assets/ct-pfp.png" name="costerfunk" />
        <Card image="/assets/ct-pfp.png" name="ev0l" />
        <Card image="/assets/t-pfp.png" name="denverg" />
        <Card image="/assets/t-pfp.png" name="thyme et basil" />
        <Card image="/assets/t-pfp.png" name="1freaky" />
        <Card image="/assets/t-pfp.png" name="b1tter" />
      </div>
    </div>
  );
}
