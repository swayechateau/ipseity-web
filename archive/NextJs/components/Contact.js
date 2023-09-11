import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="mb-8 text-center">
        <div className="my-4 text-lg text-gray-300 md:text-lg">
          Have Something to say?
        </div>
        <h1 className="text-4xl font-semibold text-gray-100 md:text-6xl">
          Contact Me
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <form action="#" className="w-full p-4 md:w-3/4 lg:w-3/6">
          <div className="p-3">
            <input
              className="block w-full px-4 py-3 leading-5 text-gray-100 placeholder-gray-200 placeholder-opacity-100 bg-transparent border-b outline-none appearance-none focus:border-green-600"
              type="text"
              placeholder="Name"
              required=""
            />
          </div>
          <div className="p-3">
            <input
              className="block w-full px-4 py-3 leading-5 text-gray-100 placeholder-gray-200 placeholder-opacity-100 bg-transparent border-b outline-none appearance-none focus:border-green-600"
              type="email"
              placeholder="Email Address"
              required=""
            />
          </div>

          <div className="p-3">
            <textarea
              className="w-full h-56 px-4 py-3 leading-5 text-gray-100 placeholder-gray-200 placeholder-opacity-100 bg-transparent border-b outline-none appearance-none resize-none focus:border-green-600"
              placeholder="Message"
              required=""
            ></textarea>
          </div>
          <div className="p-3 pt-4">
            <button className="w-full px-4 py-3 text-2xl font-bold text-white bg-gray-700 rounded hover:bg-gray-900">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
