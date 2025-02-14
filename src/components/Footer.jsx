import React from 'react';
import pratityaLogo from "../assets/pratitya_logo.png";

const Footer = () => {
  return (
    <footer className="relative w-full backdrop-blur-md bg-black text-white border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      <div className="container mx-auto px-4 py-6 sm:py-8 relative">
        {/* Main Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-6 sm:pb-8 border-b border-white/10">
          {/* Logo and Description Section */}
          <div className="sm:col-span-2 lg:col-span-4 flex flex-col items-center sm:items-start space-y-4 lg:pl-10"> {/* Added lg:pl-10 */}
            <img
              src={pratityaLogo}
              alt="Pratitya Logo"
              className="w-20 h-24 sm:w-24 sm:h-28 lg:w-28 lg:h-30 object-contain drop-shadow-lg"
            />
            <p className="text-gray-200 text-sm lg:text-base text-center sm:text-left max-w-xs">
              Festa Feasta - Bringing the joy of food, festivities, and unforgettable celebrations to your doorstep.
            </p>
          </div>

          {/* Empty space - Only visible on large screens */}
          <div className="hidden lg:block lg:col-span-2" />

          {/* Support & Social Links Container */}
          <div className="sm:col-span-2 lg:col-span-6 grid grid-cols-2 gap-8 sm:gap-4">
            {/* Support Links */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="font-semibold text-base lg:text-lg text-white/90">
                Support
              </h3>
              <div className="flex flex-col items-center sm:items-start space-y-3">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Contact
                </a>
                <a 
                  href="/teams" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Credits
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                >
                  Feedback
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center sm:items-start space-y-4">
              <h3 className="font-semibold text-base lg:text-lg text-white/90">
                Connect
              </h3>
              <div className="flex items-center space-x-6">
                <a
                  href="https://www.facebook.com/pratitya.saintgits/"
                  className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/pratitya.sce/"
                  className="text-gray-300 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Made with love section */}
        <div className="pt-4 sm:pt-6 text-center">
          <p className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-300">
            Made with
            <span className="text-red-400 animate-pulse">❤</span>
            by
            <a
              href="/teams"
              className="text-white hover:text-gray-200 transition-colors duration-200 font-medium"
            >
              Pratitya'25 Team
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;