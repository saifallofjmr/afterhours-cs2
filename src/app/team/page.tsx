import TeamsCard from "@/components/TeamsCard";

export default function Team() {
  const teamData = [
    {
      imageUrl: "/assets/esea-logo.png",
      title: "AfterHours - ESEA Advance (S50, S49, S48, S47)",
      players: ["1Freaky", "FRIZZY", "LittleBeer", "icarus", "TBD"],
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
    <div className="bg-gray-100 flex flex-wrap min-h-screen items-center justify-center">
      {teamData.map((team, index) => (
        <TeamsCard key={index} {...team} />
      ))}
    </div>
  );
}
