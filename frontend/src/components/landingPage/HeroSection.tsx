import Carousel from "@/components/CustomCarousel";

// https://www.pexels.com/photo/a-man-in-black-tank-top-exercising-in-the-gym-6388453/

export const Hero = () => {
  const exampleSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/5036843/pexels-photo-5036843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slogan: "Small steps brings significant results",
      description:
        "Transforming your life begins with changing your mindset. Embrace positivity, set realistic goals, and believe .",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/8436932/pexels-photo-8436932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slogan: "Calm The Storm",
      description:
        "Meditation calms the mind, reduces stress, and promotes inner peace. By incorporating mindful meditation into your routine,",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6388972/pexels-photo-6388972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slogan: "Keep Moving",
      description:
        "Regular physical activity is a powerful tool for mental clarity and emotional resilience. Engaging in the right fitness routine tailored to your lifestyle will not",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/6388972/pexels-photo-6388972.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      slogan: "What You Eat Matters",
      description:
        "Regular physical activity is a powerful tool for mental clarity and emotional resilience. Engaging in the right fitness routine tailored to your lifestyle will not",
    },
  ];

  return (
    <div className="w-full"> {/* Este div elimina el padding extra */}
      <Carousel slides={exampleSlides} />
    </div>
  );
};
