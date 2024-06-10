import Image from "next/image";

const Card = ({ name, image }: { name: string; image: string }) => {
  return (
    <div className="bg-[#1434A4] poppins flex h-60 w-64 items-center justify-center rounded-lg py-6 text-center text-2xl font-semibold text-white shadow-lg flex-col">
      <Image src={image} width={1000} height={1000} alt="counter-strike bot profile picture" className="h-40 w-40"/>
      <h5 className="">{name}</h5>

    </div>
  );
};

export default function Staff() {
  return (
    <div>
      <h1 className="text-white text-5xl text-center font-bold ">STAFF</h1>
      <p className="text-white text-center text-xl montserrat ">
        Our staff is here to help. We are dedicated to the cause. All of our
        members are actively engaged in the community and working hard for our
        growth!
      </p>
      <div className="grid grid-cols-4 gap-10 ">
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
