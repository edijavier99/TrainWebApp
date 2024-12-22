import { Button } from "./ui/button";
import { FaDumbbell, FaBrain, FaAppleAlt } from 'react-icons/fa';  // React Icons import

interface Props {
    caption: string
    description: string
    title:string
}

export const IntroductionCard = ({title, description,caption}: Props) => {
    return (
        <article className="flex w-full py-10 flex-col  items-center md:my-[80px] space-y-10 lg:flex-row  overflow-hidden">
            <div className="flex lg:w-1/2 space-y-8 flex-col">
                <p className="font-bold text-[#FF7F50] text-sm">{caption}</p>
                <p className="text-gray-500">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 pt-8 gap-6">
                    {/* Fitness Section */}
                    <article className="flex flex-col">
                        <div >
                            <div className="flex flex-col items-center sm:items-start">
                                <span className="icon-container text-2xl">
                                    <FaDumbbell />
                                </span>
                                <h6 className="feature-title text-lg font-semibold mt-2">Fitness</h6>
                                <p className="card-text text-gray-500 mt-2">
                                    Achieve your fitness goals with tailored workouts.
                                </p>
                            </div>
                        </div>
                    </article>
                    {/* Mindset Section */}
                    <article className="flex flex-col">
                        <div>
                        <div className="flex flex-col items-center sm:items-start">
                        <span className="icon-container text-2xl">
                                    <FaBrain />
                                </span>
                                <h6 className="feature-title text-lg font-semibold mt-2">Mindset</h6>
                                <p className="card-text text-gray-500 mt-2">
                                    Develop mental resilience through coaching.
                                </p>
                            </div>
                        </div>
                    </article>
                    {/* Nutrition Section */}
                    <article className="flex flex-col">
                        <div>
                        <div className="flex flex-col items-center sm:items-start">
                        <span className="icon-container text-2xl">
                                    <FaAppleAlt />
                                </span>
                                <h6 className="feature-title text-lg font-semibold mt-2">Nutrition</h6>
                                <p className="card-text text-gray-500 mt-2">
                                    Optimize your diet for better health and performance.
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
                <div className="w-full">
                    <Button className="mt-5 w-full lg:w-auto">Get Started</Button>
                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center py-[80px] lg:pt-0 lg:justify-end h-auto">
                {/* Se añaden clases para controlar el desbordamiento */}
                <p className="text-6xl sm:w-[75%]   text-center font-bold break-words overflow-hidden text-animated-gradient">{title}</p>
            </div>
        </article>
    );
};
