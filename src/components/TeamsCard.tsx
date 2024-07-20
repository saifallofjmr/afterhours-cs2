import TeamsCard from "@/components/TeamsCard";

export default function Team() {
  const teamData = [
    {
      imageUrl: "/assets/esea-logo.png",
      title: "AfterHours - ESEA Advance (S50, S49, S48, S47)",
      players: [
        { name: "1Freaky", faceitUrl: "https://www.faceit.com/en/players/1Freaky" },
        { name: "FRIZZY", faceitUrl: "https://www.faceit.com/en/players/FRIZZY" },
        { name: "LittleBeer", faceitUrl: "https://www.faceit.com/en/players/LittleBEER" },
        { name: "icarus", faceitUrl: "https://www.faceit.com/en/players/1lcarus" },
        { name: "cMitch", faceitUrl: "https://www.faceit.com/en/players/CMitch", twitchUrl: "https://www.twitch.tv/cmitch" }
      ]
    },
    {
      imageUrl: "/assets/odyssey.png",
      title: "AfterHours - Odyssey ESEA-IM (S50, S49, S48)",
      players: [
        { name: "Ciisco-", faceitUrl: "" },
        { name: "Costerfunk", faceitUrl: "" },
        { name: "slYc3", faceitUrl: "" },
        { name: "Eckz", faceitUrl: "" },
        { name: "syst3m4tt1c", faceitUrl: "" }
      ]
    },
    {
      imageUrl: "/assets/mirrored.png",
      title: "AfterHours - Mirrored ESEA (IM) (S50, S49, S48)",
      players: [
        { name: "LeJoy-", faceitUrl: "" },
        { name: "Vampyworm", faceitUrl: "" },
        { name: "supyrk", faceitUrl: "" },
        { name: "_-rekt-_", faceitUrl: "" },
        { name: "-n9n-", faceitUrl: "" }
      ]
    },
    {
      imageUrl: "/assets/afterhours-club.png",
      title: "AfterHours Club - S50 IM / S49 Open",
      players: [
        { name: "Evol", faceitUrl: "" },
        { name: "CoreyInTheNA", faceitUrl: "" },
        { name: "Draxido", faceitUrl: "" },
        { name: "Gringochainz", faceitUrl: "" },
        { name: "Tread", faceitUrl: "" }
      ]
    },
    {
      imageUrl: "/assets/nightwatch.png",
      title: "AfterHours NightWatch - S50 IM / S49 Open",
      players: [
        { name: "Treybittie", faceitUrl: "" },
        { name: "Tedd_yy", faceitUrl: "" },
        { name: "-_St0rm", faceitUrl: "" },
        { name: "discernn", faceitUrl: "" },
        { name: "swagggymeat", faceitUrl: "" }
      ]
    }
  ];

  return (
    <div className="background-animate bg-gradient-to-r from-[#2b5876] via-darkblue to-[#4e4376] py-10 text-center shadow-lg flex flex-wrap min-h-screen items-center justify-center gap-y-6 md:gap-x-10">
      {teamData.map((team, index) => (
        <TeamsCard key={index} {...team} />
      ))}
    </div>
  );
}
