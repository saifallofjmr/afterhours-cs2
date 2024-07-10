import React from "react";

type TeamCardProps = {
  imageUrl: string;
  title: string;
  players: string[];
};

export default function TeamsCard({ imageUrl, title, players }: TeamCardProps) {
  return (
    <div className="flex h-60 w-80 md:w-[50%] md:h-[50%] items-center rounded-md border bg-bg shadow-lg">
      <img
        src={imageUrl}
        alt={title}
        className="h-60 w-36 rounded-r-lg object-cover md:h-60 md:w-60"
      />
      <div className="flex flex-col justify-between leading-normal">
        <h1 className="mb-4 text-sm font-bold tracking-tight text-start px-2 text-white md:mb-2 md:px-5 md:text-2xl">
          {title}
        </h1>
        <ul>
          {players.map((players, index) => (
            <li
              className="cursor-pointer px-3 py-[3px] text-start text-sm text-white hover:text-accent md:px-5 md:text-lg"
              key={index}
            >
              {players}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
