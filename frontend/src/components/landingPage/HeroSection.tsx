import ejercicio from "../../assets/videos/ejercicio.mp4";
import meditation from "../../assets/videos/meditation.mp4";
import heroVideo from "../../assets/videos/heroVideo.mp4";
import Carousel from "@/components/CustomCarousel";

export const Hero = () => {
  const exampleSlides = [
    {
      id: 1,
      video: heroVideo,
      slogan: "Small steps brings significant changes",
      description:
        "Transforming your life begins with changing your mindset. Embrace positivity, set realistic goals, and believe in yourself. Small changes, when consistent, lead to big results. We'll guide you every step of the way.",
    },
    {
      id: 2,
      video: meditation,
      slogan: "Meditation Nurtures the Soul",
      description:
        "Meditation calms the mind, reduces stress, and promotes inner peace. By incorporating mindful meditation into your routine, you can enhance mental clarity, achieve emotional balance, and foster a deeper sense of well-being.",
    },
    {
      id: 3,
      video: ejercicio,
      slogan: "Fitness fuels the mind",
      description:
        "Regular physical activity is a powerful tool for mental clarity and emotional resilience. Engaging in the right fitness routine tailored to your lifestyle will not only boost your physical health but also enhance your mindset and overall well-being.",
    },
  ];

  return (
    <div className="w-full"> {/* Este div elimina el padding extra */}
      <Carousel slides={exampleSlides} />
    </div>
  );
};
