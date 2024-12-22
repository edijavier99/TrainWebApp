import { FaInstagram,FaFacebook,FaWhatsapp } from "react-icons/fa";

const ArticleSideInfo = () => {
    return (
      <aside className="w-full">
        {/* Article Metadata */}
        <div className="mb-6 bg-gray-100 p-6  rounded-lg ">
          <h4 className="text-md font-bold text-gray-700 mb-3 pb-2 border-b border-gray-300">Details</h4>
          <ul className="space-y-2">
            <li className="flex justify-between items-center text-gray-600">
              <span className="text-sm font-semibold">Date</span>
              <span className="text-sm text-gray-600">23-03-24</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <span className="text-sm font-semibold">Category</span>
              <span className="text-sm text-gray-600">Fitness</span>
            </li>
            <li className="flex justify-between items-center text-gray-600">
              <span className="text-sm font-semibold">Reading</span>
              <span className="text-sm text-gray-600">10 minutes</span>
            </li>
          </ul>
        </div>
  
        {/* Author Information */}
        <div className="bg-gray-100 p-6 mb-6 rounded-lg ">
          <h4 className="text-md font-bold text-gray-700 mb-3 pb-2  border-b border-gray-300">Author</h4>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt="Author profile"
              className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <p className="font-semibold text-gray-800">Jesus Antonio</p>
              <p className="text-sm text-gray-500">Personal Coach</p>
            </div>
          </div>
          <p className="text-sm text-gray-600">
            Jesus is a certified personal coach specializing in fitness and nutrition. He helps individuals achieve
            their health goals through personalized plans.
          </p>
        </div>
        {/* Share icons */}
        <div className="bg-gray-100 p-6 rounded-lg ">
            <h4 className="text-md font-bold text-gray-700 mb-3 border-b pb-2 border-gray-300">Share</h4>
            <p className="text-gray-600 text-sm mb-3 ">Read , enjoy & share!</p>
            <ul className="flex text-black space-x-3">
                <li><button><FaInstagram/></button></li>
                <li><button><FaFacebook/></button></li>
                <li><button><FaWhatsapp/></button></li>
            </ul>
        </div>
      </aside>
    );
  };
  
  export default ArticleSideInfo;
  
