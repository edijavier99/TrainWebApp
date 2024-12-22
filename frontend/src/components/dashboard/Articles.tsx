import { DataTable } from "../dataTable/components/data-table"
import { z } from "zod";
import { articleSchema } from "../dataTable/data/schema";
import { articleType } from "../dataTable/data/data";
import { ArticlesColumns } from "../dataTable/components/columns/ArticlesColumns";
import { FaPlus } from "react-icons/fa";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";


const ArticleDashboard = () =>{
    const navigate = useNavigate();

    const handleClickButton = () =>{
        navigate("/article/create/")
    }

    const articles = [
        {
          id: "1",
          title: "5 Exercises to Boost Your Energy Levels",
          category: "Fitness",
          published_date: "2023-01-15",
        },
        {
          id: "2",
          title: "The Power of Positive Thinking",
          category: "Mindset",
          published_date: "2023-02-20",
        },
        {
          id: "3",
          title: "10 Simple Habits for a Healthier Lifestyle",
          category: "Health",
          published_date: "2023-03-10",
        },
      ];

    const parsedUsers = z.array(articleSchema).parse(articles);
    
    const filterOptions = [
        { column: "category", title: "Category", options: articleType},
      ];
    
    return(
            <section className="hidden h-full flex-1 flex-col space-y-8 px-[20px] py-4 md:flex">
               {/* Pass parsed users data to the DataTable */}
              <h2 className="text-gray-500 text-xl">Articles </h2>
              <hr/>
              <div>
                <Button onClick={handleClickButton} className="float-right">Create New Article <FaPlus/></Button>
              </div>
              
              <DataTable data={parsedUsers} filterOptions={filterOptions} columns={ArticlesColumns} />
            </section>
    ) 
}

export default ArticleDashboard