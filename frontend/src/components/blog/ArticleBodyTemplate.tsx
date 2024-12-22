


export interface ArticleProps {
  first_section: string;
  second_section: string;
  third_section: string;
  fourth_section?: string;
  five_section?: string;
  image_urls: { url: string }[];
}


const ArticleBodyTemplate = ({first_section,second_section,third_section,fourth_section,five_section,image_urls}: ArticleProps) =>{
    return(
        <article>
            <section className="lg:w-3/4 mx-auto py-8">
              {/* Render sections directly */}
              {first_section && (
                <article className="mb-8">
                  <p>{first_section}</p>
                </article>
              )}

              {image_urls[1] && (
                <figure className="my-8">
                  <img
                    src={image_urls[1].url || "fallback-image-url.jpg"}
                    alt="Second illustrative image"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </figure>
              )}

              {second_section && (
                <article className="mb-8">
                  <p>{second_section}</p>
                </article>
              )}

              {image_urls[2] && (
                <figure className="my-8">
                  <img
                    src={image_urls[2].url || "fallback-image-url.jpg"}
                    alt="Third illustrative image"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </figure>
              )}

              {third_section && (
                <article className="mb-8">
                  <p>{third_section}</p>
                </article>
              )}

              {image_urls[3] && (
                <figure className="my-8">
                  <img
                    src={image_urls[3].url || "fallback-image-url.jpg"}
                    alt="Fourth illustrative image"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </figure>
              )}

              {fourth_section && (
                <article className="mb-8">
                  <p>{fourth_section}</p>
                </article>
              )}

              {image_urls[4] && (
                <figure className="my-8">
                  <img
                    src={image_urls[4].url || "fallback-image-url.jpg"}
                    alt="Fifth illustrative image"
                    className="w-full h-[300px] object-cover rounded-lg"
                  />
                </figure>
              )}

              {five_section && (
                <article className="mb-8">
                  <p>{five_section}</p>
                </article>
              )}
            </section>
        </article>
    )
}

export default ArticleBodyTemplate