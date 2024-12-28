
export interface Article {
    article_slug:string;
    first_image: string;
    article_category: string;
    artitle_title: string;
    article_first_paragraph: string;
    article_day_posted: string;
  }

  export interface ArticleDetail {
    article_slug:string;
    article_category: string;
    artitle_title: string;
    article_first_paragraph: string;
    article_second_paragraph:string;
    article_third_paragraph:string;
    article_fourth_paragraph?:string;
    article_fifth_paragraph?:string;
    article_day_posted: string;
    article_images:string[];
    reading_time:number;
  }
  