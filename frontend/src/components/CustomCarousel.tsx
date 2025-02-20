import  { useState, useEffect } from "react";
// import { CheckForm } from "./forms/CheckUserExistanceForm";
import { Button } from "./ui/button";
import { useModalContext } from "@/context/ModalContext";
import { CustomModal } from "./CustomModal";
import { CheckUserExistenceForm } from "./forms/CheckUserExistanceForm";

interface Slide {
  id: number;
  image?: string;
  slogan: string;
  description: string;
}

interface CarouselProps {
  slides: Slide[];
  autoplayInterval?: number; // Optional autoplay interval in milliseconds
}

const Carousel = ({ slides, autoplayInterval = 5000 }:CarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { setActiveModal } = useModalContext();

    const openModal = () =>{
        setActiveModal("booking")  
    }


  // Autoplay functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      }, autoplayInterval);
      return () => clearInterval(interval);
    }
  }, [isPaused, autoplayInterval, slides.length]);

  return (
    <section
      className="relative  h-screen bg-black overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} // Pause autoplay on hover
      onMouseLeave={() => setIsPaused(false)} // Resume autoplay on leave
    >
      {/* Slide Content */}
      <div className="absolute inset-0">
          <img
            src={slides[currentSlide].image}
            alt="Slide Image"
            className="w-full h-full object-cover"
          />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
      </div>

      {/* Slide Text */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-8xl font-bold mb-4">
          {slides[currentSlide].slogan}
        </h1>
        <p className="max-w-2xl mb-6 text-xl">
          {slides[currentSlide].description}
        </p>
        <CustomModal modalId="booking">
          <CheckUserExistenceForm/>
        </CustomModal>
        <Button
          onClick={openModal}
          >
            Make A Booking
          </Button>
      </div>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-[#FF7F50]" : "bg-white bg-opacity-50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
