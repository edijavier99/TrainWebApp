import { BlogCard } from "@/components/blog/BlogCard";
import axios from "axios"
import { useEffect } from "react";
// import WebSocketComponent from "./WebScoket";

const dummyArticles = [
    {
        id: 1,
        image_url: "https://images.unsplash.com/photo-1627483298423-03e2e972431c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Fitness",
        title: "5 Exercises to Boost Your Energy Levels",
        description: "Discover simple yet effective exercises that can help you stay energized throughout the day.",
        day_posted: "March 20, 2024",
    },
    {
        id: 2,
        image_url: "https://images.unsplash.com/photo-1526724038726-3007ffb8025f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Mindset",
        title: "The Power of Positive Thinking",
        description: "Learn how cultivating positivity can transform your life and help you achieve your goals.",
        day_posted: "March 18, 2024",
    },
    {
        id: 3,
        image_url: "https://images.unsplash.com/photo-1666307582184-c58dc3703166?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "Health Tips",
        title: "10 Simple Habits for a Healthier Lifestyle",
        description: "Adopt these easy-to-follow habits to improve your overall well-being and stay on track.",
        day_posted: "March 15, 2024",
    },
];

const Blog = () => {

    const getAllArticles = async () => {
        try {
            const apiUrl = `${import.meta.env.VITE_BACKEND_URL}api/articles/`;
            const response = await axios.get(apiUrl, {
                headers: {
                    "Content-Type": "application/json", // Especifica el tipo de contenido esperado
                },
            });
            console.log();
            (response); // Actualiza el estado con los artículos obtenidos
        } catch (err) {
            console.error("Error fetching articles:", err);
        } finally {
        }
    };
    useEffect(()=>{
        getAllArticles();

    },[])

    return (
        <section>
            <div className="text-center space-y-5 py-[60px]">
                <p className="font-bold text-[#FF7F50] text-sm">Blog</p>
                <h2 className="font-bold text-4xl">Welcome To Your Source of Inspiration</h2>
                <p className="text-[#667085] text-medium w-[90%] md:w-[50%] mx-auto">
                    Explore articles packed with actionable fitness tips, strategies for a strong mindset, health improvement ideas, and everyday advice that makes a difference. Our blog is here to inspire and support you, no matter your goals.
                </p>
                <div className="flex items-center flex-col justify-center">
                    <span className="text-sm text-gray-400 mt-2">
                        Your privacy matters to us. Learn more in our <a href="/privacy-policy/" className="underline">Privacy Policy</a>
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {dummyArticles.map((article) => (
                    <BlogCard key={article.id} article={article} />
                ))}
            </div>
            {/* <WebSocketComponent/> */}
        </section>
    );
};

export default Blog;
