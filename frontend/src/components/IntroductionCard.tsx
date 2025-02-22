import { Button } from "./ui/button";
import {  FaBrain, FaAppleAlt } from 'react-icons/fa';  // React Icons import
import { useModalContext } from "@/context/ModalContext";
import { CustomModal } from "./CustomModal";

interface Props {
    caption: string
    description: string
    title:string
}

export const IntroductionCard = ({title, description,caption}: Props) => {
    const { setActiveModal } = useModalContext();

    const openModal = () =>{
        setActiveModal("get-started")  
    }

      
    return (
        <article className="flex w-full py-10 flex-col  items-center md:my-[80px] space-y-10 lg:flex-row  overflow-hidden">
            <div className="flex lg:w-1/2 space-y-8 flex-col">
                <p className="font-bold text-[#FF7F50] text-sm">{caption}</p>
                <p className="text-gray-500">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-4 pt-8 gap-6">
               
                    {/* Mindset Section */}
                    <article className="flex flex-col">
                        <div>
                        <div className="flex flex-col items-center sm:items-start">
                        <span className="icon-container text-2xl">
                                    <FaBrain />
                                </span>
                                <h6 className="feature-title text-lg font-semibold mt-2">Support</h6>
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
                                <h6 className="feature-title text-lg font-semibold mt-2">Guidance </h6>
                                <p className="card-text text-gray-500 mt-2">
                                    Optimize your diet for better health and performance.
                                </p>
                            </div>
                        </div>
                    </article>
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
                    <Button  onClick={openModal} className="mt-5 w-full lg:w-auto">Get Startedd</Button>

                </div>
            </div>
            <div className="lg:w-1/2 flex justify-center py-[80px] lg:pt-0 lg:justify-end h-auto">
                {/* Se añaden clases para controlar el desbordamiento */}
                <p className="text-6xl sm:w-[75%]   text-center font-bold break-words overflow-hidden text-animated-gradient">{title}</p>
            </div>
            <CustomModal modalId="get-started">
            <Button className="mt-5 w-full lg:w-auto">Get Startedddddddd</Button>
                    </CustomModal>
        </article>
    );
};
