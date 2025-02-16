import React from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import rio_bg_img from "../assets/contact-section/rio-bg-img.jpg";

const HomeEnd = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed Background Image */}
      <div 
        className="fixed inset-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{
          backgroundImage: `url(${rio_bg_img})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col lg:flex-row lg:items-center lg:justify-between pt-20 lg:pt-0 pb-10 px-4 lg:px-20 gap-8">
        {/* Contact Details */}
        <div className="text-white text-center lg:text-left space-y-8 max-w-2xl w-full lg:w-1/2">
          <h2 className="text-4xl lg:text-5xl font-agraham font-bold mb-12">Contact us</h2>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <LocationOnIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-lg">
                Saintgits College of Engineering,<br />
                Kottukulam Hills, Pathamuttom P.O,<br />
                Kottayam-686 532
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <PhoneIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Contact Us</h3>
              <p className="text-lg">+91-8330061229</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center">
              <EmailIcon sx={{ fontSize: 32 }} />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-lg">pratitya@saintgits.org</p>
            </div>
          </div>
        </div>

        {/* Map with rounded corners */}
        <div className="w-full lg:w-1/2 h-80 lg:h-[600px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7869.970510896038!2d76.551359!3d9.51001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062ed484f475a7%3A0xea66b5d0e55062ca!2sSaintgits%20College%20of%20Engineering%20(Autonomous)%2C%20Kottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1739686828964!5m2!1sen!2sin"
            className="w-full h-full rounded-2xl"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeEnd;