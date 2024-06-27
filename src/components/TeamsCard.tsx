import React from "react";

type TeamCardProps = {
  imageUrl: string;
  title: string;
  players: string[];
};

export default function TeamsCard({ imageUrl, title, players }: TeamCardProps) {
  return (
    <div className="flex rounded-md bg-darkgray shadow-lg flex-row items-center border  ">
      <img src={imageUrl} alt={title} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" />
      <div className="flex flex-col justify-between leading-normal">
        <h1 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white px-5">{title}</h1>
        <ul>
          {players.map((players, index) => (
            <li className="text-lg text-bluegray px-5 hover:text-accent cursor-pointer w-28" key={index}>
              {players}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
