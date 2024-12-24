
export const Footer = () => {
  return (
    <footer>
      <div className="py-10">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Request Information Section */}
          <div className="mb-6 md:mb-0  text-center md:text-left md:max-w-md">
            <h4 className="text-2xl font-semibold mb-4">Request More Information</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              I know the journey hasn't always been easy. Each obstacle, every challenge, has
              played a part in shaping the resilient and determined person you are today. It's
              not just about where you've been, but where you're headed. Let me help you take
              the next step towards a brighter future. Your dreams are within reach, and
              together, we can make them a reality.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-sm ">
              <li><a href="about-me/" className="hover:text-[#FF7F50] duration-300">About Us</a></li>
              <li><a href="blog/" className="hover:text-[#FF7F50] duration-300">Blog</a></li>
              <li><a href="privacy" className="hover:text-[#FF7F50] duration-300">Privacy Policy</a></li>
              <li><a href="terms" className="hover:text-[#FF7F50] duration-300">Terms of Service</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center md:text-left">
            <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-200"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left">
          <img
            src="/path/to/logo.png"
            alt="Logo"
            className="h-10 mb-4 md:mb-0"
          />
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} App. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
