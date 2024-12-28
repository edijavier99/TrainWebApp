import BlogSubscribeForm from "../forms/BlogSubscribeForm";

export const Newsletter = () => {
  return (
    <section
      id="newsletter"
      className="relative min-h-[450px] rounded-lg bg-cover bg-center flex justify-center items-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1612032636260-70ff387b0d5a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center px-4">
          <h4 className="text-4xl font-bold mb-4">Don't Miss Any Single Article</h4>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Weekly my team and I are posting new articles about how to improve our
            nutrition, how to have better control of our mindset, and tips for
            maintaining a balanced fitness lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <BlogSubscribeForm/>
          </div>
        </div>
      </div>
    </section>
  );
};