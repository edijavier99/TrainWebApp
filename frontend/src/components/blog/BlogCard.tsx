// components/BlogCard.js
import { FaArrowAltCircleRight } from "react-icons/fa";
import { Article } from "@/types";
import { useNavigate } from "react-router-dom";

interface Props{
  article : Article
}

export const BlogCard = ({ article }:Props) => {
  const navigate = useNavigate()

  const handleOnClick = () =>{
    navigate(`article/${article.article_slug}/`)
  }

  return (
    <div className="space-y-3 flex flex-col h-full">
      <div>
        <img src={article.first_image} className="rounded-lg object-cover" alt={article.artitle_title} />
      </div>
      <p className="text-[#FF7F50] mb-3 font-bold">{article.article_category.charAt(0).toUpperCase()+ article.article_category.slice(1)}</p>
      <div className="flex-grow">
        <h2 className="text-2xl font-bold">
          {article.artitle_title}
        </h2>  
        <div className="text-gray-500 mb-4 line-clamp-3">
          {article.article_first_paragraph}
        </div> 
      </div>
      <div className="text-sm flex items-center justify-between text-gray-500 font-bold mt-auto">
        <p>{article.article_day_posted}</p>
        <button onClick={handleOnClick}>
          <FaArrowAltCircleRight className="text-2xl text-[#FF7F50]  hover:text-[#E85D39] duration-300"/>
        </button>
      </div>
    </div>
  );
};


