// src/pages/ContactUs.jsx
import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contactus"
      className="min-h-screen xs:flex-col xs:items-center xs:justify-center sm:flex sm:flex-row lg:flex lg:flex-row lg:items-center lg:justify-end py-6 px-4 sm:px-6 lg:px-4"
    >
      <div className="max-w-md w-full space-y-8 flex flex-col">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
            Contact Us
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            We would love to hear from you!
          </p>
        </div>
        {/* <form className="mt-8 space-y-6" action="/" method="POST"> */}
        <form
          className="mt-8 space-y-6"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Your message"
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
      {/* Contact Information Section */}
      <div className="mt-10 text-center mx-auto">
        <h3 className="text-xl font-bold text-gray-200">Contact Information</h3>
        <p className="mt-2 text-gray-300">
          Email:{" "}
          <a
            href="mailto:your-email@example.com"
            className="text-indigo-400 font-bold "
          >
            collabcraze.tech@gmail.com
          </a>
        </p>
        <p className="mt-2 text-gray-300 text-center">
          Mobile:{" "}
          <a
            href="tel:+1234567890"
            className="text-indigo-400 text-center font-bold"
          >
            (+91) 9022243467 <br /> (+91) 9322003874 <br /> (+91) 7066908355
          </a>
        </p>
        <p className="mt-2 text-gray-300">
          {" "}
          Location:{" "}
          <span className="text-indigo-400 text-center font-bold">
            Pune, Maharashtra, India
          </span>{" "}
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
