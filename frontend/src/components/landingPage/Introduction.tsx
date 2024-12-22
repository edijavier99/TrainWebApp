import { IntroductionCard } from "../IntroductionCard";
import { Button } from "../ui/button";
import { Atributes } from "./Atributes";

export const Introduction = () => {
    const introductionText = `At [Your Brand Name], we believe that true wellness is more than just physical fitness.
    Our approach integrates exercise, mindset coaching, and nutrition to create a balanced, fulfilling lifestyle.
    With our certified personal trainers, you'll experience a tailored program that addresses your
    unique needs and goals.`;

    const introPersonalInfo = `
    I'm all about helping people feel great inside and out. As a fitness and 
    nutrition coach, my approach goes beyond just workouts and diets. With
    years of experience, I've specialized in caring for both your mental and 
    physical health. My goal is to join you on a fun and rewarding journey 
    towards a healthier, balanced lifestyle. Together, we can make each day a 
    step closer to your best self, empowering you to embrace a happier and more 
    fulfilling life.
    `;

    return (
        <section >
            <IntroductionCard
                title="TRANSFORM YOUR LIFE HOLISTICALLY"
                description={introductionText}
                caption="Personal Coaching"
            />
            <div className="min-h-screen">
                <div className="flex flex-col lg:space-x-8 space-y-10 lg:space-y-0 lg:flex-row">
                    <div className="lg:w-1/2 space-y-6">
                        <p className="font-bold text-[#FF7F50] text-sm">Jesus Antonio</p>
                        <h1 className="text-6xl sm:text-6xl  font-bold text-center lg:text-left">EXPERIENCED PERSONAL COACH</h1>
                        <p className="text-gray-500">{introPersonalInfo}</p>
                        <Button className="w-full lg:w-auto">About Me</Button>
                    </div>
                    <div className="h-full  lg:w-1/2">
                        <img alt="jesus-antonio" className="h-full rounded-lg max-h-[500px] object-cover w-full" src="https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                    </div>
                </div>
                <Atributes/>
            </div>
        </section>
    );
};

