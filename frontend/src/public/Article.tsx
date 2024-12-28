import ArticleBodyTemplate from "@/components/blog/ArticleBodyTemplate";
import ArticleSideInfo from "@/components/blog/ArticleSideInfo";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useGetAxiosRequest } from "@/hooks/useGetAxiosRequest";
import { useParams } from "react-router-dom";
import { ArticleDetail } from "@/types";

const ArticleView = () => {
  const params = useParams();

  const { data, loading, error } = useGetAxiosRequest<ArticleDetail>(`${import.meta.env.VITE_BACKEND_URL}api/articles/${params.str}`);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return <p className="text-center text-red-500">Failed to load article. Please try again later.</p>;
  }

  if (!data) {
    return <p className="text-center text-gray-500">No article found.</p>;
  }

  return (
    <article className="px-[20px] md:px-[60px] mt-12" id="singleArticleView">
      <header className="text-center mb-8">
        <p className="font-bold text-lg text-[#FF7F50] mb-4">
          {data.article_category.charAt(0).toUpperCase() + data.article_category.slice(1)} Hub
        </p>
        <p className="text-[27px] md:text-[37px] md:w-[60%] mx-auto font-bold mb-4">
          {data.artitle_title || "Title not available"}
        </p>
      </header>

      {/* Main Image */}
      {data.article_images && data.article_images.length > 0 && (
        <figure className="mb-8">
          <img
            src={data.article_images[0] || "fallback-image-url.jpg"}
            alt={data.artitle_title || "Article Image"}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </figure>
      )}

      {/* Article Body */}
      <section className="py-8 flex flex-col lg:flex-row">
        <div className="lg:w-3/4">
          <ArticleBodyTemplate
            first_section={data.article_first_paragraph}
            second_section={data.article_second_paragraph}
            third_section={data.article_third_paragraph}
            fourth_section={data.article_fourth_paragraph}
            five_section={data.article_fifth_paragraph || ""}
            image_urls={data.article_images}
          />
        </div>
        <div className="lg:w-1/4">
          <ArticleSideInfo
            articleCategory={data.article_category}
            articleDayPosted={data.article_day_posted}
            readingTime={data.reading_time}
          />
        </div>
      </section>
    </article>
  );
};

export default ArticleView;
