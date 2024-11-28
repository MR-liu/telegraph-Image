import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-16 px-6 rounded-lg shadow-lg mb-12">
        <h1 className="text-5xl font-bold mb-4">About Orangethink</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          Pioneering innovation in cross-border e-commerce and global content platforms. Our journey bridges the past, present, and future of technological evolution.
        </p>
      </div>

      {/* Mission and Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            At Orangethink, we are dedicated to driving the future of cross-border commerce and content creation. By leveraging advanced technologies, 
            we aim to connect people globally, breaking barriers and creating a seamless experience for everyone.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            To build a world where innovation knows no bounds, fostering growth and collaboration across industries. 
            We aim to lead with integrity, ensuring our users and partners experience unparalleled service and innovation.
          </p>
        </div>
      </div>

      {/* History Section */}
      <div className="bg-gray-100 rounded-lg p-8 shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Orangethink’s journey began in the era of book printing, evolving alongside technological advancements into electronic typesetting and beyond. 
          Today, we are at the forefront of cross-border e-commerce, combining decades of experience with cutting-edge innovation. 
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our unwavering commitment to excellence has shaped Orangethink into a global leader. We believe that while technology transforms, our promise to deliver exceptional service remains constant.
        </p>
      </div>

      {/* Our Values */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-blue-500 text-5xl mb-4">
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
            <p className="text-gray-600">Constantly evolving to stay ahead in a dynamic global landscape.</p>
          </div>
          <div className="text-center">
            <div className="text-purple-500 text-5xl mb-4">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaboration</h3>
            <p className="text-gray-600">Building strong partnerships to foster global connections.</p>
          </div>
          <div className="text-center">
            <div className="text-green-500 text-5xl mb-4">
              <i className="fas fa-users"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Centric</h3>
            <p className="text-gray-600">Delivering value and exceptional experiences to our users worldwide.</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="text-lg leading-relaxed mb-6">
          Orangethink invites you to explore, collaborate, and innovate with us as we redefine the future of global commerce and content creation.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-4 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-100 transition-all"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
