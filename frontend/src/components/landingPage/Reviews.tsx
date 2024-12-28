
interface Review {
  id: string;
  name: string;
  img: string;
  title: string;
  description: string;
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Michael Smith",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "It was a great experience",
    description:
      "Working with [Your Name] has been a game changer for me. Their mindset coaching helped me overcome mental blocks and achieve my fitness goals. Highly recommend!",
  },
  {
    id: "2",
    name: "Alice Johnson",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "It really helped me a lot",
    description:
      "I've seen incredible results in my health and fitness since starting with [Your Name]. Their personalized approach to coaching is exactly what I needed.",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMGltYWdlfGVufDB8fDB8fHww",
    name: "Emily Davis",
    title: "Amazing experience",
    description:
      "The mindset techniques I've learned from [Your Name] have not only improved my fitness but also my overall outlook on life. Thank you for your guidance and support!",
  },
];

export const Reviews = () => {
  const showReviews = () => {
    return reviews.map((item) => (
      <article
        key={item.id}
        className="p-5 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl"
      >
        <div className="flex items-center mb-4">
            <span className="p-2 border-2  border-dotted border-[#FF7F50] rounded-full  text-[#FF7F50]">
            <img
              className="w-12 h-12 rounded-full object-cover"
              alt={item.name}
              src={item.img}
            />
          </span>
          <p className="ml-3 font-bold dark:text-gray-300">{item.name}</p>
        </div>
        <p className="text-gray-500 mb-4">{item.description}</p>
        <div className="flex items-center">
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <i className="fas fa-star text-yellow-500 mr-1"></i>
          <i className="far fa-star text-yellow-500"></i>
        </div>
      </article>
    ));
  };

  return (
    <section className="min-h-[600px] container mx-auto py-10">
    <div className="text-center mb-10 space-y-5">
      <p className="font-bold text-[#FF7F50] text-sm">Testimonials</p>
      <h4 className="text-4xl font-extrabold mb-4">What Our Clients Are Saying</h4>
      <p className="text-lg text-gray-500 max-w-4xl mx-auto mb-10">
        Hear firsthand from our clients who have experienced powerful transformations through personalized coaching. 
        Their stories are a testament to the positive impact that mindset, fitness, and nutrition have on life goals and overall well-being.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {showReviews()}
    </div>
  </section>
  
  );
};
