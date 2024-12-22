import ArticleBodyTemplate from "@/components/blog/ArticleBodyTemplate";
import ArticleSideInfo from "@/components/blog/ArticleSideInfo";

export interface ArticleProps {
  id: number;
  title: string;
  subtitle: string;
  first_section: string;
  second_section: string;
  third_section: string;
  fourth_section?: string;
  five_section?: string;
  conclusion?: string;
  image_urls: { url: string }[];
}

const dummyArticle: ArticleProps = {
  id: 1,
  title: "Mastering Investing Fundamentals",
  subtitle: "A Comprehensive Guide to Build Wealth",
  first_section: "Investing is a critical skill that enables you to grow your wealth and achieve financial freedom. In this guide, we cover the basics of investing and the steps to get started.",
  second_section: "Understanding different types of investments such as stocks, bonds, and real estate is crucial. Each type has its risks and rewards.",
  third_section: "Diversification is the key to managing risk in your portfolio. Spreading your investments across various assets minimizes the impact of any single investment's performance.",
  fourth_section: "Creating a financial plan and setting clear goals can help you stay focused. Remember to review and adjust your strategy periodically.",
  five_section: "Stay informed and educate yourself about the latest market trends and strategies. Continuous learning is vital for long-term success.",
  image_urls: [
    {
      url: "https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    { url: "https://via.placeholder.com/800x300" },
    { url: "https://via.placeholder.com/800x300" },
    { url: "https://via.placeholder.com/800x300" },
  ],
};

const Article = () => {
  const article = dummyArticle;

  return (
    <article className="px-[20px] md:px-[60px] mt-12" id="singleArticleView">
      <header className="text-center mb-8">
        <p className="font-bold text-lg text-[#FF7F50] mb-4">Fitness Hub</p>
        <p className="text-[27px] md:text-[37px] md:w-[60%] mx-auto font-bold mb-4">
          {article.title}
        </p>
      </header>

      {/* Main Image */}
      {article.image_urls[0] && (
        <figure className="mb-8">
          <img
            src={article.image_urls[0].url || "fallback-image-url.jpg"}
            alt={article.title}
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </figure>
      )}

      {/* Article Body */}
      <section className="py-8 flex flex-col lg:flex-row">
            <div className="lg:w-3/4">
                <ArticleBodyTemplate
                first_section={article.first_section}
                second_section={article.second_section}
                third_section={article.third_section}
                fourth_section={article.fourth_section}
                five_section={article.five_section}
                image_urls={article.image_urls}
                />
            </div>
            <div className="lg:w-1/4">
                <ArticleSideInfo/>
            </div>
      </section>
    </article>
  );
};

export default Article;
