import mindset from "../assets/img/Mindset.png";
import { Button } from "./ui/button";

const PricingPackage = () => {
  const pricingOptions = [
    { sessions: 1, price: 25, description: "Perfect for trying it out." },
    { sessions: 6, price: 130, description: "Best for short-term commitment." },
    { sessions: 12, price: 250, description: "Maximize your transformation." },
  ];

  return (
    <div className="flex flex-col items-center space-y-5 justify-center min-h-screen py-12">
      <p className="font-bold text-[#FF7F50] text-sm">Take The Step</p>
      <div className="w-full text-center">
        {/* Título principal */}
        <h2 className="text-3xl font-bold sm:text-4xl mb-6">
          Unlock Your Potential with a Positive Mindset
        </h2>
        {/* Descripción inicial */}
        <p className="text-gray-500 text-lg mb-6">
          This program is designed to guide you towards a better mindset by using tools like fitness exercises, healthy eating habits, meditation, and personal coaching. Together, we’ll build the foundation for a healthier, happier, and more successful you.
        </p>
        <div className="flex flex-wrap">
          {/* Imagen del diagrama */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img alt="why-mindset-diagram"   src={mindset} />
          </div>
          {/* Copy explicativo */}
          <div className="w-full md:w-1/2 flex flex-col justify-center text-left px-4">
            <h3 className="text-xl font-bold mb-4">
              Why Mindset is the <span className="text-[#FF7F50]">Key to Success</span>
            </h3>
            <p className="text-gray-500 mb-4">
            Your <span className="font-bold text-gray-700 dark:text-gray-300">mindset shapes your life</span>. It influences how you face challenges and spot opportunities. An <span className="font-bold text-gray-700 dark:text-gray-300">adaptive mindset</span> turns obstacles into growth and helps you thrive.
            </p>
            <p className="text-gray-500 mb-4">
            As your <span className="font-bold text-gray-700 dark:text-gray-300">personal coach</span>, I’ll guide you to cultivate a mindset that empowers real change. Together, we’ll use tools like <span className="font-bold text-gray-700 dark:text-gray-300">fitness</span>, <span className="font-bold text-gray-700 dark:text-gray-300">healthy eating</span>, and <span className="font-bold text-gray-700 dark:text-gray-300">meditation</span> to unlock your potential.
            </p>
            <p className="text-[#FF7F50] text-sm  font-semibold">
              The journey to success starts with the way you think.  </p>
          </div>

        </div>
        {/* Opciones de precios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {pricingOptions.map((option) => (
            <div
              key={option.sessions}
              className="rounded-lg border-[1px] border-gray-200 dark:border-gray-900 p-6 duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">
                {option.sessions} Session{option.sessions > 1 ? "s" : ""}
              </h3>
              <p className="text-gray-500 text-sm mb-4">{option.description}</p>
              <p className="text-2xl font-bold  mb-6">
                £{option.price}
              </p>
              <Button>Choose Plan</Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPackage;
