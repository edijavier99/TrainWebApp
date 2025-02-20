import { Hero } from "@/components/landingPage/HeroSection";
import { Introduction } from "@/components/landingPage/Introduction";
import { Newsletter } from "@/components/landingPage/Newsletter";
import { Reviews } from "@/components/landingPage/Reviews";
import ParallexCard from "@/components/ParallexCard";
import PricingPackage from "@/components/PricingPackage";
import { ParallaxProvider } from 'react-scroll-parallax';

function Home() {


  return (
    <section >
      <div className="mx-[-20px]  md:mx-[-70px]">
        <Hero  />
      </div>
      <Introduction />
      <p className="font-bold text-[#FF7F50] text-sm">How I can Help You</p>
      <ParallaxProvider>
      <ParallexCard
          title="Small Steps"
          description="Changing your mindset is the first step to unlocking your potential. Our Mindset Empowerment program is designed to help you build"
          imageUrl="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          points={[
            "Identify mental blocks that hold you back.",
            "Develop emotional resilience to face challenges.",
            "Gain tools to set goals and establish priorities.",
          ]}
        />

        <ParallexCard
          title="Nurture your soul"
          description="Success in relationships begins with a clear and empathetic mindset. These sessions are tailored to help you identify destructive "
          imageUrl="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          points={[
            "Learn to manage conflicts constructively.",
            "Master empathy and active listening.",
            "Build trust and strengthen your relationships.",
          ]}
        />

        <ParallexCard
          title="Keep moving"
          description="Transform how you view money and opportunities. Our coaching sessions will guide you to adopt an abundance mindset, enabling you to"
          imageUrl="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          points={[
            "Identify limiting beliefs around money and success.",
            "Establish routines that attract opportunities.",
            "Strategically plan for growth and abundance.",
          ]}
        />

        <ParallexCard
          title="What you eat matters"
          description="Transform how you view money and opportunities. Our coaching sessions will guide you to adopt an abundance mindset, enabling you to"
          imageUrl="https://images.unsplash.com/photo-1554244933-d876deb6b2ff?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          points={[
            "Identify limiting beliefs around money and success.",
            "Establish routines that attract opportunities.",
            "Strategically plan for growth and abundance.",
          ]}
        />
        </ParallaxProvider>
      <PricingPackage/>
      <Reviews/>
      <Newsletter />
    </section>
  );
}

export default Home;
