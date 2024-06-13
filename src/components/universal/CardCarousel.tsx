import React from "react";

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

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length,
    );
  };
  if (currentIndex === cards.length - 1) {
    setCurrentIndex(0);
  } else if (currentIndex > cards.length - 2) {
    setCurrentIndex(cards.length - 2);
  }
  
  return (
    <div className="mt-2 text-darkblue">
      <div className="relative w-[100%]">
        <div className="flex items-center justify-center space-x-4">
          {cards.slice(currentIndex, currentIndex + 2).map((card, index) => (
            <div
              className="w-1/3 flex-none rounded-lg bg-white p-4 shadow-md"
              key={index}
            >
              <img
                className="mb-4 h-32 w-full rounded-lg object-cover"
                src={card.image}
                alt="Card"
              />
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="text-gray-500">{card.description}</p>
              {card.link && ( // Check if the 'link' property exists
                <a
                  href={card.link}
                  className="bg-blue-500 hover:bg-blue-700 mt-2 inline-block rounded px-4 py-2 text-center font-bold"
                >
                  Learn More
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="relative bottom-44 mt-4 flex items-center justify-between">
          <button
            className="relative -right-32 h-10 w-10 rounded-full bg-white"
            onClick={handlePrev}
          >
            &lt;
          </button>
          <button
            className="relative -left-32 h-10 w-10 rounded-full bg-white"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
