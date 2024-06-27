import React from "react";
import { motion } from "framer-motion";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";


const CardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: "/assets/10mans.webp",
      title: "AfterHours",
      description: "[10 Mans]",
      link: "https://www.faceit.com/en/hub/acc37195-57a0-4149-aa70-d5f545f30411/After%20Hours%20League%20%5B10Man%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[2v2]",
      link: "https://www.faceit.com/en/hub/f7efa731-f485-47a1-ac54-1139dbda289a/SharkBoyz%20x%20AfterHours%20%5B2v2%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[Wing-Man]",
      link: "https://www.faceit.com/en/hub/0f41b337-59fc-4476-b97f-a578ed2b55d2/SharkBoyz%20x%20AfterHours%20%5BWing%20Man%5D/requirements",
    },
    {
      image: "/assets/shark.jpeg",
      title: "AfterHours x SharkBoyz",
      description: "[1v1]",
      link: "https://www.faceit.com/en/hub/468d7962-a84a-40be-9787-3682e6b2487e/SharkBoyz%20x%20AfterHours%20%5B1v1%5D/requirements",
    },
  ];

  const handlePrev = () => {
    if (currentIndex == 0) {
      setCurrentIndex(cards.length - 1);
    } else if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex == cards.length - 1) {
      setCurrentIndex(0);
    } else if (currentIndex < cards.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="mt-2 text-darkblue">
      <div className="relative w-full">
        <div className="flex items-center justify-center">
          {cards.slice(currentIndex, currentIndex + 1).map((card, index) => (
            <div
              className="rounded-lg bg-white p-4 shadow-xl transition hover:scale-110 relative z-30 active:scale-90"
              key={index}
            >
              <img
                className="mb-4 h-[300px] rounded-lg object-cover mx-auto border-2 w-full"
                src={card.image}
                alt="Card"
              />
              <h3 className="py-2 text-2xl font-bold">{card.title}</h3>
              <p className="text-gray-500 py-2">{card.description}</p>
              {card.link && (
                <button className="mt-3 rounded-lg bg-darkblue text-white">
                  <a
                    href={card.link}
                    className="bg-blue-500 hover:bg-blue-700 flex h-10 w-28 items-center justify-center rounded text-center font-bold"
                  >
                    Join Now
                  </a>
                </button>
              )}
            </div>
          ))}
        </div>

        <div className="relative bottom-44 mt-4 flex items-center justify-between">
          <button
            className="relative -right-[300px] h-10 w-10 rounded-full bg-white flex items-center justify-center text-3xl active:scale-90 hover:scale-125 transition"
            onClick={handlePrev}
          >
            <MdNavigateBefore/>
          </button>
          <button
            className="relative -left-[300px] h-10 w-10 rounded-full bg-white flex items-center justify-center text-3xl active:scale-90 hover:scale-125 transition"
            onClick={handleNext}
          >
            <MdNavigateNext />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
