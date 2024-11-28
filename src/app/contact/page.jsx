// ContactUs.js
import React from "react";

export default function ContactUs() {
  return (
    <div className="container mx-auto bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-lg shadow-lg mt-20 mb-36 p-10">
      <h1 className="text-5xl font-extrabold mb-10 text-center text-gray-800">Contact Us</h1>
      <p className="text-lg leading-relaxed mb-8 text-center">
        We value your feedback and inquiries. Whether you have questions about our platform, need support, or wish to provide suggestions, feel free to reach out to us. Our team is here to assist you.
      </p>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">1. Email Support</h2>
        <p className="text-lg leading-relaxed mb-4">
          For any inquiries or support requests, please email us at:
          <strong> <a href="mailto:support@imagecloud.us.kg" className="text-blue-600 hover:underline">support@imagecloud.us.kg</a></strong>. 
          We strive to respond to all emails within 24-48 hours.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">2. Frequently Asked Questions (FAQ)</h2>
        <p className="text-lg leading-relaxed mb-4">
          Before contacting us, check out our <strong><a href="/faq" className="text-blue-600 hover:underline">FAQ page</a></strong> for answers to common questions about using our platform, uploading images, and account management.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">3. Social Media</h2>
        <p className="text-lg leading-relaxed mb-4">
          Follow us on social media to stay updated on platform news, new features, and announcements:
        </p>
        <ul className="list-disc pl-8 text-lg space-y-2">
          <li>
            <strong>Twitter:</strong> <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">@yourhandle</a>
          </li>
          <li>
            <strong>Facebook:</strong> <a href="https://facebook.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">facebook.com/yourhandle</a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">4. Feedback Form</h2>
        <p className="text-lg leading-relaxed mb-4">
          Use our feedback form to share your suggestions, report issues, or provide comments:
        </p>
        <form className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Type your message here..."
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Send Message
          </button>
        </form>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-700">5. Office Address</h2>
        <p className="text-lg leading-relaxed">
          If you need to reach us by mail, our office is located at:
        </p>
        <address className="text-lg leading-relaxed text-gray-700 mt-2">
          Orange Think LLC <br />
          2C Argyle Street, Mong Kok, Hong Kong <br />
        </address>
      </section>
    </div>
  );
}
