import TeamsCard from "@/components/TeamsCard";

export default function Team() {
  const teamData = [
    {
      imageUrl: "/assets/esea-logo.png",
      title: "AfterHours - ESEA Advance (S50, S49, S48, S47)",
      url: "https://www.esea.net/teams/12345",
      players: [
        { name: "1Freaky", faceitUrl: "https://www.faceit.com/en/players/1Freaky" },
        { name: "FRIZZY", faceitUrl: "https://www.faceit.com/en/players/FRIZZY" },
        { name: "LittleBeer", faceitUrl: "https://www.faceit.com/en/players/LittleBEER" },
        { name: "icarus", faceitUrl: "https://www.faceit.com/en/players/1lcarus" },
        { name: "cMitch", faceitUrl: "https://www.faceit.com/en/players/CMitch", twitchUrl: "https://www.twitch.tv/cmitch" },
      ],
    },
    {
      imageUrl: "/assets/odyssey.png",
      title: "AfterHours - Odyssey ESEA-IM (S50, S49, S48)",
      players: ["Ciisco-", "Costerfunk", "slYc3", "Eckz", "syst3m4tt1c"],
    },
    {
      imageUrl: "/assets/mirrored.png",
      title: "AfterHours - Mirrored ESEA (IM) (S50, S49, S48)",
      players: [
        "LeJoy-",
        "Vampyworm",
        "supyrk",
        "_-rekt-_",
        "-n9n-",
      ],
    },
    {
      imageUrl: "/assets/afterhours-club.png",
      title: "AfterHours Club - S50 IM / S49 Open",
      players: [
        "Evol",
        "CoreyInTheNA",
        "Draxido",
        "Gringochainz",
        "Tread",
      ],
    },
    {
      imageUrl: "/assets/nightwatch.png",
      title: "AfterHours NightWatch - S50 IM / S49 Open",
      players: [
        "Treybittie",
        "Tedd_yy",
        "-_St0rm",
        "discernn",
        "swagggymeat",
      ],
    },
  ];

  return (
    <div className="background-animate bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] py-10 text-center shadow-lg flex flex-wrap min-h-screen items-center justify-center gap-y-6  md:gap-x-10 ">
      {teamData.map((team, index) => (
        <TeamsCard key={index} {...team} />
      ))}
    </div>
  );
}
