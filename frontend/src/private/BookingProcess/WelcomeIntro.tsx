import { WelcomeForm } from "@/components/forms/WelcomeForm";

const WelcomeIntro = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <div className="max-w-4xl w-full border p-8 rounded-lg">
        <div className="flex flex-col items-center">
          <img
            src="https://images.unsplash.com/photo-1627483298423-03e2e972431c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Welcome Illustration"
            className="w-full h-[200px] object-cover rounded-lg mb-6"
          />
          <h3 className="text-3xl font-extrabold  text-center">Welcome to Your First Step Towards Change</h3>
          <p className="mt-4 text-gray-400 text-center text-lg leading-relaxed">
            I am delighted that you have taken this decision. To ensure I can genuinely assist you, I offer a complimentary first session of 45 minutes for us to get acquainted...
          </p>
        </div>

        <div className="mt-8 bg-[#FF7F50] rounded-lg p-6 border">
          <h4 className="text-xl font-bold text-black">Agenda for Our First Meeting:</h4>
          <ul className="mt-4 space-y-4 text-gray-600 list-disc list-inside">
            <li>
              <span className="font-medium text-black">Welcome and Introduction:</span> We'll start with a warm welcome and a brief introduction to get to know you better.
            </li>
            <li>
              <span className="font-medium text-black">Goal Discussion:</span> We'll discuss your personal goals and what you hope to achieve.
            </li>
            <li>
              <span className="font-medium text-black">Personalized Planning:</span> Together, we'll create a plan tailored to your specific needs and preferences.
            </li>
          </ul>
        </div>

        <p className="mt-6 text-gray-300 text-center text-lg">
          I look forward to our first meeting to begin this journey towards a healthier and happier version of yourself!
        </p>

        <div className="mt-10 flex justify-center">
          <WelcomeForm  />
        </div>
      </div>
    </div>
  );
};

export default WelcomeIntro;
