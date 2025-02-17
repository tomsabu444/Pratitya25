import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const HomeEnd = () => {
  const bgImageUrl = "https://firebasestorage.googleapis.com/v0/b/pratitya-25.firebasestorage.app/o/contact-section%2Frio-bg-img.webp?alt=media&token=f2549ec0-730c-4d96-a4a7-c253e4c02de3";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row items-start lg:items-center justify-center lg:justify-between max-w-8xl mx-auto pt-16 sm:pt-20 lg:pt-0 pb-8 sm:pb-10 px-4 sm:px-8 lg:px-16 xl:px-20 gap-8 sm:gap-10 lg:gap-16">
        {/* Contact Details */}
        <div className="text-white text-center lg:text-left space-y-6 sm:space-y-8 w-full lg:w-5/12 xl:w-[45%]">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl xl:text-5xl font-agraham font-bold mb-8 sm:mb-12">
            Contact us
          </h2>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <LocationOnIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg xl:text-xl font-bold mb-1 sm:mb-2">
                Address
              </h3>
              <p className="text-sm sm:text-base xl:text-lg">
                Saintgits College of Engineering,<br />
                Kottukulam Hills, Pathamuttom P.O,<br />
                Kottayam-686 532
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <PhoneIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg xl:text-xl font-bold mb-1 sm:mb-2">
                Contact Us
              </h3>
              <p className="text-sm sm:text-base xl:text-lg">
                +91-8330061229
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <EmailIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-base sm:text-lg xl:text-xl font-bold mb-1 sm:mb-2">
                Email
              </h3>
              <p className="text-sm sm:text-base xl:text-lg">
                pratitya@saintgits.org
              </p>
            </div>
          </div>
        </div>

        {/* Map Container */}
        <div className="w-full lg:w-5/12 xl:w-[45%] h-72 sm:h-80 lg:h-[28rem] xl:h-[32rem] 2xl:h-[34rem] lg:my-8">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl shadow-black/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7869.970510896038!2d76.551359!3d9.51001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ed484f475a7%3A0xea66b5d0e55062ca!2sSaintgits%20College%20of%20Engineering%20(Autonomous)%2C%20Kottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1739686828964!5m2!1sen!2sin"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;