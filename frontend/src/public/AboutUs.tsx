
const AboutMe = () => {
    return (
        <section>
            {/* Intro Section */}
            <div className="text-center space-y-5 py-[60px]">
                <p className="font-bold text-[#FF7F50] text-sm">My Journey</p>
                <h2 className="font-bold text-4xl">A Passion for Mindset and Transformation</h2>
                <p className="text-[#667085] text-medium w-[90%] md:w-[70%] mx-auto">
                    Hi, I’m Jesus Antonio, a dedicated personal coach with a mission to help others unlock their true potential. 
                    My journey into mindset coaching began with my own struggles and growth. Over the years, I’ve developed 
                    a passion for guiding others towards a balanced, healthy, and empowered life. Whether it’s building mental 
                    resilience, achieving fitness goals, or finding clarity in life’s challenges, I’m here to help you every step of the way.
                </p>
                <div className="flex items-center flex-col justify-center">
                   <span className="text-sm text-gray-400 mt-2">
                       Ready to take the next step? Learn more about my <a href="/coaching-programs/" className="underline">Coaching Programs</a>.
                   </span>
               </div>
            </div>

            <img 
                alt="Profile-picture" 
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                className="h-[400px] object-cover w-full pt-10 rounded-lg"
            />

            {/* Parallax Section 1 - The Beginning */}
            <div className="flex flex-col md:flex-row items-center py-20">
                <div
                    className="parallax w-full md:w-1/2 h-[400px] bg-fixed bg-cover bg-center rounded-lg"
                    style={{
                        backgroundPositionX: "-30px",
                        backgroundImage: "url('https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="md:w-1/2 px-8 py-8 md:py-0">
                    <h4 className="text-2xl font-bold mb-4 text-[#FF7F50]">The Beginning</h4>
                    <p className="text-[#667085]">
                        There was a time when I felt lost, overwhelmed, and unsure of my path. I struggled with self-doubt, lacked direction, 
                        and found it difficult to balance the demands of daily life. My physical and mental health were often pushed aside, 
                        and I felt disconnected from my purpose. It was through these challenges that I discovered the transformative power of mindset and coaching. 
                        By addressing my struggles head-on, I not only regained control but found a passion for helping others do the same.
                    </p>
                </div>
            </div>

            {/* Parallax Section 2 - Evolution and Growth */}
            <div className="flex flex-col md:flex-row items-center py-20">
                <div
                    className="parallax w-full md:w-1/2 h-[400px] bg-fixed bg-cover bg-center rounded-lg"
                    style={{
                        backgroundPositionX: "-30px",
                        backgroundImage: "url('https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="md:w-1/2 px-8 py-8 md:py-0">
                    <h4 className="text-2xl font-bold mb-4 text-[#FF7F50]">Evolution and Growth</h4>
                    <p className="text-[#667085]">
                        Over time, I embraced the journey of self-discovery and personal development. I learned to transform challenges into opportunities for growth 
                        and honed my ability to help others do the same. This evolution was not only about improving myself but also about fostering a deep understanding 
                        of how to guide others toward their own transformation. Every step taught me the value of persistence, adaptability, and a positive mindset.
                    </p>
                </div>
            </div>

            {/* Parallax Section 3 - Empowering Others */}
            <div className="flex flex-col md:flex-row items-center py-20">
                <div
                    className="parallax w-full md:w-1/2  h-[400px] bg-fixed bg-cover bg-center rounded-lg"
                    style={{
                        backgroundPositionX: "-30px",
                        backgroundImage: "url('https://images.unsplash.com/photo-1605296866985-34ba3c0b527b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
                    }}
                ></div>
                <div className="md:w-1/2 px-8 py-8 md:py-0">
                    <h4 className="text-2xl font-bold mb-4 text-[#FF7F50]">Empowering Others</h4>
                    <p className="text-[#667085]">
                        Today, my mission is clear: to empower others to overcome their obstacles and achieve their dreams. Through coaching, I provide tools, 
                        strategies, and support to help individuals unlock their full potential. Whether it's cultivating mental resilience, achieving fitness goals, 
                        or finding clarity, I’m committed to walking alongside my clients as they transform their lives.
                    </p>
                </div>
            </div>

            {/* Values Section */}
<div className="py-20 text-center space-y-5">
<p className="font-bold text-[#FF7F50] text-sm">Values</p>
<h2 className="font-bold text-4xl">My Core Values</h2>

    <p className="text-[#667085] text-medium w-[90%] md:w-[70%] mx-auto">
    These values are the compass that guides my work and my mission as a coach. They form the foundation of everything I do, empowering me to create lasting and meaningful change in the lives of others. By living these values, I strive to inspire growth, transformation, and the pursuit of a balanced, fulfilling life.
    </p>

    <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        {/* Value 1 */}
        <div className="p-8 w-full md:w-[30%]">
            <h4 className="text-xl font-bold mb-4  text-[#FF7F50]">Resilience</h4>
            <p className="text-[#667085]">
                Embracing challenges as opportunities for growth, we build the strength to overcome adversity and keep moving forward.
            </p>
        </div>

        {/* Value 2 */}
        <div className="p-8 w-full md:w-[30%] border-l border-r border-gray-900">
        <h4 className="text-xl font-bold mb-4 text-[#FF7F50]">Empowerment</h4>
            <p className="text-[#667085]">
                I believe in empowering others to take control of their lives by providing the tools and support they need to succeed.
            </p>
        </div>

        {/* Value 3 */}
        <div className="p-8 w-full md:w-[30%]">
            <h4 className="text-xl font-bold mb-4  text-[#FF7F50]">Clarity</h4>
            <p className="text-[#667085]">
                Helping individuals gain clarity in their lives and goals, allowing them to make confident decisions and achieve success.
            </p>
        </div>
    </div>
</div>

        </section>
    );
};

export default AboutMe;

